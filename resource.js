const navSlide = () => {
	const burger = document.querySelector("#sidebar_btn");
	const label = document.querySelector("label");

	//Toggle links
	burger.addEventListener("click", () => {
		label.classList.toggle("toggle");

		//Burger Animations
		burger.classList.toggle("toggle");
	});
};

navSlide();
//MODAL POPUP
const modalBtn = document.querySelector("#add");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");

modalBtn.addEventListener("click", () => {
	modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", () => {
	modalBg.classList.remove("bg-active");
});
//SIDEBAR BUTTONS
const currentLocation = location.href;
const sidebarLink = document.querySelectorAll(".sidebar a");
const sidebarLength = sidebarLink.length;
for (let i = 0; i < sidebarLength; i++) {
	if (sidebarLink[i].href === currentLocation) {
		sidebarLink[i].className = "active";
	}
}

//Selectors
const resourceInput = document.querySelector("#resource-title");
const resourceButton = document.querySelector("#add-btn");
const resourceList = document.querySelector(".display-list");
const displayResource = document.querySelector(".display-resource")
let categoryInput = document.querySelector("#categ");
let type = document.querySelector("#type");

//Event Listeners
document.addEventListener("DOMContentLoaded", getInput);
resourceButton.addEventListener("click", add);

resourceList.addEventListener("click", deleteCheck);

//Functions
function add(e) {
	//Prevent form from submitting
	e.preventDefault();

	modalBg.classList.remove("bg-active");

	//Resource DIV
	const resourceDiv = document.createElement("div");
	resourceDiv.classList.add("resource");
	//Create Li
	const newResource = document.createElement("li");
	newResource.innerText = resourceInput.value;
	newResource.classList.add("resource-item");

	resourceDiv.appendChild(newResource);
	//ADD INPUT TO LOCAL STORAGE
	saveLocalInput(resourceInput.value);

	//DELETE Button
	const deleteButton = document.createElement("button");
	deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

	deleteButton.classList.add("delete-btn");
	resourceDiv.appendChild(deleteButton);

	//APPEND TO LIST
	resourceList.appendChild(resourceDiv);
	// Clear Resource Input Value
	resourceInput.value = "";
	categoryInput.value = "";
	type.value = "";
	checkEmpty();
}

function deleteCheck(e) {
	e.preventDefault();
	const item = e.target;
	//Delete Input
	if (item.classList[0] === "delete-btn") {
		const resource = item.parentElement;
		resource.classList.add("fall");

		removeLocalInput(resource);

		resource.addEventListener("transitionend", () => {
			resource.remove();
		});
	}
}

function saveLocalInput(resource) {
	//CHECK---HEY Do I already have thing in there?
	let resources;
	if (localStorage.getItem("resources") === null) {
		resources = [];
	} else {
		resources = JSON.parse(localStorage.getItem("resources"));
	}
	resources.push(resource);
	localStorage.setItem("resources", JSON.stringify(resources));
}

function checkEmpty() {
	if (localStorage.getItem("resources") === null) {
		displayResource.style.display = "none";
	} else {
		displayResource.style.display = "flex";
	}
	console.log('working')
}

function getInput() {
	//CHECK---HEY Do I already have thing in there?
	let resources;
	if (localStorage.getItem("resources") === null) {
		resources = [];
	} else {
		resources = JSON.parse(localStorage.getItem("resources"));
	}
	resources.forEach((resource) => {
		//Resource DIV
		let resourceDiv = document.createElement("div");
		resourceDiv.classList.add("resource");
		//Create Li
		let newResource = document.createElement("li");
		newResource.innerText = resource;
		newResource.classList.add("resource-item");

		resourceDiv.appendChild(newResource);

		//DELETE Button
		const deleteButton = document.createElement("button");
		deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

		deleteButton.classList.add("delete-btn");
		resourceDiv.appendChild(deleteButton);

		//APPEND TO LIST
		resourceList.appendChild(resourceDiv);
		checkEmpty();
	});
	
}

function removeLocalInput(resource) {
	//CHECK---HEY Do I already have thing in there?
	let resources;
	if (localStorage.getItem("resources") === null) {
		resources = [];
	} else {
		resources = JSON.parse(localStorage.getItem("resources"));
	}
	const resourceIndex = resource.children[0].innerText;
	resources.splice(resources.indexOf(resourceIndex), 1);
	localStorage.setItem("resources", JSON.stringify(resources));
}

let form = document.getElementById("my-form");

//Delete event
resourceList.addEventListener("click", removeInput);

//Form submit event
form.addEventListener("submit", addList);

//Add list
function addList(e) {
	e.preventDefault();

	//Get input Value

	let newList = document.getElementById("resource-title").value;

	//Create a new Li getElementById
	let li = document.createElement("li");
	//Add Class
	li.className = "li";
	//Add text node with input value
	li.appendChild(document.createTextNode(newList));
	//Create A delete Button element
	let deleteBtn = document.createElement("i");

	//add classes to delete button
	deleteBtn.className = "fa fa-trash-alt delete";

	//Append button to list
	li.appendChild(deleteBtn);

	resourceList.appendChild(li);
}

function removeInput(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you sure?")) {
			let li = e.target.parentElement;
			resourceList.removeChild(li);
		}
	}
}

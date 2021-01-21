//Creating The filter Search input
var search_input = document.querySelector("#search_input");

let docBtn = document.querySelectorAll(".one button");

const svgBtn = document.querySelector(".search svg");
svgBtn.addEventListener("click", (e) => {
	let search_item = search_input.value.toLowerCase();
	let names = document.querySelectorAll(".files .one .info .name");
	names.forEach((item) => {
		if (item.textContent.toLowerCase().indexOf(search_item) != -1) {
			item.closest("div").parentElement.style.display = "flex";
		} else {
			item.closest("div").parentElement.style.display = "none";

		}
	});
});

var a = 1;
//For the Dropdown input Text
function toggler() {
	let dropdownBtn = document.getElementById("faculty-button");
	let select = document.querySelector("#content #dropdown");
	let arrow = document.querySelector(".arrow1");
	let options = document.querySelectorAll(".option");

	dropdownBtn.addEventListener("click", () => {
		if (a == 1) {
			arrow.style.transform = "rotate(225deg)";
			select.style.display = "block";
			return (a = 0);
		} else {
			arrow.style.transform = "";
			select.style.display = "";
			return (a = 1);
		}
	});

	options.forEach((option) => {
		option.addEventListener("click", (e) => {
			let labelElement = document.querySelector(`label[for="${e.target.id}"]`)
				.innerText;
			let selectLabel = document.getElementById("select-label1");
			selectLabel.innerText = labelElement;
			if (a == 1) {
				arrow.style.transform = "rotate(225deg)";
				select.style.display = "block";
				return (a = 0);
			} else {
				arrow.style.transform = "";
				select.style.display = "";
				return (a = 1);
			}
		});
	});
}

toggler();

var b = 1;
//For the Dropdown input Text
function toggleHandler() {
	let dropdownTwo = document.querySelector(".level #level-button");
	let select = document.querySelector("#content #level-dropdown");
	let arrow = document.querySelector(".arrow2");
	let options = document.querySelectorAll(".item");

	dropdownTwo.addEventListener("click", () => {
		if (b == 1) {
			arrow.style.transform = "rotate(225deg)";
			select.style.display = "block";
			return (b = 0);
		} else {
			arrow.style.transform = "";
			select.style.display = "";
			return (b = 1);
		}
	});

	options.forEach((option) => {
		option.addEventListener("click", (e) => {
			let labelElement = document.querySelector(`label[for="${e.target.id}"]`)
				.innerText;
			let selectLabel = document.getElementById("select-label2");
			selectLabel.innerText = labelElement;
			if (b == 1) {
				arrow.style.transform = "rotate(225deg)";
				select.style.display = "block";
				return (b = 0);
			} else {
				arrow.style.transform = "";
				select.style.display = "";
				return (b = 1);
			}
		});
	});
}

toggleHandler();

var c = 1;
function toggleHandlerTwo() {
	let dropdownThree = document.querySelector(".department #department-button");
	let selectTwo = document.querySelector("#content #department-dropdown");
	let arrowThree = document.querySelector(".arrow3");
	let optionsTwo = document.querySelectorAll(".item2");

	dropdownThree.addEventListener("click", () => {
		if (c == 1) {
			arrowThree.style.transform = "rotate(225deg)";
			selectTwo.style.display = "block";
			return (c = 0);
		} else {
			arrowThree.style.transform = "";
			selectTwo.style.display = "";
			return (c = 1);
		}
	});

	optionsTwo.forEach((option) => {
		option.addEventListener("click", (e) => {
			let labelElement = document.querySelector(`label[for="${e.target.id}"]`)
				.innerText;
			let selectLabel = document.getElementById("select-label3");
			selectLabel.innerText = labelElement;
			if (c == 1) {
				arrowThree.style.transform = "rotate(225deg)";
				selectTwo.style.display = "block";
				return (c = 0);
			} else {
				arrowThree.style.transform = "";
				selectTwo.style.display = "";
				return (c = 1);
			}
		});
	});
}

toggleHandlerTwo();

var d = 1;
function toggleHandlerThree() {
	let dropdownFour = document.querySelector(".course #course-button");
	let selectThree = document.querySelector("#content #course-dropdown");
	let arrowFour = document.querySelector(".arrow4");
	let optionsThree = document.querySelectorAll(".item3");

	dropdownFour.addEventListener("click", () => {
		if (d == 1) {
			arrowFour.style.transform = "rotate(225deg)";
			selectThree.style.display = "block";
			return (d = 0);
		} else {
			arrowFour.style.transform = "";
			selectThree.style.display = "";
			return (d = 1);
		}
	});

	optionsThree.forEach((option) => {
		option.addEventListener("click", (e) => {
			let labelElement = document.querySelector(`label[for="${e.target.id}"]`)
				.innerText;
			let selectLabel = document.getElementById("select-label4");
			selectLabel.innerText = labelElement;
			if (d == 1) {
				arrowFour.style.transform = "rotate(225deg)";
				selectThree.style.display = "block";
				return (d = 0);
			} else {
				arrowFour.style.transform = "";
				selectThree.style.display = "";
				return (d = 1);
			}
		});
	});
}

toggleHandlerThree();

// let navContainer = document.querySelector(".sidebar");
// let navLinks = document.querySelectorAll(".sidebar a");

// navLinks.forEach((el) => {
// 	el.addEventListener("click", () => {
// 		navContainer.querySelector(".active").classList.remove("active");

// 		el.classList.add("active");
// 	});
// });

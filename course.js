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
//MODAL PPOUP
const modalBtn = document.querySelector("#add");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");

modalBtn.addEventListener("click", () => {
	modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", () => {
	modalBg.classList.remove("bg-active");
});

//Input JavaScript codes

//Input Class: Represent an Input
class Input {
	constructor(course, category, level) {
		this.course = course;
		this.category = category;
		this.level = level;
	}
}

//UI Class: Handle UI Tasks
class UI {
	static displayInputs() {
		const inputs = Store.getInput();

		inputs.forEach((input) => UI.addInputToList(input));
	}
	static addInputToList(input) {
		const list = document.querySelector("#item-list");

		const row = document.createElement("div");
		row.classList.add('items');

		row.innerHTML = `
			<div class="border">
				<div class="lists">
					<p class="thick">${input.course}</p>
					<p>${input.category}</p>
					<p>${input.level}</p>
				</div>
			</div>
            <button><a href="#" class="delete">Remove</a></button>
        `;
		list.appendChild(row);
	}
	static deleteInputs(el) {
		if (el.classList.contains("delete")) {
			el.parentElement.parentElement.remove();
		}
	}

	static clearFields() {
		document.querySelector("#course_title").value = "";
		document.querySelector("#categ").value = "";
		document.querySelector("#lev").value = "";
	}
}

//Store Class: Handles Storage
class Store {
	static getInput() {
		let inputs;
		if (localStorage.getItem("inputs") === null) {
			inputs = [];
		} else {
			inputs = JSON.parse(localStorage.getItem("inputs"));
		}
		return inputs;
	}
	static addInputs(input) {
		const inputs = Store.getInput();
		inputs.push(input);

		localStorage.setItem("inputs", JSON.stringify(inputs));
	}

	static removeInputs(level) {
		const inputs = Store.getInput();
		console.log(inputs)
		inputs.forEach((input, index) => {
			if (inputs === level) {
				inputs.splice(index, 1);
			}
		});

		localStorage.setItem("inputs", JSON.stringify(inputs));
	}
}

//Event: Display Inputs
document.addEventListener("DOMContentLoaded", UI.displayInputs);

//Event: Add an Inputs
document.querySelector("#book-form").addEventListener("submit", (e) => {
	//Prevent actual submit
	e.preventDefault();
	//Get form values
	const course = document.querySelector("#course_title").value;
	const category = document.querySelector("#categ").value;
	const level = document.querySelector("#lev").value;

	//Validate
	// if (course === ''|| category === '' || level === '') {
	//    UI.showAlert('Please fill in all fields', danger);
	// }
	modalBg.classList.remove("bg-active");

	//Instantiate Inputs
	const input = new Input(course, category, level);
	console.log(input)

	//Add inputs to UI
	UI.addInputToList(input);

	//Add inputs to Store
	Store.addInputs(input);

	//Clear fields
	UI.clearFields();
});

//Event: Remove an Input
document.querySelector("#item-list").addEventListener("click", (e) => {
	//Remove input from UI
	UI.deleteInputs(e.target);

	//Remove book from store
	Store.removeInputs(e.target.parentElement.previousElementSibling.textContent);
});

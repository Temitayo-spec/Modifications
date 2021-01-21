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

//Codes for the enabling and disabling of inputs*/
var a = 1;

function disable() {
	let disableBtn = document.querySelector(".btn button");
	let input1 = document.getElementById("first-input");
	let input2 = document.getElementById("second-input");
	let input3 = document.getElementById("third-input");
	let input4 = document.querySelector(".tutorial #button");
	let input5 = document.getElementById("fifth-input");

	disableBtn.addEventListener("click", () => {
		if (a == 1) {
			button.textContent = "Edit Profile";
			input1.disabled = "true";
			input2.disabled = "true";
			input3.disabled = "true";
			input4.disabled = "true";
			input5.disabled = "true";

			return (a = 0);
		} else {
			button.textContent = "Save";
			input1.disabled = "";
			input2.disabled = "";
			input3.disabled = "";
			input4.disabled = "";
			input5.disabled = "";

			return (a = 1);
		}
	});
}

disable();

//For the Dropdown input Text
function toggler() {
	let dropdownBtn = document.getElementById("button");
	let select = document.getElementById("dropdown");
	let arrow = document.querySelector(".arrow");
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
			let selectLabel = document.getElementById("select-label");
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

// let navContainer = document.querySelector('.sidebar')
// let navLinks = document.querySelectorAll(".sidebar a");

// navLinks.forEach(el => {
// 	el.addEventListener('click', () => {
// 		navContainer.querySelector('.active').classList.remove('active');

// 		el.classList.add('active');
// 	})
// });
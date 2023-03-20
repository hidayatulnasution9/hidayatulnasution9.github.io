const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thums = document.querySelectorAll(".thum");

container.addEventListener("click", function (e) {
	//* cek apakah yang diklik adalah thum
	if (e.target.className == "thum") {
		jumbo.src = e.target.src;
		jumbo.classList.add("fade");
		setTimeout(function () {
			jumbo.classList.remove("fade");
		}, 500);

		thums.forEach(function (thum) {
			thum.className = "thum";
		});
		e.target.classList.add("active");
	}
});

alert("Welcome To Gallery Functional Testing");

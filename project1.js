alert("Welcome To Zona Game Klasik");

// Game Klasik Suwit jawa
// * Menangkap pilihan player
var tanya = true;
while (tanya) {
	var p = prompt("pilih : gajah, semut, orang");

	// * menangkap pilihan computer
	// ! membangkitkan bilangan random
	var comp = Math.random();

	if (comp < 0.34) {
		comp = "gajah";
	} else if (comp >= 0.34 && comp < 0.67) {
		comp = "orang";
	} else {
		comp = "semut";
	}

	// ! menentukan rules
	var hasil = "";
	if (p == comp) {
		hasil = "SERI";
	} else if (p == "gajah") {
		// if (comp == "orang") {
		// 	hasil = "Menang";
		// } else {
		// 	hasil = "KALAH";
		// }
		hasil = comp == "orang" ? "MENANG" : "KALAH";
	} else if (p == "orang") {
		// if (comp == "gajah") {
		// 	hasil = "KALAH";
		// } else {
		// 	hasil = "MENANG";
		// }
		hasil = comp == "gajah" ? "KALAH" : "MENANG";
	} else if (p == "semut") {
		// if (comp == "orang") {
		// 	hasil = "KALAH";
		// } else {
		// 	hasil = "MENANG";
		// }
		hasil = comp == "orang" ? "KALAH" : "MENANG";
	} else {
		hasil = "Memasukkan Pilihan Yang Salah";
	}

	// * tampilkan hasilnya
	alert(
		"Anda Memilih : " +
			p +
			" dan Komputer memilih : " +
			comp +
			"\n Maka Hasilnya : Anda " +
			hasil
	);

	tanya = confirm("Main Lagi");
}
alert("TerimaKasih Sudah Bermain");

// ? Bermain dengan warna
const tubahWarna = document.getElementById("tUbahWarna");
tubahWarna.onclick = function () {
	document.body.classList.toggle("biru-muda");
};

const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");
tubahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	console.log(r);
	document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ") ";
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ") ";
});

sHijau.addEventListener("input", function () {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBiru.addEventListener("input", function () {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.BackgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

document.body.addEventListener("mousemove", function (event) {
	const xPos = Math.round((event.clientX / window.innerWidth) * 255); //* posisi X saat mouse di gerakkan
	console.log(xPos);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255); //* posisi Y saat mouse di gerakkan
	console.log(yPos);
	document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",123) ";
});

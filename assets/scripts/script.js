const generate = document.getElementById("generate");
const password = document.getElementById("password");
const passLength = document.getElementById("passLength");
const rangeLength = document.getElementById("rangeLength");
const line = document.querySelector(".line");
const checkbox = [...document.querySelectorAll(".checkbox")];
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const strength = document.getElementById("strength");
const strengthBOX = [...document.querySelectorAll(".box")];
const copy = document.getElementById("copy-button");
const copied = document.querySelector(".copiedText");

//copy
copy.addEventListener("click", () => {
  let output = password.textContent;
  console.log(output);
  navigator.clipboard.writeText(output);
  copied.textContent = "COPIED";
});

// set password length
rangeLength.addEventListener("input", () => {
  passLength.textContent = rangeLength.value;
  line.style.width = `${5 * rangeLength.value}%`;
});

// set password
generate.addEventListener("click", () => {
  copied.textContent = "";
  let pass = "";
  if (uppercase.checked) {
    pass += "ABCDEFGHIJKLMNOPQRSTUVXZYZ";
  }
  if (lowercase.checked) {
    pass += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numbers.checked) {
    pass += "0123456789";
  }
  if (symbols.checked) {
    pass += "!@#$%^&*()";
  }

  let generated = "";

  for (let i = 0; i < rangeLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * pass.length);
    generated += pass[randomIndex];
  }
  if (
    uppercase.checked ||
    lowercase.checked ||
    numbers.checked ||
    symbols.checked
  ) {
    password.innerHTML = generated;
  } else {
    password.textContent = "";
  }
});

// checkbox and strength
let count = 0;
checkbox.forEach((x) => {
  x.addEventListener("click", () => {
    if (x.checked) {
      count += 1;
      x.style.backgroundColor = "#A4FFAF";
      x.style.border = "none";
      x.style.backgroundImage = "url('/assets/images/icon-check.svg')";
    } else {
      count -= 1;
      x.style.background = "";
      x.style.border = "2px solid #e6e5ea";
    }
    if (count == 0) {
      strength.textContent = "";
      strengthBOX[0].classList.remove("too-weak");
      strengthBOX[0].classList.remove("weak");
    }
    if (count == 1) {
      strength.textContent = "TOO WEAK";
      strengthBOX[0].classList.add("too-weak");
      strengthBOX[0].classList.remove("weak");
      strengthBOX[1].classList.remove("weak");
    }
    if (count == 2) {
      strength.textContent = "WEAK";
      strengthBOX[0].classList.add("weak");
      strengthBOX[1].classList.add("weak");
      strengthBOX[0].classList.remove("medium");
      strengthBOX[1].classList.remove("medium");
      strengthBOX[2].classList.remove("medium");
    }
    if (count == 3) {
      strength.textContent = "MEDIUM";
      strengthBOX[0].classList.remove("strong");
      strengthBOX[1].classList.remove("strong");
      strengthBOX[2].classList.remove("strong");
      strengthBOX[3].classList.remove("strong");
      strengthBOX[0].classList.add("medium");
      strengthBOX[1].classList.add("medium");
      strengthBOX[2].classList.add("medium");
    }
    if (count == 4) {
      strength.textContent = "STRONG";
      strengthBOX[0].classList.add("strong");
      strengthBOX[1].classList.add("strong");
      strengthBOX[2].classList.add("strong");
      strengthBOX[3].classList.add("strong");
    }
  });
});

const copyButton = document.getElementById("copyButton");
const textToCopy = document.getElementById("textToCopy");

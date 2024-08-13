/** @format */
const mainData = document.getElementById("form");
console.log(mainData);

function ageCalculator(e) {
  e.preventDefault();

  let displayMessage = document.getElementById("display-message");

  let birthYear = document.getElementById("birth-year").value;
  console.log(birthYear);

  let firstName = document.getElementById("first-name").value;
  console.log(firstName);

  let lastName = document.getElementById("last-name").value;
  console.log(lastName);

  //   const presentAge = new Date().getFullYear - inputData;
  const presentAge = 2024 - birthYear;
  console.log(presentAge);

  displayMessage.innerHTML = `Hello ${firstName}, You're ${presentAge} years old`;
}

mainData.addEventListener("submit", ageCalculator);

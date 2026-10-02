"use strict";

const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const course = document.getElementById("course");
const sessionDate = document.getElementById("sessionDate");
const seats = document.getElementById("seats");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const feedback = document.getElementById("feedback");
const resetButton = document.getElementById("resetButton");

// JS1: Add the three workshop names, then create one <option> per workshop.
const workshops = [
  "HTML ESSENTIALS",
  "CSS STUDIO",
  "JAVASCRIPT LAB",
  "Web Design Workshop"
];
workshops[0]
workshops[1]
workshops[2]
workshops[3]

for (const workshop of workshops) {
  const option = document.createElement("option");
  option.value = workshop;
  option.textContent = workshop;
  course.append(option);
}



function todayInLocalTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

sessionDate.min = todayInLocalTime();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.classList.add("was-validated");
  feedback.hidden = true;
  feedback.className = "feedback";

  const trimmedName = fullName.value.trim();
  if (trimmedName.length < 2) {
    fullName.setCustomValidity("Enter at least two characters for your name.");
  } else {
    fullName.setCustomValidity("");
  }

  resetButton.addEventListener("click", () => {
  form.reset();

  fullName.setCustomValidity("");
  password.setCustomValidity("");
  confirmPassword.setCustomValidity("");

  feedback.textContent = "";
  feedback.hidden = true;
  feedback.className = "feedback";

  form.classList.remove("was-validated");
});
  if (password.value.length < 10) {
    password.setCustomValidity("Use at least 10 characters for this exercise.");
  } else {
    password.setCustomValidity("");
  }

// JS2: Compare password and confirmPassword with an if/else structure.
if (password.value !== confirmPassword.value) {
  confirmPassword.setCustomValidity(
    "The passwords must match."
  );
} else {
  confirmPassword.setCustomValidity("");
}

// Set a custom validity message when they do not match, and clear it when they match.

  // JS3 TEMPORARY GUARD: Remove this entire block and replace it with reportValidity().
if (!form.reportValidity()) {
  feedback.textContent =
    "Check the highlighted fields and try again.";
  feedback.classList.add("error");
  feedback.hidden = false;
  return;
}
  // JS4: Replace 0 with the numeric value from the seats control.
  const seatCount = seats.valueAsNumber;
  let bookingType = "";
  if (seatCount === 1) {
  bookingType = "Individual booking";
} else {
  bookingType = "Group booking";
}
  // Use if/else: one seat is an Individual booking; all other valid values are a Group booking.

  feedback.textContent = `${trimmedName}, your ${bookingType.toLowerCase()} for ${seatCount} seat${seatCount === 1 ? "" : "s"} in ${course.value} on ${sessionDate.value} is ready to preview.`;
  feedback.classList.add("success");
  feedback.hidden = false;
});

form.addEventListener("input", (event) => {
  feedback.hidden = true;
  feedback.className = "feedback";

  if (event.target === fullName) fullName.setCustomValidity("");
  if (event.target === password) password.setCustomValidity("");
  if (event.target === confirmPassword) confirmPassword.setCustomValidity("");
});

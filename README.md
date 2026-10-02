# Workshop Registration Lab

## Student Information

**Name:** MAGOBA LENETTE
**Registration Number:*S25D14/034* 

---

## Project Description

The Workshop Registration Lab is a responsive web-based workshop registration page developed using **HTML, CSS, and JavaScript**.

The purpose of this project is to demonstrate how web forms can be created, styled, and validated using basic front-end web development technologies.

The registration page allows a user to enter their personal information, select a workshop, choose a session date, specify the number of seats required, create and confirm a password, and agree to the registration terms.

The project also uses JavaScript to provide additional validation and feedback when the user submits the registration form.

---

## Project Objectives

The main objectives of this project are to:

- Create a structured registration form using HTML.
- Use different HTML form controls such as text fields, email fields, date fields, number fields, and password fields.
- Apply CSS to create a clean and responsive page layout.
- Use CSS Grid to organize form controls into columns.
- Use JavaScript arrays and loops to create workshop options dynamically.
- Use JavaScript `if/else` statements to make decisions based on user input.
- Use JavaScript to perform additional form validation.
- Provide feedback to the user when information is invalid or when the registration is ready to be previewed.
- Practice testing and debugging a web form.

---

## Main Features

### 1. Personal Information

The user can enter their name and other required registration information.

### 2. Email Validation

The email field uses HTML form validation to ensure that the user enters a valid email address.

### 3. Portfolio URL

The form provides an optional portfolio field where the user can enter a website or portfolio URL.

### 4. Workshop Selection

The available workshops are created using a JavaScript array and a `for...of` loop.

The workshops include:

- HTML Essentials
- CSS Studio
- JavaScript Lab

### 5. Session Date

The user selects a date for the workshop. The date field is validated so that the user selects an appropriate date.

### 6. Number of Seats

The user selects the number of seats required.

The form accepts between **1 and 4 seats**.

The JavaScript program also determines the type of booking:

- **1 seat:** Individual booking
- **More than 1 seat:** Group booking

### 7. Password Confirmation

The user enters a password and then confirms it.

JavaScript checks whether the two passwords match. If they do not match, an error message is displayed.

### 8. Form Validation

The project uses both HTML and JavaScript validation to check the information entered by the user.

If invalid information is entered, the user is asked to correct the highlighted fields before continuing.

### 9. Registration Feedback

After the form passes validation, the page displays feedback showing the user's registration information, including the selected workshop, date, number of seats, and booking type.

---

## Technologies Used

The project was developed using the following technologies:

### HTML

HTML was used to create the structure of the registration page and the different form controls.

### CSS

CSS was used to style the registration page, organize the form using CSS Grid, and improve the appearance and responsiveness of the page.

### JavaScript

JavaScript was used to add dynamic behavior and validation to the registration form.

It was used for:

- Creating workshop options.
- Checking password confirmation.
- Checking form validity.
- Reading the number of seats as a number.
- Determining whether a booking is individual or group.
- Displaying registration feedback.

---

## Form Validation

The registration form uses HTML validation attributes such as:

- `required`
- `type="email"`
- `type="url"`
- `type="date"`
- `type="number"`
- `min`
- `max`

JavaScript provides additional validation for requirements that need custom logic.

For example, JavaScript checks that:

- The name contains at least two characters.
- The password contains at least ten characters.
- The password and confirmation password match.
- The form is valid before the registration feedback is displayed.

---

## Responsive Design

The page was designed to work on different screen sizes.

CSS Grid is used to arrange form fields into columns on larger screens. The layout can adjust when the page is viewed on a smaller screen such as a mobile phone.

This makes the registration form easier to use on both computers and mobile devices.

---

## Project Structure

The project contains the following main files:

```text
my-registration/
│
├── index.html
├── styles.css
├── app.js
└── README.md
```

### `index.html`

This file contains the structure of the registration page and the form controls.

### `styles.css`

This file contains the styling and layout of the registration page.

### `app.js`

This file contains the JavaScript code responsible for dynamic workshop selection, validation, booking type determination, and registration feedback.

### `README.md`

This file provides information about the project, how it works, and how to run it.

---

## How to Run the Project

### Method 1: Open the HTML File

1. Download or clone the repository.
2. Open the project folder.
3. Locate the `index.html` file.
4. Double-click `index.html`.
5. The registration page will open in a web browser.
6. Fill in the registration form.
7. Enter valid information in the required fields.
8. Submit the form.
9. Check the registration feedback displayed on the page.

### Method 2: Using VS Code

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html`.
4. Open the file in a web browser.
5. Test the registration form.
6. Make changes to the HTML, CSS, or JavaScript files when necessary.
7. Save the files and refresh the browser to see the changes.

---

## Testing

The registration form was tested using both valid and invalid information.

Some of the tests included:

- Submitting the form with empty required fields.
- Entering an invalid email address.
- Entering an invalid or incomplete name.
- Selecting different numbers of seats.
- Entering passwords that do not match.
- Entering matching passwords.
- Testing the form with valid registration information.
- Testing the page on different screen sizes.

The tests were used to confirm that the form validation and JavaScript functionality were working correctly.

---

## Learning Outcomes

Through this project, I gained practical experience in:

- Creating HTML forms.
- Using different HTML input types.
- Applying CSS Grid to a webpage.
- Creating and using JavaScript arrays.
- Using `for...of` loops.
- Using `if/else` statements.
- Working with JavaScript form validation.
- Using `valueAsNumber` to obtain numeric input.
- Using custom validity messages.
- Testing and debugging a web application.
- Uploading and managing a project using Git and GitHub.

---

## GitHub Repository

This project is hosted on GitHub as a public repository.

**Repository:** `workshop-registration-S25D14/034`

---

## Conclusion

The Workshop Registration Lab demonstrates the basic principles of front-end web development by combining HTML, CSS, and JavaScript.

The project provides a responsive registration form with input controls, validation, dynamic workshop selection, booking type determination, and user feedback.

The practical also provided experience with testing a web application and using Git and GitHub to manage and submit the project.
//Acessing button elements

let btn_submit = document.querySelector(".btn-submit");
let btn_birthday = document.querySelector(".btn-birthday");
let birthDay_gif = document.querySelector(".btn-birthday");

//Acessing invalid-id tags

let invalid_day = document.getElementById("invalid-day");
let invalid_month = document.getElementById("invalid-month");
let invalid_year = document.getElementById("invalid-year");

//Acessing the output id 

let output_day = document.getElementById("output-day");
let output_month = document.getElementById("output-month");
let output_year = document.getElementById("output-year");

btn_submit.addEventListener("click", () => {

    // Retrieve user inputs
    let day_userInput = document.getElementById("day").value;
    let month_userInput = document.getElementById("month").value;
    let year_userInput = document.getElementById("year").value;

    // Convert user input values to integers
    let daysInp = parseInt(day_userInput);
    let monthsInp = parseInt(month_userInput);
    let yearsInp = parseInt(year_userInput);

    // This field is required showing error message

    if (isNaN(daysInp) || isNaN(monthsInp) || isNaN(yearsInp)) {
        if (isNaN(daysInp)) {
            invalid_day.textContent = "This field is required";
        } else {
            invalid_day.textContent = "";
        }

        if (isNaN(monthsInp)) {
            invalid_month.textContent = "This field is required";
        } else {
            invalid_month.textContent = "";
        }

        if (isNaN(yearsInp)) {
            invalid_year.textContent = "This field is required";
        } else {
            invalid_year.textContent = "";
        }

        return; // Stop execution if there's an error
    } else {
        invalid_day.textContent = "";
        invalid_month.textContent = "";
        invalid_year.textContent = "";
    }

    // Get correct days in month
    const d = new Date()
    let daysInMonth = new Date(yearsInp, monthsInp, 0).getDate();
    if ((monthsInp < 1 || monthsInp > 12) || (daysInp < 1 || daysInp > daysInMonth) || yearsInp > d.getFullYear()) {
        if (monthsInp < 1 || monthsInp > 12) {
            invalid_month.textContent = "Must be a valid month";
        } else {
            invalid_month.textContent = " ";
        }
        if (daysInp < 1 || daysInp > daysInMonth) {
            invalid_day.textContent = "Must be a valid day";
        } else {
            invalid_day.textContent = " ";
        }
        if (yearsInp > d.getFullYear()) {
            invalid_year.textContent = "Must be in the past"
        } else {
            invalid_year.textContent = " ";
        }
        return;
    } else {
        invalid_day.textContent = "";
        invalid_month.textContent = "";
        invalid_year.textContent = "";
    }


    // Create birthDate in YYYY-MM-DD format
    let birthDate = `${yearsInp}-${monthsInp}-${daysInp}`;
    console.log("Birthdate:", birthDate);

    // Calculate age
    let age = calculateAge(birthDate);

    output_day.textContent = `${age.days + 1}`;
    output_year.textContent = `${age.years}`;
    output_month.textContent = `${age.months + 1}`;

});


function calculateAge(birthDate) {
    let today = new Date();
    let birth = new Date(birthDate);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    // Adjust for negative days
    if (days < 0) {
        months -= 1;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return { years, months, days };
}




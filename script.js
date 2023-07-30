// Get references to the input and button elements
const dateInput = document.getElementById('dobInput');
const myButton = document.getElementById('dobButton');

const divBefore = document.querySelector('.div_before');
const divAfter = document.querySelector('.div_after');
let startTime;

// Function to enable the button when a date is selected
function enableButton() {

    myButton.removeAttribute('disabled');
    myButton.classList.remove('inactive');
}

// Function to disable the button if the date is cleared

function disableButton() {
    if (!dateInput.value) {
        myButton.setAttribute('disabled', true);
    }
}


function changeDate() {
    const selectedDate = new Date(document.getElementById('dobInput').value);
    startTime = selectedDate.getTime();     //?????
    // console.log(startTime);
    divBefore.classList.add('hide');
    divAfter.classList.remove('hide');
    setInterval(updateRunningTime, 1000);
    updateRunningTime();  //nothing hapens even if we remove this?
}

// Function to update the running time display
function updateRunningTime() {
    if (!startTime) return;

    const currentTime = Date.now(); //in miliseconds
    const timeDifference = currentTime - startTime; 

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));

    const remainingTime = timeDifference % (1000 * 60 * 60 * 24 * 365);
    const months = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((remainingTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    const el = document.querySelectorAll(".card h2");
    el[0].innerText = years;
    el[1].innerText = months;
    el[2].innerText = days;
    el[3].innerText = hours;
    el[4].innerText = minutes;
    el[5].innerText = seconds;
}

// alert(new Date())
// alert(new Date(document.starttime).getTime())
// Add event listeners to the date input to trigger button activation/deactivation
dateInput.addEventListener('change', enableButton);
myButton.addEventListener('click', () => { changeDate() });


// myButton.addEventListener('onclick', classChange);
//   dateInput.addEventListener('input', disableButton);

// Call the disableButton function initially to set the button state
disableButton();
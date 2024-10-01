/** 
 * Name:Siddharth Mahendrabhai Nahar
 * Student ID:000930031
 * Date:01-10-2024
 * Course:Fall 2024 Web Application Development (CPRG-210-A)
 * Assignment 1 : HTML-CSS-JS Daily Assignments
*/


// Array of Websites
var websiteUrls = [
    'https://www.aircanada.com/ca',
    'https://www.busbud.com/en',
    'https://www.booking.com/',
    'https://www.ca.kayak.com/cars'
];
// Array of images
const imagesUrl = [
    './images/flight.jpg',
    './images/bus.jpg',
    './images/hotel.jpg',
    './images/carrental.jpg'
];

// Creating div to add images
let node3 = document.createElement('div');
node3.setAttribute('id', 'images');
node3.setAttribute('class', 'images');
document.querySelector('.images-body').appendChild(node3);

// Loop for images
for (let i = 0; i < imagesUrl.length; i++) {
    // Create the image element
    let image1 = document.createElement('img');
    image1.setAttribute('class', `images ${i}`);
    image1.setAttribute('id', `images ${i}`);
    image1.setAttribute('src', `${imagesUrl[i]}`);
    image1.style.cursor = 'pointer';
    node3.appendChild(image1);

    let latestCountdown = 5;

    // Event listener for Images
    image1.addEventListener('click', function (e) {
        let indexOfImageClicked = e.srcElement.className.split(' ')[1];
        let dialogBox = confirm('Are you sure you want to leave this website?');
        if (dialogBox) {
            let countdown = 5; 
            let redirectUrl = websiteUrls[indexOfImageClicked];

            let popup = window.open("", "Redirecting", "width=600,height=700");
            popup.document.body.innerHTML = `
                <p>Redirecting to ${redirectUrl} in <span id="countdown">${countdown}</span> seconds...</p>
            `;
            let countdownElement = popup.document.getElementById('countdown');
            let timer = setInterval(function () {
                countdown--; 
                countdownElement.textContent = countdown;
                latestCountdown = countdown;
                console.log("Latest Countdown Value in Parent:", latestCountdown);

                // Check if countdown is complete
                if (countdown <= 0) {
                    clearInterval(timer);
                    popup.close(); 
                    window.open(redirectUrl, "_self")
                }
            }, 1000);
        }
    });
}

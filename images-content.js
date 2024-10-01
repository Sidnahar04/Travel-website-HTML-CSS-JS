//variable for array of website
var websiteUrls = [
    'https://www.aircanada.com/ca',
    'https://www.busbud.com/en',
    'https://www.booking.com/',
    'https://www.ca.kayak.com/cars'
];
//variable for array of images
const imagesUrl = [
    './images/flight.jpg',
    './images/bus.jpg',
    './images/hotel.jpg',
    './images/carrental.jpg'
];

let node3 = document.createElement('div');
node3.setAttribute('id', 'images');
node3.setAttribute('class', 'images');
document.querySelector('.images-body').appendChild(node3);

//Loop for images
for (let i = 0; i < imagesUrl.length; i++) {
    // Create the image element
    let image1 = document.createElement('img');
    image1.setAttribute('class', `images ${i}`);
    image1.setAttribute('id', `images ${i}`);
    image1.setAttribute('src', `${imagesUrl[i]}`);
    node3.appendChild(image1);

    image1.addEventListener('click', function (e) {
        let indexOfImageClicked =  e.srcElement.className.split(' ')[1];
        let dialogBox = confirm('Are you sure you want to leave this website?');
        if (dialogBox) {
            //pop-up window code
            let countdown = 5;
            let redirectUrl = websiteUrls[indexOfImageClicked];
            let popup = window.open("", "Redirecting", "width=500,height=500");

            popup.document.write(`
                <html>
                <head><title>Redirecting...</title></head>
                <body>
                    <p>Redirecting to <a href=${redirectUrl}>${redirectUrl}<a> in <span id="countdown">${countdown}</span> seconds...</p>
                    <script>
                        let countdown = ${countdown};
                        let countdownElement = document.getElementById('countdown');
                        let timer = setInterval(function() {
                            countdown--;
                            countdownElement.textContent = countdown;
                            if (countdown <= 0) {
                                clearInterval(timer);
                                window.location.href = "${redirectUrl}"; // Redirect to the URL in the pop-up
                            }
                        }, 1000);
                    </script>
                </body>
                </html>
            `);
        }
    });
}

/** 
 * Name:Siddharth Mahendrabhai Nahar
 * Student ID:000930031
 * Date:01-10-2024
 * Course:Fall 2024 Web Application Development (CPRG-210-A)
 * Assignment 1 : HTML-CSS-JS Daily Assignments
*/

// Array for storing images
imagesUrl = [
    "./images/resort.jpg",
    "./images/hotels.jpg",
    "./images/motel.jpg",
    "./images/hostel.jpg"
]

// Array for storing description for each image
descriptionOfImage = [
    'A luxury facility that is intended primarily for vacationers',
    'A commercial establishment that provides lodging, meals, and other services to guests, travelers, and tourists',
    'Originally a hotel designed for persons travelling by automobile',
    'A lower-priced inn of sorts that offers basic, shared accommodations'
];

// Create element for images
let node1 = document.createElement('div');
node1.setAttribute('id', 'images');
node1.setAttribute('class', 'images');
document.querySelector('.images-header').appendChild(node1)

for (i = 0; i < imagesUrl.length; i++) {
    // Create a wrapper for each image
    let imageWrapper = document.createElement('div');
    imageWrapper.setAttribute('class', `image-wrapper image-${i}`);

    // Create the image element
    let image1 = document.createElement('img');
    image1.setAttribute('class', `images ${i}`);
    image1.setAttribute('id', `images ${i}`);
    image1.setAttribute('src', `${imagesUrl[i]}`);
    imageWrapper.appendChild(image1);
    node1.appendChild(imageWrapper);

    // Event to show description instead of image
    image1.addEventListener('mouseover', function (e) {
        let indexOfImage = e.srcElement.className.split(' ')[1];
        let hideElement = document.getElementById(`images ${indexOfImage}`);

        //Element for image text
        let node2 = document.createElement('div');
        node2.setAttribute('id', 'image-text');
        node2.setAttribute('class', 'image-text');
        node2.style.cursor = 'none';
        node2.innerHTML = descriptionOfImage[indexOfImage];

        // Append description to the wrapper (not the image)
        imageWrapper.appendChild(node2);
        hideElement.style.display = 'none';
    });

    // Event to revert to the image
    image1.addEventListener('mouseout', function () {
        let node2 = document.querySelector('#image-text');
        node2.remove();
        image1.style.display = 'block';
    });
}
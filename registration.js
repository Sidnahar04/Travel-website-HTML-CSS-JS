/** 
 * Name:Siddharth Mahendrabhai Nahar
 * Student ID:000930031
 * Date:01-10-2024
 * Course:Fall 2024 Web Application Development (CPRG-210-A)
 * Assignment 1 : HTML-CSS-JS Daily Assignments
*/

/**
 * Submit the form
 * Empty form after submitting 
 * Alert that form is submitted
 * @param  event 
 */
function submitForm(event) {
    event.preventDefault();
    if (confirm("Are you sure you want to submit form?")) {
        empltyFormValues()
        alert("Form is submitted and cleared.");
    }
}

/**
 * Reset form with confirm block and empty values
 */
function resetForm() {
    if (confirm("Are you sure you want to reset form?")) {
        empltyFormValues()
    } else {
        return false;
    }
}

/**
 * Empty the form values which are filled by user
 */
function empltyFormValues() {
    var elements = document.getElementsByTagName("input");
    for (i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
}

/**
 * Show paragraph information by taking id from html
 * @param paragraphId 
 */
function showInfo(paragraphId) {
    var paragraphs = document.querySelectorAll('.info-text');
    paragraphs.forEach(function (paragraph) {
        paragraph.classList.remove('active');
    });

    var targetParagraph = document.getElementById(paragraphId);
    targetParagraph.classList.add('active');
}

/**
 * Show paragraph information by taking id from html
 * @param paraId 
 */
function hideInfo(paraId) {
    var targetParagraph = document.getElementById(paraId);
    targetParagraph.classList.remove('active');
}

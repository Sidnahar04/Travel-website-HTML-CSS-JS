function submitForm(event) {
    event.preventDefault();
    if (confirm("Are you sure you want to submit form?")) {
        debugger
        empltyFormValues()
        alert("Form is submitted and cleared.");
    }
}

function resetForm() {
    if (confirm("Are you sure you want to reset form?")) {
        empltyFormValues()
    } else {
        return false;
    }
}

function empltyFormValues() {
    var elements = document.getElementsByTagName("input");
    for (i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
    return true;
}

function showInfo(paragraphId) {
    var paragraphs = document.querySelectorAll('.info-text');
    paragraphs.forEach(function (paragraph) {
        paragraph.classList.remove('active');
    });

    var targetParagraph = document.getElementById(paragraphId);
    targetParagraph.classList.add('active');
}

function hideInfo(paraId) {
    var targetParagraph = document.getElementById(paraId);
    targetParagraph.classList.remove('active');

}

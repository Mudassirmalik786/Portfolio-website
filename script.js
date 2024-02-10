// For animation of roles like web developer, content writer
var typed = new Typed('#element', {
    strings: ['<i>Web</i> Developer', 'Programmer', 'Content Writer'],
    typeSpeed: 150,
});
// For navigation purpose
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    for (const link of navLinks) {
        link.addEventListener("click", smoothScroll);
    }
});

function smoothScroll(event) {
    event.preventDefault();
    
    const targetClass = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetClass);
    
    targetElement.scrollIntoView({
        behavior: "smooth"
    });
}

// For download cv
document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("downloadButton");
    downloadButton.addEventListener("click", downloadCV);
});

function downloadCV() {
    const cvURL = "https://drive.google.com/file/d/1T9MnDMf3-JtzhoEsZGvWmxpwgTdQupY5/view?usp=sharing";
    const link = document.createElement("a");
    link.href = cvURL;
    link.download = "Mudassir-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

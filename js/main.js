// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//Pozovi dugme
function callPhoneNumber(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
}

// Leanguage change
// function changeLanguage() {
//     // Provera trenutnog jezika
//     var currentLanguage = document.documentElement.lang;

//     // Promena jezika
//     var newLanguage = (currentLanguage === "en") ? "sr" : "en";
//     // Postavljanje novog jezika na korenu dokumenta

//     // Preusmeravanje na odgovarajuću stranicu na novom jeziku (opciono)
//     // window.location.href = window.location.pathname + "?lang=" + newLanguage;
//     // Ovde možete dodati kod za ažuriranje ostalog sadržaja na stranici prema novom jeziku
//     if (newLanguage === "sr") {
//         document.getElementById("languageChange").innerHTML = "Promeni jezik: " + "<img id='flag' width='21px' src='img/serbia.png' alt='Serbian Flag'>";
//         document.getElementsByClassName("serbian").innerHTML = "gg";
//     } else {
//         document.getElementById("languageChange").innerHTML = "Change language: " + "<img id='flag' width='21px' src='img/united-kingdom.png' alt='United Kingdom Flag'>";
//     }

//     document.documentElement.lang = newLanguage;
// }
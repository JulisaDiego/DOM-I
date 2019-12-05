const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav

let navLinks = document.querySelectorAll('a');

navLinks[0].textContent = siteContent.nav['nav-item-1'];

navLinks[1].textContent = siteContent.nav['nav-item-2'];

navLinks[2].textContent = siteContent.nav['nav-item-3'];

navLinks[3].textContent = siteContent.nav['nav-item-4'];

navLinks[4].textContent = siteContent.nav['nav-item-5'];

navLinks[5].textContent = siteContent.nav['nav-item-6'];


// Nav changes 
let newLinks = document.querySelector('nav');


let startLink = document.createElement('a');
startLink.innerText = 'Home';
startLink.setAttribute('href', '#');

newLinks.prepend(startLink);

let endLink = document.createElement('a');
endLink.innerText = 'Blog';
endLink.setAttribute('href', '#');

newLinks.appendChild(endLink);



let newColor = newLinks.querySelectorAll('a');
newColor.forEach(a => a.style.color = 'darkBlue');


// cta 

const ctaH1 = document.querySelector('h1');

const ctaBtn = document.querySelector('cta-text, button');

const headerImg = document.getElementById('cta-img');


ctaH1.textContent = siteContent.cta['h1'];

ctaBtn.innerText = "Get Started";

headerImg.setAttribute('src', siteContent["cta"]["img-src"]);



// Main content h4

const mainContentH4 = document.querySelectorAll('h4');

mainContentH4[0].textContent = siteContent['main-content']['features-h4'];

mainContentH4[1].textContent = siteContent['main-content']['about-h4'];

mainContentH4[2].textContent = siteContent['main-content']['services-h4'];

mainContentH4[3].textContent = siteContent['main-content']['product-h4'];

mainContentH4[4].textContent = siteContent['main-content']['vision-h4'];

mainContentH4[5].textContent = siteContent['contact']['contact-h4'];


// Middle image

const middleImg = document.getElementById('middle-img');

middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


// Main content p

const mainContentP = document.querySelectorAll('.text-content p');

mainContentP[0].textContent = siteContent['main-content']['features-content'];

mainContentP[1].textContent = siteContent['main-content']['about-content'];

mainContentP[2].textContent = siteContent['main-content']['services-content'];

mainContentP[3].textContent = siteContent['main-content']['product-content'];

mainContentP[4].textContent = siteContent['main-content']['vision-content'];


// Contact p

const contactP = document.querySelectorAll('.contact p');

contactP[0].textContent = siteContent['contact']['address'];

contactP[1].textContent = siteContent['contact']['phone'];

contactP[2].textContent = siteContent['contact']['email'];


// Footer

const footerText = document.querySelector('footer p');

footerText.textContent = siteContent['footer']['copyright'];



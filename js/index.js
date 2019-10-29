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
    "h1": "DOM<br>Is<br>Awesome",
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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// const links = document.querySelectorAll('a');

// links[0].textContent = siteContent['nav']['nav-item-1'];
// links[1].textContent = siteContent['nav']['nav-item-2'];
// links[2].textContent = siteContent['nav']['nav-item-3'];
// links[3].textContent = siteContent['nav']['nav-item-4'];
// links[4].textContent = siteContent['nav']['nav-item-5'];
// links[5].textContent = siteContent['nav']['nav-item-6'];
const navLinks = document.querySelectorAll('a');
navLinks.forEach(item => {item.style.color = 'green'});
let count = 1;
console.log(navLinks);
navLinks.forEach( element => {
  if (count !== navLinks.length+1) {
    element.textContent = siteContent['nav'][`nav-item-${count}`];
    count += 1;
  }
})

let cta = document.querySelector('#cta-img');
cta.setAttribute('src', siteContent['cta']['img-src']);

const newLink1 = document.createElement('a');
const newLink2 = document.createElement('a');
newLink1.textContent = 'My First New Link';
newLink2.textContent = 'My Second New Link';

const parentElement = document.querySelector('nav');
parentElement.append(newLink1);
parentElement.prepend(newLink2);

const ctaText = document.querySelector('h1');
ctaText.innerHTML = siteContent['cta']['h1'];

const ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent['cta']['button'];

let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const mainTitles = document.querySelectorAll('.text-content h4');
mainTitles[0].textContent = siteContent['main-content']['features-h4'];
mainTitles[1].textContent = siteContent['main-content']['about-h4'];
mainTitles[2].textContent = siteContent['main-content']['services-h4'];
mainTitles[3].textContent = siteContent['main-content']['product-h4'];
mainTitles[4].textContent = siteContent['main-content']['vision-h4'];

const mainText = document.querySelectorAll('.text-content p');
mainText[0].textContent = siteContent['main-content']['features-content'];
mainText[1].textContent = siteContent['main-content']['about-content'];
mainText[2].textContent = siteContent['main-content']['services-content'];
mainText[3].textContent = siteContent['main-content']['product-content'];
mainText[4].textContent = siteContent['main-content']['vision-content'];

const bottomContentH4 = document.querySelector('.contact h4');
bottomContentH4.textContent = siteContent['contact']['contact-h4'];

const bottomContentPs = document.querySelectorAll('.contact p');
bottomContentPs[0].textContent = siteContent['contact']['address'];
bottomContentPs[1].textContent = siteContent['contact']['phone'];
bottomContentPs[2].textContent = siteContent['contact']['email'];

const footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright']
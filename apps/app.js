const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const nav = document.querySelectorAll(".nav");
const headline = document.querySelector(".headline");
const introduction = document.querySelectorAll(".introduction");
const info = document.querySelectorAll(".info-button");
const img_logo = document.querySelector(".img-logo");

const tl = new TimelineMax();

tl.fromTo(hero,1,
    {height: "0%"},
    {height: "100%", ease: Power2.easeInOut}
    )

.fromTo(hero, 1.2,
    {width: "80%"},
    {width: "100%", ease: Power2.easeInOut}
    )

.fromTo(slider, 1.2,
    {x: "-100%"},
    {x: "0%", ease: Power2.easeInOut},
    "-=1.0"
    )

.fromTo(logo,0.5,
    {opacity: "0", x: "30"},
    {opacity: "1", x: "0"},
    "-=0.5"
    )

.fromTo(nav,0.5,
    {opacity: "0", x: "-30"},
    {opacity: "1", x: "0"},
    "-=0.5"
    )

.fromTo(headline,0.5,
    {opacity: "0", x: "30"},
    {opacity: "1", x: "0"},
    "-=0.5"
    )

.fromTo(introduction,0.5,
    {opacity: "0", x: "-30"},
    {opacity: "1", x: "0"},
    "-=0.5"
    )

.fromTo(info,0.5,
    {opacity: "0", y: "30"},
    {opacity: "1", y: "0"},
    "-=0.5"
    )

.fromTo(img_logo,0.5,
    {opacity: "1", x: "-30"},
    {opacity: "0", x: "0"},
    "-=0.9"
    )


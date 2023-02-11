"use strict";

var $$ = (id) => document.getElementById(id);
var $ = (selector) => document.querySelector(selector);

function handleClick(td) {
  var isAbsent = false;
  var count = parseInt($$("count").innerHTML);
  console.log(td.className);

  if (td.className === "hover") {
    td.classList.toggle("hover");
  }

  if (td.className === "highlight") {
    isAbsent = false;
    count--;
    td.classList.toggle("highlight");
  } else {
    isAbsent = true;
    count++;
    td.classList.toggle("highlight");
  }

  if (!isAbsent) {
    td.classList.toggle("hover");
  }
  console.log(td.className);
  $$("count").innerHTML = count;
}

function handleMouse(td) {
  if (td.className == "highlight") return;
  td.classList.toggle("hover");
}

document.addEventListener("DOMContentLoaded", () => {
  const caption = $$("caption");
  const mainImage = $$("main_image");
  var imgLinks = Array.from($$("image_list").getElementsByTagName("a"));

  console.log(imgLinks);
  for (let i = 0; i < imgLinks.length; i++) {
    const image = new Image();
    image.src = imgLinks[i].getAttribute("href");
    imgLinks[i].addEventListener("click", (evt) => {
      console.log(i);
      mainImage.src = image.src;
      caption.firstChild.nodeValue = imgLinks[i].getAttribute("title");
      evt.preventDefault();
    });
  }

  for (var i = 1; i <= 2; i++) {
    $$(`table$${i}`).addEventListener("mouseover", (evt) => {
      handleMouse(evt.target);
    });
    $$(`table$${i}`).addEventListener("mouseout", (evt) => {
      handleMouse(evt.target);
    });
    $$(`table$${i}`).addEventListener("click", (evt) => {
      handleClick(evt.target);
    });
  }
});

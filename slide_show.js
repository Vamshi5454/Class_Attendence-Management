"use strict";

var $$ =(id) => document.getElementById(id);
var $ = (selector) =>document.querySelector(selector);

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
  

document.addEventListener("DOMContentLoaded", () =>{
    const caption= $("#caption");
    const mainImage =$("#main_image");
    const imgLinks =$("#image_list").querySelectorAll("a");

    console.log(imgLinks);

    const imageCache =[];
    for(let link of imgLinks){
        let image =new Image;
        image.src = link.href;
        image.title = link.title;
        imageCache[imageCache.length]=image;
    }

    let imageCounter =0;

    const timeFunc = setInterval(() =>{
        imageCounter =(imageCounter +1)% imageCache.length;

        let image = imageCache[imageCounter];
        mainImage.src =image.src;
        // caption.textContent =image.title;
    },1000) ;

    // $$("stop").addEventListener("clicl", () => {
    //     clearInterval(timeFunc);
    //     $$("stop").disabled ="true";
    // });

    for (var i = 1; i <= 2; i++) {
        $$(`table${i}`).addEventListener("mouseover", (evt) => {
          handleMouse(evt.target);
        });
        $$(`table${i}`).addEventListener("mouseout", (evt) => {
          handleMouse(evt.target);
        });
        $$(`table${i}`).addEventListener("click", (evt) => {
          handleClick(evt.target);
        });
      }

});
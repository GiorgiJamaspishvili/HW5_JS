'use strict';


// 1. შექმენით htmlში დივი, მიანიჭეთ id და ჯსდან ამ დივში დაამატეთ შემდეგი html სტრუქტურა:
// {/* <div class=“wraper”> 
//  <img src=“რაღაცა სურათის მისამართი დაამატეთ” alt=“image”>

// <h2 class=“title”> image title </h2>

// </div>
// H2 ჯს დან დაუმატეთ წითელი ფონტის ფერი და ფროტის ზომა 30px */}



// let wraper = document.createElement('div');
// wraper.classList.add('wraper');
// wraper.innerText = "hello";
// // wraper.setAttribute('img');
// wraper.setAttribute('target', '_blank');
// wraper.setAttribute('href', 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg')

// wraper.style.color = 'red';
// wraper.style.fontSize = '30px';


// document.getElementById('testDiv').appendChild(wraper);



// 2. შექმენით სამი დივი htmlში, მიანიჭეთ ერთიდაიგივე კლასის სახელი და ყველა დივში დაამატეთ ჯს-დან შემდეგი კოდი:
// <p class=“text”> hello </p>

// let allDivs = document.querySelectorAll('.threeDivs');

// allDivs.forEach(function(item){
//     let allDivs = document.createElement('p');
//     allDivs.classList.add('text');
//     allDivs.innerText = 'Hello';
//     item.appendChild(allDivs);
// })





// 3. Მარტივი burger bar-ის აწყობა
// let mobileMenu = document.querySelector(".hide_afterward");
// let burger = document.querySelector(".fa-solid fa-bars menu_bar");
// let close = document.querySelector(".fa-solid fa-xmark close_x");

// burger.addEventListener("click", () => {
//     mobileMenu.classList.add("diss_app");

// });
// close.addEventListener("click", () => {

//     mobileMenu.classList.remove("diss_app")

// });



// let mobMenu = document.querySelector(".hide_afterward");
// let burger = document.querySelector(".menu_bar");
// let xMark = document.querySelector(".close_x");


// burger.addEventListener("click", () => {
//     mobMenu.classList.add("diss_app");
//     burger.style.display = "none";
//     xMark.style.display = "block";
// });

// xMark.addEventListener("click", () => {
//     mobMenu.classList.remove("diss_app");
//     xMark.style.display = "none";
//     burger.style.display = "block";
// });





const main2 = document.getElementById("main-container-2");

const myBengSelector = document.getElementById("bengalSelector");
const myAbysSelector = document.getElementById("abysinianSelector");
const myRagdSelector = document.getElementById("ragdollSelector");
const myMainSelector = document.getElementById("mainSelector");

const myLeftButton = document.getElementById("btn-left");
const myRightButton = document.getElementById("btn-right");

const catTitle = document.getElementById("cat-name");

const myBurgerIcon = document.getElementById("burger-icon");
const myNavi = document.getElementById("navi-list");

///

myBurgerIcon.addEventListener("click", function displayNavi() {
    const myNaviStyle =  getComputedStyle(myNavi, null)
    if(myNaviStyle.display == "none") {
        myNavi.style.display = "flex"
        myNavi.style.flexDirection = "column"
        myNavi.style.gap = 20
    } else if(myNaviStyle.display == "flex") {
        myNavi.style.display = "none"
    }
    console.log(myNaviStyle.display);
})

///

const getName = (i, data) => {
    let name = data[i].name;
    catTitle.innerText = name;
}

myBengSelector.addEventListener("click", function getBengalImage() {

    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => getName(10, data))

    fetch("https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=beng&api_key=live_y7qVxgAFuFGytLjRZccpbI5CGmv3LGoOm47AcaBmRs7EPYVzFEGrgYmFg2KppZTd")
        .then((data) => data.json())
        .then((data) => main2.style.backgroundImage = `url(${data[17].url})`)
});


myAbysSelector.addEventListener("click", function getAbyssinianImage() {

    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => getName(0, data))

    fetch("https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=abys&api_key=live_y7qVxgAFuFGytLjRZccpbI5CGmv3LGoOm47AcaBmRs7EPYVzFEGrgYmFg2KppZTd")
        .then((data) => data.json())
        .then((data) => main2.style.backgroundImage = `url(${data[12].url})`)
})

myRagdSelector.addEventListener("click", function getRagdImage() {

    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => getName(51, data))

    fetch("https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=ragd&api_key=live_y7qVxgAFuFGytLjRZccpbI5CGmv3LGoOm47AcaBmRs7EPYVzFEGrgYmFg2KppZTd")
        .then((data) => data.json())
        .then((data) => main2.style.backgroundImage = `url(${data[27].url})`)
})

myMainSelector.addEventListener("click", function getMainImage() {

    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => getName(40, data))

    fetch("https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=mcoo&api_key=live_y7qVxgAFuFGytLjRZccpbI5CGmv3LGoOm47AcaBmRs7EPYVzFEGrgYmFg2KppZTd")
        .then((data) => data.json())
        .then((data) => main2.style.backgroundImage = `url(${data[4].url})`)
})

const photosArrIDs = [17, 12, 27, 4];
const photosArrURLs = ["https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=beng&api_key=live_y7qVxgAFuFGytLjRZccpbI5CGmv3LGoOm47AcaBmRs7EPYVzFEGrgYmFg2KppZTd", 
"https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=abys&api_key=live_y7qVxgAFuFGytLjRZccpbI5CGmv3LGoOm47AcaBmRs7EPYVzFEGrgYmFg2KppZTd", 
"https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=ragd&api_key=live_y7qVxgAFuFGytLjRZccpbI5CGmv3LGoOm47AcaBmRs7EPYVzFEGrgYmFg2KppZTd", 
"https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=mcoo&api_key=live_y7qVxgAFuFGytLjRZccpbI5CGmv3LGoOm47AcaBmRs7EPYVzFEGrgYmFg2KppZTd"];
const nameIDs = [10, 0, 51, 40];

let counter = 0;

myLeftButton.addEventListener("click", () => {

    if(counter > 0 && counter <= 3) {
        counter -= 1;
    } else {
        counter = 3;
    } 

    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => {
            let name = data[nameIDs[counter]].name;
            catTitle.innerText = name;
        })

    fetch(`${photosArrURLs[counter]}`)
        .then((data) => data.json())
        .then((data) => main2.style.backgroundImage = `url(${data[photosArrIDs[counter]].url})`)
})

myRightButton.addEventListener("click", () => {

    if(counter >= 0 && counter < 3) {
        counter += 1;
    } else {
        counter = 0
    }

    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => {
            let name = data[nameIDs[counter]].name;
            catTitle.innerText = name;
        })

    fetch(`${photosArrURLs[counter]}`)
        .then((data) => data.json())
        .then((data) => main2.style.backgroundImage = `url(${data[photosArrIDs[counter]].url})`)
})



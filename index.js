const main2 = document.getElementById("main-container-2");

const myBengSelector = document.getElementById("bengalSelector");
const myAbysSelector = document.getElementById("abysinianSelector");
const myRagdSelector = document.getElementById("ragdollSelector");
const myMainSelector = document.getElementById("mainSelector");

const myLeftButton = document.getElementById("btn-left");
const myRightButton = document.getElementById("btn-right");

const catTitle = document.getElementById("cat-name");
const catTitle2 = document.getElementById("cat-name-2");

const myBurgerIcon = document.getElementById("burger-icon");
const myNavi = document.getElementById("navi-list");

const myRandomImages = document.getElementsByClassName("boxes")
const myRandomCatNames = document.getElementsByClassName("box-text");

const catDescription = document.getElementById("description");
const getDescriptionButton = document.getElementById("description-button");

const showBeng = document.getElementById("info-beng");
const showAbys = document.getElementById("info-abys");
const showRagd = document.getElementById("info-ragd");
const showMaine = document.getElementById("info-maine");

function randomNumber(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return parseInt(randomNum)
}

function getRandomImage(id) {

    let num = randomNumber(1, 100);

    fetch("https://api.thecatapi.com/v1/images/search?limit=100&api_key=live_y7qVxgAFuFGytLjRZccpbI5CGmv3LGoOm47AcaBmRs7EPYVzFEGrgYmFg2KppZTd")
        .then((data) => data.json())
        .then((data) => {
            myRandomImages[id].style.backgroundImage = `url(${data[num].url})`
            myRandomImages[id].style.backgroundSize = "cover"
            console.log(myRandomImages[id].style)
            myRandomCatNames[id].innerText = `${data[num].id}`
        })
}

getRandomImage(0);
getRandomImage(1);
getRandomImage(2);
getRandomImage(3);
getRandomImage(4);
getRandomImage(5);

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

const getName2 = (i, data) => {
    let name = data[i].name;
    catTitle2.innerText = name;
}

const getDescription = (i, data) => {
    let description = data[i].description;
    catDescription.innerText = description;
}

myBengSelector.addEventListener("click", function getBengalImage() {

    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => {
            getName(10, data);
            getName2(10, data);
            getDescription(10, data)
        })

    fetch("https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=beng&api_key=live_y7qVxgAFuFGytLjRZccpbI5CGmv3LGoOm47AcaBmRs7EPYVzFEGrgYmFg2KppZTd")
        .then((data) => data.json())
        .then((data) => main2.style.backgroundImage = `url(${data[17].url})`)
});


myAbysSelector.addEventListener("click", function getAbyssinianImage() {

    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => {
            getName(0, data);
            getName2(0, data);
            getDescription(0, data)
        })

    fetch("https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=abys&api_key=live_y7qVxgAFuFGytLjRZccpbI5CGmv3LGoOm47AcaBmRs7EPYVzFEGrgYmFg2KppZTd")
        .then((data) => data.json())
        .then((data) => main2.style.backgroundImage = `url(${data[12].url})`)
})

myRagdSelector.addEventListener("click", function getRagdImage() {

    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => {
            getName(51, data);
            getName2(51, data);
            getDescription(51, data)
        })

    fetch("https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=ragd&api_key=live_y7qVxgAFuFGytLjRZccpbI5CGmv3LGoOm47AcaBmRs7EPYVzFEGrgYmFg2KppZTd")
        .then((data) => data.json())
        .then((data) => main2.style.backgroundImage = `url(${data[27].url})`)
})

myMainSelector.addEventListener("click", function getMainImage() {

    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => {
            getName(40, data);
            getName2(40, data);
            getDescription(40, data)
        })

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

const getNameArrow = (counter, data) => {
    let name = data[nameIDs[counter]].name;
    catTitle.innerText = name;
}

const getNameArrow2 = (counter, data) => {
    let name = data[nameIDs[counter]].name;
    catTitle2.innerText = name;
}

const getDescriptionArrow = (counter, data) => {
    let description = data[nameIDs[counter]].description;
    catDescription.innerText = description;
}

myLeftButton.addEventListener("click", () => {

    if(counter > 0 && counter <= 3) {
        counter -= 1;
    } else {
        counter = 3;
    } 

    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => {
            getNameArrow(counter, data);
            getNameArrow2(counter, data);
            getDescriptionArrow(counter, data);
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
            getNameArrow(counter, data);
            getNameArrow2(counter, data);
            getDescriptionArrow(counter, data);
        })

    fetch(`${photosArrURLs[counter]}`)
        .then((data) => data.json())
        .then((data) => main2.style.backgroundImage = `url(${data[photosArrIDs[counter]].url})`)
})

// Cat Info //

showBeng.addEventListener("click", function showInfo() {
    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => {
            getName2(10, data);
            getDescription(10, data)
        })
})

showAbys.addEventListener("click", function showInfo() {
    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => {
            getName2(0, data);
            getDescription(0, data)
        })
    console.log(showAbys);
})

showRagd.addEventListener("click", function showInfo() {
    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => {
            getName2(51, data);
            getDescription(51, data)
        })
})

showMaine.addEventListener("click", function showInfo() {
    fetch("https://api.thecatapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) => {
            getName2(40, data);
            getDescription(40, data)
        })
})



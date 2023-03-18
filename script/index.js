// import { randomNumber } from "./reusable";

// Variables //

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

const myRandomImages = document.getElementsByClassName("boxes");
const myRandomCatNames = document.getElementsByClassName("box-text");
const randomImagesURLs = document.getElementsByClassName("image-src");

const catDescription = document.getElementById("description");
const getDescriptionButton = document.getElementById("description-button");

const showBeng = document.getElementById("info-beng");
const showAbys = document.getElementById("info-abys");
const showRagd = document.getElementById("info-ragd");
const showMaine = document.getElementById("info-maine");

/// URLs //

const catURL = "https://api.thecatapi.com/v1/breeds";
const catImagesURL = "https://api.thecatapi.com/v1/images/search?limit=100";
const catAPI_Key = "api_key=live_y7qVxgAFuFGytLjRZccpbI5CGmv3LGoOm47AcaBmRs7EPYVzFEGrgYmFg2KppZTd";

/// Reusable Function ///

function randomNumber(min, max) {
        let randomNum = Math.random() * (max - min) + min;
        return parseInt(randomNum)
}

const imageDelay = () => {
    main2.style.opacity = 0;
    setTimeout(function() {
        main2.style.opacity = 0.2;
    }, 50)
    setTimeout(function() {
        main2.style.opacity = 0.4;
    }, 100);
    setTimeout(function() {
        main2.style.opacity = 0.6;
    }, 150);
    setTimeout(function() {
        main2.style.opacity = 0.8;
    }, 200)
    setTimeout(function() {
        main2.style.opacity = 1;
    }, 250);
}

/// Dropdown Menu //

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

/// Circle Selectors //

const getInfo = (i, data) => {
    let name = data[i].name;
    catTitle.innerText = name;
    catTitle2.innerText = name;

    let description = data[i].description;
    catDescription.innerText = description;
}

myBengSelector.addEventListener("click", function getBengalImage() {

    fetch(catURL)
        .then((data) => data.json())
        .then((data) => {
            getInfo(10, data);
        })

    fetch(`${catImagesURL}&breed_ids=beng&${catAPI_Key}`)
        .then((data) => data.json())
        .then((data) => {
            main2.style.backgroundImage = `url(${data[17].url})`;
            imageDelay();
        })
});

myAbysSelector.addEventListener("click", function getAbyssinianImage() {

    fetch(catURL)
        .then((data) => data.json())
        .then((data) => {
            getInfo(0, data);
        })

    fetch(`${catImagesURL}&breed_ids=abys&${catAPI_Key}`)
        .then((data) => data.json())
        .then((data) => {
            main2.style.backgroundImage = `url(${data[12].url})`;
            imageDelay();
        })
})

myRagdSelector.addEventListener("click", function getRagdImage() {

    fetch(catURL)
        .then((data) => data.json())
        .then((data) => {
            getInfo(51, data);
        })

    fetch(`${catImagesURL}&breed_ids=ragd&${catAPI_Key}`)
        .then((data) => data.json())
        .then((data) => {
            main2.style.backgroundImage = `url(${data[27].url})`;
            imageDelay();
        })
})

myMainSelector.addEventListener("click", function getMainImage() {

    fetch(catURL)
        .then((data) => data.json())
        .then((data) => {
            getInfo(40, data);
        })

    fetch(`${catImagesURL}&breed_ids=mcoo&${catAPI_Key}`)
        .then((data) => data.json())
        .then((data) => {
            main2.style.backgroundImage = `url(${data[4].url})`;
            imageDelay();
        })
})

// Arrow Buttons //

const photosArrIDs = [17, 12, 27, 4];
const photosArrURLs = [`${catImagesURL}&breed_ids=beng&${catAPI_Key}`, 
`${catImagesURL}&breed_ids=abys&${catAPI_Key}`, 
`${catImagesURL}&breed_ids=ragd&${catAPI_Key}`, 
`${catImagesURL}&breed_ids=mcoo&${catAPI_Key}`];
const nameIDs = [10, 0, 51, 40];

let counter = 0;

const getInfoArrow = (counter, data) => {
    let name = data[nameIDs[counter]].name;
    catTitle.innerText = name;
    catTitle2.innerText = name;

    let description = data[nameIDs[counter]].description;
    catDescription.innerText = description;
}

const fetchButtons = () => {
    fetch(catURL)
    .then((data) => data.json())
    .then((data) => {
        getInfoArrow(counter, data);
    })

    fetch(`${photosArrURLs[counter]}`)
        .then((data) => data.json())
        .then((data) => {
            imageDelay();
            main2.style.backgroundImage = `url(${data[photosArrIDs[counter]].url})`
        })
}

myLeftButton.addEventListener("click", () => {

    if(counter > 0 && counter <= 3) {
        counter -= 1;
    } else {
        counter = 3;
    } 

    fetchButtons();
})

myRightButton.addEventListener("click", () => {

    if(counter >= 0 && counter < 3) {
        counter += 1;
    } else {
        counter = 0
    }

    fetchButtons();
})

// Random Images //

function getRandomImage(id) {

    let num = randomNumber(1, 100);

    fetch(`${catImagesURL}&${catAPI_Key}`)
        .then((data) => data.json())
        .then((data) => {
            myRandomImages[id].style.backgroundImage = `url(${data[num].url})`
            myRandomImages[id].style.backgroundSize = "cover"
            myRandomCatNames[id].innerText = `${data[num].id}`
            randomImagesURLs[id].href = `${data[num].url}`
        })
}

let i = 0;
for(i = 0; i < 6; i++) {
    getRandomImage(i);
}

// Cat Info //

const getInfo2 = (i, data) => {
    let name = data[i].name;
    catTitle2.innerText = name;

    let description = data[i].description;
    catDescription.innerText = description;
}

showBeng.addEventListener("click", function showInfo() {
    fetch(catURL)
        .then((data) => data.json())
        .then((data) => {
            getInfo2(10, data);
        })
})

showAbys.addEventListener("click", function showInfo() {
    fetch(catURL)
        .then((data) => data.json())
        .then((data) => {
            getInfo2(0, data);
        })
    console.log(showAbys);
})

showRagd.addEventListener("click", function showInfo() {
    fetch(catURL)
        .then((data) => data.json())
        .then((data) => {
            getInfo2(51, data);
        })
})

showMaine.addEventListener("click", function showInfo() {
    fetch(catURL)
        .then((data) => data.json())
        .then((data) => {
            getInfo2(40, data);
        })
})

const catCorp = document.getElementById("cat-corp");
const catSons = document.getElementById("cat-sons");
const catSolutions = document.getElementById("cat-solutions");
const catFoods = document.getElementById("cat-foods");

const catCorpBtn = document.getElementById("cat-corp-btn");
const catSonsBtn = document.getElementById("cat-sons-btn");
const catSolutionsBtn = document.getElementById("cat-solutions-btn");
const catFoodsBtn = document.getElementById("cat-foods-btn");

const partnersBtnLeft = document.querySelector("#btn-left2");
const partnersBtnRight = document.querySelector("#btn-right2");

const transition1 = () => {
    catCorp.style.left = 0;
    catSons.style.left = '320px';
    catSolutions.style.left = '640px';
    catFoods.style.left = '1000px';
}

const transition2 = () => {
    catSons.style.left = 0;
    catSolutions.style.left = '320px';
    catFoods.style.left = '660px';
    catCorp.style.left = '960px';
}

const transition3 = () => {
    catSolutions.style.left = 0;
    catFoods.style.left = '350px';
    catCorp.style.left = '640px';
    catSons.style.left = '960px';
}

const transition4 = () => {
    catFoods.style.left = 0;
    catCorp.style.left = '320px';
    catSons.style.left = '640px';
    catSolutions.style.left = '960px';
}

catCorpBtn.addEventListener("click", transition1);

catSonsBtn.addEventListener("click", transition2);

catSolutionsBtn.addEventListener("click", transition3);

catFoodsBtn.addEventListener("click", transition4);

partnersBtnLeft.addEventListener("click", function transtionLeft() {
    let catCorpStyles = getComputedStyle(catCorp, null);
    if(catCorpStyles.left == '0px') {
        transition2();
    } else if(catCorpStyles.left == '960px') {
        transition3();
    } else if(catCorpStyles.left == '640px') {
        transition4();
    } else if(catCorpStyles.left == '320px') {
        transition1();
    }
})

partnersBtnRight.addEventListener("click", function transtionRight() {
    let catCorpStyles = getComputedStyle(catCorp, null);
    if(catCorpStyles.left == '0px') {
        transition4();
    } else if(catCorpStyles.left == '960px') {
        transition1();
    } else if(catCorpStyles.left == '640px') {
        transition2();
    } else if(catCorpStyles.left == '320px') {
        transition3();
    }
})
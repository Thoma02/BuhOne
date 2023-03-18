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

let counter = 0;

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
    counter = 0;
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
    counter = 1;
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
    counter = 2;
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
    counter = 3;
})

// Arrow Buttons //

const photosArrIDs = [17, 12, 27, 4];
const photosArrURLs = [`${catImagesURL}&breed_ids=beng&${catAPI_Key}`, 
`${catImagesURL}&breed_ids=abys&${catAPI_Key}`, 
`${catImagesURL}&breed_ids=ragd&${catAPI_Key}`, 
`${catImagesURL}&breed_ids=mcoo&${catAPI_Key}`];
const nameIDs = [10, 0, 51, 40];

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

const catTitle3 = document.getElementById("cat-name-3");
const catPost = document.getElementsByClassName("post");
const bengalPost = document.getElementById("post-bengal");

// const bengDescription = "A Bengal cat is a domestic cat breed that has a wild appearance with leopard-like spots or rosettes on its coat. <b>1,2,3,4</b> It is bred from the Asian leopard cat and other domestic cats, such as the Egyptian Mau, the Abyssinian, or the American shorthair. <b>1,3,4</b> It is a long, muscular, medium- to large-sized cat with a broad head, high cheekbones, round and wide eyes, and small and rounded ears. <b>1,5</b> It is a charismatic, playful, and smart cat that may be hypoallergenic. <b>1,2</b>";
// const abysDescription = "The breed's distinctive appearance, seeming long, lean and finely colored compared to other cats, has been analogized to that of human fashion models. Personality-wise, the cats traditionally display active, curious attitudes in which they frequently follow owners around and encourage play. Their dog-like characteristics also involve a particular sense of affection and desire for interaction.";
// const ragdDescription = "A ragdoll cat is a large and heavy breed of cat with a colorpoint coat and blue eyes. It has a semi-long and silky soft coat that may have white patterns. It is a slow-maturing breed that reaches full coat and color at about three years of age. It is an affectionate and intelligent cat that goes limp with pleasure when petted, hence its name. It has a long body, tail, and bones, and gives an impression of graceful movement and subdued power.";
// const mainDescription = "The Maine Coon cat is a large, long-haired, and muscular breed that originated in North America, especially in Maine. It is one of the oldest natural breeds in the continent and the official state cat of Maine. It has a shaggy coat, tufted ears and paws, and a ringed tail that help it adapt to harsh climates and hunt rodents.";

const bengDescriptionBtn = document.getElementById("bengal-description");
const abysDescriptionBtn = document.getElementById("abyssinian-description");
const ragdDescriptionBtn = document.getElementById("ragdoll-description");
const mainDescriptionBtn = document.getElementById("maine-coon-description");

const descriptionBtnLeft = document.getElementById("btn-left3");
const descriptionBtnRight = document.getElementById("btn-right3");

const getTitle = (i, data) => {
    let name = data[i].name;
    catTitle3.innerText = name;
}

let counterPosts = 0;

const appear1 = () => {
    catPost[0].style.zIndex = 1; 
    catPost[1].style.zIndex = 0; 
    catPost[2].style.zIndex = 0; 
    catPost[3].style.zIndex = 0; 
}

const appear2 = () => {
    catPost[0].style.zIndex = 0; 
    catPost[1].style.zIndex = 1; 
    catPost[2].style.zIndex = 0; 
    catPost[3].style.zIndex = 0; 
}

const appear3 = () => {
    catPost[0].style.zIndex = 0; 
    catPost[1].style.zIndex = 0; 
    catPost[2].style.zIndex = 1; 
    catPost[3].style.zIndex = 0; 
}

const appear4 = () => {
    catPost[0].style.zIndex = 0; 
    catPost[1].style.zIndex = 0; 
    catPost[2].style.zIndex = 0; 
    catPost[3].style.zIndex = 1; 
}

bengDescriptionBtn.addEventListener("click", function changeDescription() {
    fetch(catURL)
        .then((data) => data.json())
        .then((data) => {
            getTitle(10, data);
        }) 
    appear1(); 
    counterPosts = 0;
})

abysDescriptionBtn.addEventListener("click", function changeDescription() {
    fetch(catURL)
        .then((data) => data.json())
        .then((data) => {
            getTitle(0, data);
        }) 
    appear2(); 
    counterPosts = 1;
})

ragdDescriptionBtn.addEventListener("click", function changeDescription() {
    fetch(catURL)
        .then((data) => data.json())
        .then((data) => {
            getTitle(51, data);
        })  
        appear3(); 
        counterPosts = 2;
})

mainDescriptionBtn.addEventListener("click", function changeDescription() {
    fetch(catURL)
        .then((data) => data.json())
        .then((data) => {
            getTitle(40, data);
        })  
    appear4(); 
    counterPosts = 3;
})

// const leftIndex = () => {

// }

descriptionBtnLeft.addEventListener("click", function changeDescriptionLeft() {

    if(counterPosts == 0) {
        appear4()
    } else if(counterPosts == 1) {
        appear1()
    } else if(counterPosts == 2) {
        appear2()
    } else if(counterPosts == 3) {
        appear3()
    }

    if(counterPosts > 0 && counterPosts <= 3) {
        counterPosts -= 1;
    } else {
        counterPosts = 3;
    } 
    console.log(counterPosts);
})

descriptionBtnRight.addEventListener("click", function changeDescriptionLeft() {

    if(counterPosts == 0) {
        appear2()
    } else if(counterPosts == 1) {
        appear3()
    } else if(counterPosts == 2) {
        appear4()
    } else if(counterPosts == 3) {
        appear1()
    }

    if(counterPosts >= 0 && counterPosts < 3) {
        counterPosts += 1;
    } else {
        counterPosts = 0
    }
    console.log(counterPosts);
})





function randomNumber(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return parseInt(randomNum)
}

module.exports = { randomNumber };
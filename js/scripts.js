const render = () => {
    const myAgeBox = document.querySelector("#my-age")
    const today = new Date()
    const myBirthDay = new Date('1989-10-16')
    const myAgeInMilliseconds = today - myBirthDay
    const aYearInMilliseconds = 1000 * 60 * 60 * 24 * 365.25
    const myAge = Math.floor(myAgeInMilliseconds / aYearInMilliseconds)
    myAgeBox.innerHTML = myAge
    console.log(myAge)
}

window.addEventListener('load', render())
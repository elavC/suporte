const dateOne = document.getElementById('dateOne');
const dateTwo = document.getElementById('dateTwo');
const dateThree = document.getElementById('dateThree');
const dateFour = document.getElementById('dateFour');

const radioOne = document.getElementById('radioOne') ;
const radioTwo = document.getElementById('radioTwo') ;
const radioThree = document.getElementById('radioThree') ;
const radioFour = document.getElementById('radioFour') ;

const radioOneValue = radioOne.value = dateOne.innerText
const radioTwoValue = radioTwo.value = dateTwo.innerText
const radioThreeValue = radioThree.value = dateThree.innerText
const radioFourValue = radioFour.value = dateFour.innerText

const radioOneHour = document.getElementById('radioOneHour');
const radioTwoHour = document.getElementById('radioTwoHour');
const radiothreeHour = document.getElementById('radiothreeHour');

const hourOne = document.getElementById('hourOne');
const hourTwo = document.getElementById('hourTwo');
const hourThree = document.getElementById('hourThree');

const radioOneHourValue = radioOneHour.value = hourOne.innerText
const radioTwoHourValue = radioTwoHour.value = hourTwo.innerText
const radioThreeHourValue = radiothreeHour.value = hourThree.innerText



function selectedDateOne() {
    radioOne.checked = true

    dateOne.style.border = "2px solid #00aac0"
    dateTwo.style.border = "2px solid black"
    dateThree.style.border = "2px solid black"
    dateFour.style.border = "2px solid black"
}

function selectedDateTwo() {
    radioTwo.checked = true

    dateOne.style.border = "2px solid black"
    dateTwo.style.border = "2px solid #00aac0"
    dateThree.style.border = "2px solid black"
    dateFour.style.border = "2px solid black"
}

function selectedDateThree() {
    radioThree.checked = true

    dateOne.style.border = "2px solid black"
    dateTwo.style.border = "2px solid black"
    dateThree.style.border = "2px solid #00aac0"
    dateFour.style.border = "2px solid black"
}

function selectedDateFour() {
    radioFour.checked = true

    dateOne.style.border = "2px solid black"
    dateTwo.style.border = "2px solid black"
    dateThree.style.border = "2px solid black"
    dateFour.style.border = "2px solid #00aac0"
}

dateOne.addEventListener('click', selectedDateOne )
dateTwo.addEventListener('click', selectedDateTwo )
dateThree.addEventListener('click', selectedDateThree )
dateFour.addEventListener('click', selectedDateFour )


function selectedHourOne() {
    radioOneHour.checked = true

    hourOne.style.border = "2px solid #00aac0"
    hourTwo.style.border = "2px solid black"
    hourThree.style.border = "2px solid black"
}

function selectedHourTwo() {
    radioTwoHour.checked = true

    hourOne.style.border = "2px solid black"
    hourTwo.style.border = "2px solid #00aac0"
    hourThree.style.border = "2px solid black"
}

function selectedHourThree() {
    radiothreeHour.checked = true

    hourOne.style.border = "2px solid black"
    hourTwo.style.border = "2px solid black"
    hourThree.style.border = "2px solid #00aac0"
}

hourOne.addEventListener('click', selectedHourOne)
hourTwo.addEventListener('click', selectedHourTwo)
hourThree.addEventListener('click', selectedHourThree)
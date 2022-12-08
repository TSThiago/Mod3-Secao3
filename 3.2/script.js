const submit = document.querySelector("button")
let brand = document.getElementById('brand')
let model = document.getElementById('model')
let value = document.getElementById('value')
let color = document.getElementById('color')
let automatic = document.getElementById('automatic')
let arrayCars = []


createCars()
recoverValues()

function createCars(e){
    submit.addEventListener('click', (e) => {
        let car = {
            brand: brand.value ,
            model: model.value ,
            value: value.value ,
            color: color.value ,
            automatic: automatic.value
        }
        if(localStorage.length != 0){
            let newCar = car
            let localArray = window.localStorage.getItem("Cars")
            arrayCars = JSON.parse(localArray)
            arrayCars.push(newCar)
            window.localStorage.setItem('Cars', JSON.stringify(arrayCars))
        }else{
            let newCar = car
            arrayCars.push(newCar)
            window.localStorage.setItem('Cars', JSON.stringify(arrayCars))
        }
        brand.value = ''
        model.value = ''
        value.value = ''
        color.value = ''
        automatic.value = ''
    })
}

function recoverValues(e){
    let jsonCar = window.localStorage.getItem("Cars")
    let car = JSON.parse(jsonCar)
    console.log(car)
}


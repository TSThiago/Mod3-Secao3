const submit = document.querySelector("button")
let brand = document.getElementById('brand')
let model = document.getElementById('model')
let value = document.getElementById('value')
let color = document.getElementById('color')
let automatic = document.getElementById('automatic')
let arrayCars = []

createCars()
recoverValues()
console.log(searchByBrand(arrayCars, 'fiat'))
console.log(searchBrands(arrayCars))

function createCars(e) {
    submit.addEventListener('click', (e) => {
        let car = {
            brand: brand.value,
            model: model.value,
            value: value.value,
            color: color.value,
            automatic: automatic.value
        }
        if (localStorage.length != 0) {
            let newCar = car
            arrayCars = JSON.parse(window.localStorage.getItem("Cars"))
            arrayCars.push(newCar)
            window.localStorage.setItem('Cars', JSON.stringify(arrayCars))
        } else {
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

function recoverValues(e) {
    let jsonCar = window.localStorage.getItem("Cars")
    let car = JSON.parse(jsonCar)
    console.log(car)
}

function searchByBrand(array, brand) {
    array = JSON.parse(window.localStorage.getItem("Cars"))
    let brandCars = array.filter(x => x.brand === brand)
    return brandCars
}

function searchBrands(array) {
    let brands = []
    array = JSON.parse(window.localStorage.getItem("Cars"))
    brands[0] = array[0].brand
    array.forEach(x => {
        let counter = 0
        brands.forEach(y => {
            if (y === x.brand) {
                counter++
            }
        });
        if(counter === 0){
            brands.push(x.brand)
        }
    })
    return brands
}

const flowers = [
    {
        id: 1,
        color: "white",
        species: "Rose",
        price: 0.90

    },
    {
        id: 2,
        color: "Red",
        species: "Tulip",
        price: 0.85
    },

]


function addFlower(sunflower) {

    const addFlowerToInventory = (flowerObject) => {
        const lastIndex = flowers.length -1
        const currentLastFlower = flowers[lastIndex]
        const maxId = currentLastFlower.id
        const idForNewFlower = maxId + 1
        flowerObject.id = idForNewFlower
        flowers.push(flowerObject)
    }
    
    const flowerThree = {
        id: 3,
        color: "yellow",
        species: "sunflower",
        price: 1.50
    }

    addFlowerToInventory(flowerThree)
    for (const flower of flowers) {
        console.log(`The ${flower.color} ${flower.species} costs ${flower.price}.`)
    }
    console.log(flowers)

    const flowerToFind = 2
    for (const flower of flowers) {
        if (flower.id === flowerToFind) {
            flower.price = flower.price + 1.50
            console.log(`The ${flower.id} ${flower.color} ${flower.species} costs ${flower.price}.`)
        }
    }
    
}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code

    for (const flower of flowers){
        if (flower.price >= 1.00) {flower.price = flower.price + 1.00}

    }

    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */
     return expensiveFlowers  // Do not change this code
}
 
 



// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}


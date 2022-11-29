const database = require('./db.json')
let newID = 4

module.exports = {
    getHouses: (req,res) => {
        res.status(200).send(database)
    },
    deleteHouse: (req,res) => {
        let { id } = req.params
        let index = database.findIndex(house => house.id === +id)
        database.splice(index, 1)
        res.status(200).send(database)
    },
    createHouse: (req,res) => {
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: newID,
            address,
            price,
            imageURL
        }

        database.push(newHouse)
        res.status(200).send(database)
        newID++
    },
    updateHouse: (req,res) => {
        let { id } = req.params
        let { type } = req.body

        currentHouse = database[database.findIndex(house => house.id === +id)]

        if (type === 'minus' && currentHouse.price > 0){
            currentHouse.price = currentHouse.price - 10000
        } else if (type === 'plus'){
            currentHouse.price = currentHouse.price + 10000
        }
        res.status(200).send(database)
    }
}
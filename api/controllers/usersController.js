module.exports = () => {
    const usersData = require("../data/usersData.json")
    const controller = {}
    const dayjs = require('dayjs')

    // List all users
    controller.listUsers = (req, res) => res.status(200).json(usersData)

    // Get a user by ID
    controller.getUser = (req, res) => {
        const {userID} = req.params
        const foundUser = usersData.results.filter(user => user.id === userID)
        if(foundUser === []) res.status(404).json(foundUser)
        else res.status(200).json(foundUser)
    }

    // Add a user
    controller.addUser = (req, res) => {
        const getNewId = dayjs().format("DDHHMMdSSSmmYYss")
        usersData.results.push({
            id: getNewId,
            name: req.body.name.trim(),
            email: req.body.email.trim(),
            password: req.body.password,
        })

        res.status(200).json(usersData)
    }

    // Update a user
    controller.updateUser = (req, res) => {
        const {userID} = req.params
        const foundUserIndex = usersData.results.findIndex(user => user.id === userID)

        const updatedUser = {
            id: userID,
            name: req.body.name.trim(),
            email: req.body.email.trim(),
            password: req.body.password,
        }

        if (foundUserIndex !== -1){
            usersData.results.splice(foundUserIndex, 1, updatedUser)
            res.status(200).json(usersData)
        }
        else res.status(404).json({message: "User not found."})
    }

    // Delete all users
    controller.deleteUsers = (req, res) => {
        usersData.results = []
        res.status(200).json(usersData)
    }

    // Delete a user by ID
    controller.deleteUser = (req, res) => {
        const {userID} = req.params
        const foundUserIndex = usersData.results.findIndex(user => user.id === userID)

        if (foundUserIndex !== -1){
            usersData.results.splice(foundUserIndex, 1)
            res.status(200).json(usersData)
        }
        else res.status(404).json({message: "User not found."})
    }

    return controller
}
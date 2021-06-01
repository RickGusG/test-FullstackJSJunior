module.exports = () => {
    const usersData = require("../data/usersData.json")
    const controller = {}
    const dayjs = require('dayjs')

    controller.listUsers = (req, res) => res.status(200).json(usersData)

    controller.getUser = (req, res) => {
        const {userID} = req.params
        const foundUser = usersData.users.find(user => user.id === userID)

        res.status(200).json(foundUser)
    }

    controller.addUser = (req, res) => {
        const getNewId = dayjs().format("DDHHMMmmYYss")
        usersData.users.push({
            id: getNewId,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        res.status(200).json(usersData)
    }

    controller.updateUser = (req, res) => {
        const {userID} = req.params
        const foundUserIndex = usersData.users.findIndex(user => user.id === userID)

        const updatedUser = {
            id: userID,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }

        if (foundUserIndex !== -1){
            usersData.users.splice(foundUserIndex, 1, updatedUser)
            res.status(200).json(usersData)
        }
        else res.status(404).json({message: "User not found."})
    }

    controller.deleteUsers = (req, res) => {
        usersData.users = []
        res.status(200).json(usersData)
    }

    controller.deleteUser = (req, res) => {
        const {userID} = req.params
        const foundUserIndex = usersData.users.findIndex(user => user.id === userID)

        if (foundUserIndex !== -1){
            usersData.users.splice(foundUserIndex, 1)
            res.status(200).json(usersData)
        }
        else res.status(404).json({message: "User not found."})
    }

    return controller
}
const User = require('../models/user-model')

createUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'User not have body!',
        })
    }

    await User.findOne({ _id: req.params.id }, (err, user) => { 
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            const user = new User(body)

            if (!user) {
                return res.status(400).json({
                    success: false,
                    error: err,
                })
            }

            user.save().then(() => {
                return res.status(201).json({
                    success: true,
                    id: user._id,
                    message: 'New user created!',
                })
            }).catch(error => {
                return res.status(400).json({
                    error,
                    message: 'User not created!',
                })
            })
        } else { 
            return res.status(200).json({ success: true, data: user })

        }
    }).catch(err => console.log(err))
}

updateUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'User not have body!',
        })
    }

    User.findOne({ id: req.params.id }, (err, user) => {
        if (err) { 
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }
        user.shared = body.shared
        user.email = body.email

        user.save().then(() => {
            return res.status(200).json({
                success: true,
                id: user._id,
                message: 'User updated!',
            })
        }).catch(error => {
            return res.status(404).json({
                error,
                message: 'User not updated!',
            })
        })
    })
}

deleteUser = async (req, res) => { 
    await User.findOneAndDelete({ id: req.params.id }, (err, user) => { 
        if (err) { 
            return res.status(400).json({
                success: false,
                error: err,
            })
        }

        if (!user) {
            return res.status(404).json({success: false, error: 'User not found!'})
        }

        return res.status(200).json({success: true, data: user})
    }).catch(err => console.log(err))
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
}
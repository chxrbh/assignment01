// http://localhost:8000/users/
const express = require('express')
const router = express.Router()
const User = require('../models/user')

// getting all
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// getting one by search
router.get('/search/:name', async (req, res) => {
  let user
  try {
    user = await User.find({ name: req.params.name })
    if (user == null) {
      return res.status(404).json({ message: 'cannot find user' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.send(user)
})

// getting one by id
router.get('/:id', getUser, (req, res) => {
  res.send(res.user)
})

// creating one
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age
  })
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// update one
router.patch('/:id', getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name
  }
  if (req.body.age != null) {
    res.user.age = req.body.age
  }
  if (req.body.status != null) {
    res.user.status = req.body.status
  }
  try {
    const updatedUser = await res.user.save()
    res.json(updatedUser)
  }  catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// delete one
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.deleteOne()
    res.json({ message: 'deleted successful' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }

})


async function getUser(req, res, next) {
  let user
  try {
    user = await User.findById(req.params.id)
    if (user == null) {
      return res.status(404).json({ message: 'cannot find user' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.user = user
  next()
}

// async function getUserByName(req, res, next) {
//   let user
//   try {
//     user = await User.find({ name: req.params.name })
//     if (user == null) {
//       return res.status(404).json({ message: 'cannot find user' })
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message })
//   }

//   res.user = user
//   next()
// }

module.exports = router
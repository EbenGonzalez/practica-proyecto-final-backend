const router = require('express').Router()

const {
  getAllUsers,
  getOneUser,
  getOwnProfile,
  getOneUserwithInfo,
  createUser,
  updateUser,
  deleteUser,
  updateOwnProfile,
  deleteOwnProfile,
} = require('../controllers/user.controllers')

router.get('/', getAllUsers)
router.get('/me', getOwnProfile)
router.get('/:id', getOneUser)
router.get('/:id/user/lazy', getOneUserwithInfo)
router.post('/', createUser)
router.put('/me', updateOwnProfile)
router.put('/:id', updateUser)
router.delete('/me', deleteOwnProfile)
router.delete('/:id', deleteUser)


module.exports = router
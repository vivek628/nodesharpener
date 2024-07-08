
const express = require('express');
const router = express.Router();
const userController = require('../controller/detail');

// Display input form when accessing '/'
router.get('/', userController.inputForm);

// Handle form submission and add expense when accessing '/detail' with POST method
router.post('/detail', userController.showExpense);

// Display expense details when accessing '/detail' with GET method
router.get('/display', userController.display);
router.post('/display',userController.display)

// Handle expense deletion when accessing '/delete' with POST method
router.post('/delete', userController.delete);
router.post('/edit',userController.edit)

module.exports = router;

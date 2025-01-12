const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Employee = require('../models/Employee');

// Create a new employee
router.post('/employees', [
  check('email').isEmail(),
  check('first_name').notEmpty(),
  // Other validations...
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// More routes for Read, Update, Delete...

module.exports = router;

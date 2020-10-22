const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/', async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
})

router.post('/', async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({
        status:'Employee saved'
    })
})

/*router.put('/:id', async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: 'Employee Updated'
    })
})*/

router.delete('/:id', async (req, res) => {
    await Employee.findByIdAndRemove (req.params.id)
    res.json({
        status: 'Employee deleted'
    })
})

module.exports = router;
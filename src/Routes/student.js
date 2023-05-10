const express = require('express');

const router = express.Router();

//HTTP methods
/**
 * CRUD operations (Create, Read, Update, Delete)
 * POST, GET, PATCH, DELETE
 */
//GET the student details
router.get('/', (req,res)=>{
    res.json({"mssg":"get all student"})
})

//GET a single student
router.get('/:id', (req,res)=>{
    res.json({"mssg":"get a single student"})
})


//POST
router.post('/', (req,res)=>{
    res.json({"mssg":"create a student profile"})

})

//DELETE a single student
router.delete('/:id', (req,res)=>{
    res.json({"mssg":"DELETE a single student"})
})

//UPDATE a single student profile
router.patch('/:id', (req,res)=>{
    res.json({"mssg":"Hey"})
})
module.exports=router
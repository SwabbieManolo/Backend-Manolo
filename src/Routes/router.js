const express = require("express")
const StudentSchema = require("../Model/StudentSchema")
const router = express.Router()

//post router
router.post("/registerStudent", async (req, res)=>{
    const data = req.body
    try{
        const student = new StudentSchema(data)
        await student.save
        return res.send(student).status(201)
    } catch (error) {
        res.send(error).status(400)
    }
})

module.exports = router
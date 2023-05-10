const mongoose = require("mongoose");
const schema = mongoose.Schema;

const StudentSchema = new schema({
    studentName:{
        type:"string",
        require:true
    },
    lastName:{
        type:"string",
        require:true
    }

})
const cqStudents = mongoose.model("students", StudentSchema)
module.exports = cqStudents
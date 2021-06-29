import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
    name : String,
    department : String,
    designation : String,
    dateOfJoining : {type : Date, default : Date.now},
});

const Employee = mongoose.model("employees", employeeSchema);

export default Employee;


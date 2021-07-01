import employeeData from "./model.js";

export const getEmployee = async (req, res) => {
  try {
    const allEmployees = await employeeData.find();
    res.status(200).json(allEmployees);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

export const createEmployee = async (req, res) => {
  console.log(req.body);
  try {
    const singleEmployee = await employeeData.create(req.body);
    res.status(201).json(singleEmployee);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) =>{
  console.log(req.params)
    try {
        const deleteSingleEmployee = await employeeData.deleteOne({_id: req.params.idNo});
        res.send("deleted successfully")
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
}

import express from "express";
import {getEmployee, createEmployee, deleteEmployee} from "./controllers.js";

const router = express.Router();

router.get("/", getEmployee);
router.post("/", createEmployee);
router.delete("/:idNo", deleteEmployee);


export default router;
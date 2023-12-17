import { Router } from "express";
import TaskController from "../controller/task.js";

const TaskRouter = Router();

TaskRouter.get("/getTasks", TaskController.getAll);
TaskRouter.post("/createTasks", TaskController.create);
TaskRouter.put("/updateTasks/:id", TaskController.update);
TaskRouter.delete("/deleteTasks/:id", TaskController.remove);

export default TaskRouter;

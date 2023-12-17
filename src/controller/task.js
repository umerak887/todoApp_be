import { where } from "sequelize";
import TaskModel from "../model/tasks.js";

const TaskController = {
  getAll: async (req, res) => {
    try {
      const tasks = await TaskModel.findAll({ order: ["id"] });
      return res.status(200).json(tasks);
    } catch (error) {}
  },
  create: async (req, res) => {
    try {
      const { content, status } = req.body;
      await TaskModel.create({ content, status });

      const tasks = await TaskModel.findAll({ order: ["id"] });
      console.log(tasks);
      return res.status(201).json(tasks);
    } catch (error) {}
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const { content, status } = req.body;

      // Update the task with the specified ID
      await TaskModel.update({ content, status }, { where: { id: id } });

      // Fetch all tasks after the update

      const tasks = await TaskModel.findAll({ order: ["id"] });
      return res.status(202).json(tasks);
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },

  remove: async (req, res) => {
    try {
      const id = req.params.id;
      const task = await TaskModel.findOne({ where: { id: id } });

      await task.destroy();

      const tasks = await TaskModel.findAll({ order: ["id"] });
      return res.status(202).json(tasks);
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default TaskController;

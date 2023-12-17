import sequelize from "../db/config.js";
import { DataTypes } from "sequelize";

const TaskModel = sequelize.define("tasks", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default TaskModel;

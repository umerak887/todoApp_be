import TaskModel from "../model/tasks.js";

const dbInit = async () => {
  TaskModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;

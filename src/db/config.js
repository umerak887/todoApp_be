import { Sequelize } from "sequelize";

const env = process.env;

const sequelize = new Sequelize(
  env.DB_NAME,
  env.DB_USER_NAME,
  env.DB_PASSWORD,
  {
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT,
    logging: false,
  }
);

export const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connected");
  } catch (error) {
    console.log("Something went wrong while connecting to the DB");
  }
};

export default sequelize;

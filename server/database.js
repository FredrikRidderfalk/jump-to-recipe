import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getRecipeViews() {
  const [rows] = await pool.query("SELECT * FROM RecipeViews");
  return rows;
}

export async function addRecipeView(recipeName) {
  const query = `
    INSERT INTO RecipeViews (recipeName, views)
    VALUES (?, 1)
    ON DUPLICATE KEY UPDATE views = views + 1;
  `;
  await pool.query(query, [recipeName]);
}

const RecipeViews = await getRecipeViews();
console.log(RecipeViews);

import express from "express";
import { getRecipeViews, addRecipeView } from "./database.js";

const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/recipe-views", async (req, res) => {
  const recipeViews = await getRecipeViews();
  res.send(recipeViews);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

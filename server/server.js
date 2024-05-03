import express from "express";
import cors from "cors";
import { getRecipeViews, addRecipeView } from "./database.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/recipe-views", async (req, res) => {
  const recipeViews = await getRecipeViews();
  res.send(recipeViews);
});

app.post("/add-recipe-view", async (req, res) => {
  try {
    const { recipeName } = req.body;
    await addRecipeView(recipeName);
    res.json({ message: "Recipe view confirmed!" });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Error confirming recipe view" });
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

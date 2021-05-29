import { readFile, writeFile } from "./promisifyFile";
import { recipesComparator } from "./recipe";

const pathToRecipesJson = `${__dirname}/../static/recipes.json`;
const utf8 = "utf-8";

class DbContext {
  recipes = [];

  constructor() {
    this.readData().then(() => {});
  }

  async readData() {
    try {
      const recipesJson = await readFile(pathToRecipesJson, utf8);
      this.recipes = recipesJson === "" ? [] : JSON.parse(recipesJson);
    } catch (error) {
      throw new Error("Error while reading recipes.json");
    }
  }

  async saveChanges() {
    const data = JSON.stringify(this.recipes.sort(recipesComparator), null, 2);
    try {
      await writeFile(pathToRecipesJson, data, utf8);
    } catch (error) {
      throw new Error("Error while saving recipes.json");
    }
  }
}

export default new DbContext();

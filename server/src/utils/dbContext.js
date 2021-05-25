import fs from "fs";
import util from "util";

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class DbContext {
  constructor() {
    this.readData().then(() => {});
  }

  recipes = [];
  #pathToRecipesJson = `${__dirname}/../static/recipes.json`;

  async readData() {
    try {
      const recipesJson = await readFile(this.#pathToRecipesJson, "utf-8");
      this.recipes = JSON.parse(recipesJson);
    } catch (error) {}
  }

  async saveChanges() {
    const data = JSON.stringify(this.recipes, null, 2);
    try {
      await writeFile(this.#pathToRecipesJson, data, "utf-8");
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new DbContext();

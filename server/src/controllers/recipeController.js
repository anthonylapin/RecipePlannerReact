import dbContext from "../utils/dbContext";

export const getAll = (req, res) => {
  res.json(dbContext.recipes);
};

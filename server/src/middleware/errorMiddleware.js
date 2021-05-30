import ApiError from "../utils/apiError";
import logger from "../utils/logger";

const errorMiddleware = (err, req, res, next) => {
  logger.error({ error: true, message: err.message });

  err instanceof ApiError
    ? res.status(err.status).json({ message: err.message })
    : res.status(500).json({ message: "Internal Server Error" });
};

export default errorMiddleware;

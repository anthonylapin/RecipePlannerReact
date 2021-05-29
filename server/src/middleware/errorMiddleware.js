import ApiError from "../utils/apiError";

const errorMiddleware = (err, req, res, next) => {
  err instanceof ApiError
    ? res.status(err.status).json({ message: err.message })
    : res.status(500).json({ message: "Internal Server Error" });
};

export default errorMiddleware;

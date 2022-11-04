import axios, { AxiosError } from "axios";

const errorHandler = (error: AxiosError | Error) => {
  if (axios.isAxiosError(error)) {
    return `Code: ${error.request.status}`;
  } else {
    return `Code: ${error.message}`;
  }
};

export default errorHandler;

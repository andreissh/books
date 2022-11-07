import axios, { AxiosError } from "axios";

const errorHandler = (error: AxiosError | Error) => {
  if (axios.isAxiosError(error)) {
    return `Error code: ${error.request.status}`;
  } else {
    return `Error code: ${error.message}`;
  }
};

export default errorHandler;

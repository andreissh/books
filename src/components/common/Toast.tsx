import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "success" | "error" | "warning" | "info";

type ToastProps = {
  (type: ToastType, message: string): void;
};

const Toast: ToastProps = (type, message) => {
  return toast[type](message);
};

export default Toast;

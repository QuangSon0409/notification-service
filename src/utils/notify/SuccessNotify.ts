import { toast } from "react-toastify";

const SuccessNotify = (message: string) => {
  return toast.success(`${message}`);
};

export default SuccessNotify;

import { Slide, toast } from "react-toastify";

export const errorToaster = (
  message = "Message",
  position = "top-center",
  autoClose = 5000,
  transition = Slide
) => {
  return toast.error(message ?? "Message", {
    transition: transition,
    position: "top-center",
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const successToaster = (
  message = "Message",
  position = "top-center",
  autoClose = 5000,
  transition = Slide
) => {
  return toast.success(message ?? "Message", {
    transition: transition,
    position: "top-center",
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

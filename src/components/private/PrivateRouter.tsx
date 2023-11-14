import React from "react";
import { useNavigate } from "react-router-dom";
type IPrivateRouter = {
  children: React.ReactNode;
};

const PrivateRouter = ({ children }: IPrivateRouter) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") as string);
  console.log("user", user);
  if (!user) {
    navigate("/");
  }
  return children;
};

export default PrivateRouter;

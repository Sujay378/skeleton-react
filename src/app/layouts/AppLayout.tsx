import { FC } from "react";
import { Outlet } from "react-router-dom";
import LoadingIndicator from "../components/common/LoadingIndicator";

const AppLayout: FC = () => {
  return (
    <div>
      <Outlet />
      <LoadingIndicator />
    </div>
  );
};

export default AppLayout;

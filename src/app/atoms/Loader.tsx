import { FC } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <Backdrop open className="-:z-[1000]">
      <CircularProgress color="inherit" className={className} />
    </Backdrop>
  );
};

export default Loader;

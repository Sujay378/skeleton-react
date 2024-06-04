import { FC, PropsWithChildren } from "react";

interface WrapperProps {
  className?: string;
}

const ModalWrapper: FC<PropsWithChildren<WrapperProps>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`-:w-[25vw] -:p-5 -:rounded-xl -:bg-white -:shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default ModalWrapper;

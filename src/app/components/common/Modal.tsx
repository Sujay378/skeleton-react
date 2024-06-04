import { type FC, Fragment, MouseEvent, memo } from "react";
import type { ModalState } from "../../types/modal.types";

import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import ModalWrapper from "../../atoms/ModalWrapper";

type ModalProps = ModalState & { handleClose?: () => void };

const Modal: FC<ModalProps> = memo(
  ({
    element,
    backdropVisible,
    backdropClass,
    wrapperClass,
    showCloseIcon,
    showActions,
    actionsClass,
    showPrimaryButton,
    primaryButtonClass,
    primaryButtonText,
    primaryCallback,
    showSecondaryButton,
    secondaryButtonClass,
    secondaryButtonText,
    secondaryCallback,
    handleClose,
  }) => {
    const primaryClick = (event: MouseEvent) => {
      primaryCallback?.(event);
      handleClose?.();
    };

    const secondaryClick = (event: MouseEvent) => {
      secondaryCallback?.(event);
      handleClose?.();
    };

    if (!element) return null;

    return (
      <Fragment>
        <Backdrop
          open={Boolean(backdropVisible)}
          className={`-:z-[1000] ${backdropClass}`}
          onClick={handleClose}
        />
        <ModalWrapper
          className={`-:fixed -:top-1/2 -:left-1/2 -:-translate-x-1/2 -:-translate-y-1/2 -:z-[1100] ${wrapperClass}`}
        >
          {showCloseIcon && (
            <div className="flex justify-end">
              <IconButton className="p-0" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
          )}
          {element}
          {showActions && (
            <div className={`-:flex -:gap-3 ${actionsClass}`}>
              {showSecondaryButton && (
                <div className="flex-grow">
                  <Button
                    variant="outlined"
                    color="primary"
                    className={`w-full ${secondaryButtonClass}`}
                    onClick={secondaryClick}
                  >
                    {secondaryButtonText}
                  </Button>
                </div>
              )}
              {showPrimaryButton && (
                <div className="flex-grow">
                  <Button
                    variant="contained"
                    color="primary"
                    className={`w-full ${primaryButtonClass}`}
                    onClick={primaryClick}
                  >
                    {primaryButtonText}
                  </Button>
                </div>
              )}
            </div>
          )}
        </ModalWrapper>
      </Fragment>
    );
  }
);

export default Modal;

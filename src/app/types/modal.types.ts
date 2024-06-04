import { MouseEvent, ReactNode } from "react";

export interface ModalState {
  element?: ReactNode;
  timerRef?: number;
  autoClose?: boolean;
  autoCloseTimeout?: number;
  backdropVisible?: boolean;
  backdropClass?: string;
  wrapperClass?: string;
  actionsClass?: string;
  primaryButtonClass?: string;
  secondaryButtonClass?: string;
  showCloseIcon?: boolean;
  showActions?: boolean;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryCallback?: (event: MouseEvent) => void;
  secondaryCallback?: (event: MouseEvent) => void;
}

export type InitiateAction = { type: "modal/initiate"; payload: ModalState };
export type CloseAction = { type: "modal/close" };
export type ModalActions = InitiateAction | CloseAction;

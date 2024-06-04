import {
  type FC,
  type PropsWithChildren,
  type Reducer,
  createContext,
  useReducer,
  useCallback,
} from "react";

import type { ModalActions, ModalState } from "../types/modal.types";
import Modal from "../components/common/Modal";

interface IModalContext {
  initiate: (config: Omit<ModalState, "timerRef">) => void;
  close: () => void;
}

const initialState: ModalState = {
  element: null,
  timerRef: 0,
  autoClose: false,
  autoCloseTimeout: 5000,
  backdropVisible: true,
  backdropClass: "",
  wrapperClass: "",
  actionsClass: "",
  primaryButtonClass: "",
  secondaryButtonClass: "",
  showCloseIcon: true,
  showActions: true,
  showPrimaryButton: true,
  showSecondaryButton: true,
  primaryButtonText: "Ok",
  secondaryButtonText: "Cancel",
};

export const ModalContext = createContext<IModalContext | null>(null);

const reducer: Reducer<ModalState, ModalActions> = (state, action) => {
  switch (action.type) {
    case "modal/initiate":
      return { ...state, ...action.payload };
    default:
      return initialState;
  }
};

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const close = useCallback(
    () => dispatch({ type: "modal/close" }),
    [dispatch]
  );

  const initiate = useCallback(
    (config: Omit<ModalState, "timerRef">) => {
      const timerRef =
        (config.autoClose &&
          setTimeout(close, config.autoCloseTimeout || 5000)) ||
        0;
      dispatch({ type: "modal/initiate", payload: { ...config, timerRef } });
    },
    [dispatch, close]
  );

  return (
    <ModalContext.Provider value={{ initiate, close }}>
      <Modal handleClose={close} {...state} />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

import { FC } from "react";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

import Loader from "../../atoms/Loader";
import { useNavigation } from "react-router-dom";

const LoadingIndicator: FC = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const navigation = useNavigation();

  const isQuerying = isFetching || isMutating;
  const isNavigating = ["submitting", "loading"].includes(navigation.state);
  const showLoader = isQuerying || isNavigating;

  return showLoader && <Loader />;
};

export default LoadingIndicator;

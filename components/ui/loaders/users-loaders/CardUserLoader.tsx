import dynamic from "next/dynamic";
import LoadingAnimationContainer from "../../loadings/LoadingAnimationContainer";

const CardUserLoader = dynamic(
  () => import("../../../pages/users/partials/CardUser"),
  {
    loading: () => <LoadingAnimationContainer count={1} />,
  }
);

export default CardUserLoader;

import dynamic from "next/dynamic";
import LoadingAnimationContainer from "../../loadings/LoadingAnimationContainer";

interface ProfileComponentProps {
  profile: string;
}

const ProfileComponentLoader = dynamic<ProfileComponentProps>(
  () => import("../../../pages/profile/Profile"),
  {
    loading: () => <LoadingAnimationContainer count={1} />,
    ssr: false,
  }
);

export default ProfileComponentLoader;

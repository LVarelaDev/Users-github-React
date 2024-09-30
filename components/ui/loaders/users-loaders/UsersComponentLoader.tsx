import dynamic from "next/dynamic";

const UsersComponentLoader = dynamic(
  () => import("../../../pages/users/Users"),
  {
    loading: () => <p className="text-xl font-bold text-white">Loading...</p>,
  }
);

export default UsersComponentLoader;

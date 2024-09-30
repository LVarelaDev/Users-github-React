import ProfileComponentLoader from "@/components/ui/loaders/users-loaders/ProfileComponentLoader";
import React from "react";

const page = ({ params }: { params: any }) => {
  const { profile } = params;

  return <ProfileComponentLoader profile={profile} />;
};

export default page;

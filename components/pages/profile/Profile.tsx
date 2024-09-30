"use client";

import BaseFetchContainer from "@/components/shared/BaseFetchContainer";
import BackButton from "@/components/ui/buttons/BackButton";
import {
  EnumEndpoints,
  getGitGubUserByUsername,
} from "@/services/github/github-service";
import useSWR from "swr";
import ProfileInformation from "./partials/ProfileInformation";
import { RepositoryComponentLoader } from "@/components/ui/loaders/repository-loaders/RepositoryComponentLoader";

interface ProfileProps {
  profile: string;
}

const Profile = ({ profile }: ProfileProps) => {
  const {
    data: user,
    isLoading: loading,
    error,
  } = useSWR([EnumEndpoints.User], () => getGitGubUserByUsername(profile));

  return (
    <div className="flex flex-col bg-white p-3 rounded-xl shadow-lg border w-[50%] ">
      <BackButton />
      <BaseFetchContainer
        data={user}
        error={error}
        isLoading={loading}
        countLoading={1}
      >
        {user && <ProfileInformation user={user} />}
        <hr />
        <RepositoryComponentLoader profile={profile} />
      </BaseFetchContainer>
    </div>
  );
};

export default Profile;

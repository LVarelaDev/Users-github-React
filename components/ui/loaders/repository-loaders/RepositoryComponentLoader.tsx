import dynamic from "next/dynamic";
import LoadingAnimationContainer from "../../loadings/LoadingAnimationContainer";
import { Repository } from "../../../../models/github-repos-models";

export interface RepoProps {
  profile: string;
}

export interface CardRepoProps {
  repo: Repository;
}

export const RepositoryComponentLoader = dynamic<RepoProps>(
  () => import("../../../pages/profile/partials/repos/RepositoryComponent"),
  {
    loading: () => <LoadingAnimationContainer count={1} />,
  }
);

export const CardRepositoryLoader = dynamic<CardRepoProps>(
  () => import("../../../pages/profile/partials/repos/RepositoryCard"),
  {
    loading: () => <LoadingAnimationContainer count={1} />,
  }
);

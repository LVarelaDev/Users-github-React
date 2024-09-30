import instanceAxios from "../../lib/axios-config";
import { GitHubApiResponse, UserDto } from "../../models/github-models";
import { Repository } from "../../models/github-repos-models";

export enum EnumEndpoints {
  SearchUser = "search/users",
  User = "users",
  Repos = "repos",
}

export const getGithubUsers = async (
  name: string,
  page = 1
): Promise<GitHubApiResponse> => {
  try {
    const response = await instanceAxios.get(
      `${EnumEndpoints.SearchUser}?q=${name}&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw "error in getGithubUsers";
  }
};

export const getGitGubUserByUsername = async (
  username: string
): Promise<UserDto> => {
  try {
    const response = await instanceAxios.get<UserDto>(
      `${EnumEndpoints.User}/${username}`
    );
    return response.data;
  } catch (error) {
    throw "error in getGitGubUserByUsername";
  }
};

export const getGitGubReposByUser = async (
  username: string
): Promise<Repository[]> => {
  try {
    const response = await instanceAxios.get<Repository[]>(
      `${EnumEndpoints.User}/${username}/${EnumEndpoints.Repos}`
    );
    return response.data;
  } catch (error) {
    throw "error in getGitGubReposByUser";
  }
};

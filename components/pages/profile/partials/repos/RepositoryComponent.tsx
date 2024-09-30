"use client";

import BaseFetchContainer from "@/components/shared/BaseFetchContainer";
import BarChart from "@/components/ui/graphics/Bar";
import { CardRepositoryLoader, RepoProps } from "@/components/ui/loaders/repository-loaders/RepositoryComponentLoader";
import { EnumEndpoints, getGitGubReposByUser } from "@/services/github/github-service";
import { countRepositoriesByLanguage } from "@/utils/countRepositoriesByLanguage";
import useSWR from "swr";



const RepositoryComponent = ({ profile }: RepoProps) => {
  const {
    data: repos,
    isLoading: loading,
    error,
  } = useSWR([EnumEndpoints.Repos], () => getGitGubReposByUser(profile));

  const languageCount = countRepositoriesByLanguage(repos ?? []);

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex">
        <BarChart languageCount={languageCount} />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold text-slate-700">
          Listado de respositorios
        </p>
        <p className="text-sm font-bold text-slate-700">
          Cantidad: {repos?.length}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 max-h-[500px] overflow-y-auto custom-scroll">
        {repos && (
          <BaseFetchContainer data={repos} isLoading={loading} error={error}>
            {repos.map((item) => (
              <div key={item.id}>
                <CardRepositoryLoader repo={item} />
              </div>
            ))}
          </BaseFetchContainer>
        )}
      </div>
    </div>
  );
};

export default RepositoryComponent;

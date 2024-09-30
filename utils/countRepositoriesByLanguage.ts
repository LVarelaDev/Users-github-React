import { Repository } from "@/models/github-repos-models";

export const countRepositoriesByLanguage = (
  repositories: Repository[]
): { [key: string]: number } => {
  return repositories.reduce((acc, repo) => {
    const language = repo.language;

    if (language) {
      acc[language] = (acc[language] || 0) + 1;
    } else {
      acc["Desconocidos"] = (acc["Desconocidos"] || 0) + 1;
    }
    return acc;
  }, {} as { [key: string]: number });
};

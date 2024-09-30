import Link from "next/link";
import IconRepo from "./icon/iconRepo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chip from "@/components/ui/chips/chip";
import Badge from "@/components/ui/badge/Badge";
import CloneRepo from "./CloneRepo";
import { faEye, faStar } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { CardRepoProps } from "@/components/ui/loaders/repository-loaders/RepositoryComponentLoader";

const RepositoryCard = ({ repo }: CardRepoProps) => {
  return (
    <div className="flex flex-col rounded-xl border p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex gap-3 items-center">
            <IconRepo />
            <Link
              target="_blank"
              href={repo.html_url}
              className="hover:underline text-blue-900 font-bold flex gap-[2px]"
            >
              {repo.name}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="w-2"
              />
            </Link>
            <Chip label={repo.visibility} />
          </div>
          <p
            className={`text-sm  ${
              repo.description == null
                ? "italic text-slate-500"
                : "text-slate-700"
            }`}
          >
            {repo.description != null ? repo.description : "Sin descripción"}
          </p>
        </div>
        <div className="flex gap-3">
          {repo.language && <Badge label={repo.language} />}
          <div className="flex gap-[6px] items-center text-sm">
            <FontAwesomeIcon icon={faStar} className="text-yellow-600" />
            {repo.watchers ?? 0}
          </div>
          <div className="flex gap-[6px] items-center text-sm">
            <FontAwesomeIcon icon={faEye} className="text-gray-600" />
            {repo.stargazers_count ?? 0}
          </div>
        </div>
        <CloneRepo url={repo.clone_url} />
      </div>
    </div>
  );
};

export default RepositoryCard;

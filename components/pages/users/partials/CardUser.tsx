import { GitHubUser } from "@/models/github-models";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

type TCardUserProps = {
  user: GitHubUser;
};

const CardUser = ({ user }: TCardUserProps) => {
  return (
    <div className="flex flex-col gap-2 bg-white shadow-sm rounded-xl p-4 border">
      <div className="flex justify-between">
        <div className="flex flex-1 gap-3">
          <Image
            src={user.avatar_url}
            alt="avatar"
            className="rounded-full border"
            width={50}
            height={50}
            priority
          />
          <div className="flex flex-col">
            <p className="text-base font-bold text-gray-700">{user.login}</p>
            <Link
              className="text-xs hover:underline text-gray-500"
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="w-2"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-3 h-3 rounded-full bg-green-100 p-4">
          {user.score}
        </div>
      </div>
      <hr />
      <div className="flex flex-1">
        <Link
          href={`/${user.login}`}
          className="bg-slate-800 text-white px-4 py-1 w-full text-center rounded-3xl"
        >
          Ver perfil
        </Link>
      </div>
    </div>
  );
};

export default CardUser;

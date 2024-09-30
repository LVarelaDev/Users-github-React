import { UserDto } from "@/models/github-models";
import { faBlogger, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

interface Props {
  user: UserDto;
}

const ProfileInformation = ({ user }: Props) => {
  return (
    <div className="flex gap-5 p-6">
      <div className="flex flex-1 gap-8 ">
        <Image
          src={user.avatar_url ?? ""}
          alt="avatar"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className="flex flex-col gap-4 py-3 ">
          <div className="flex flex-col ">
            <p className="text-slate-800 text-3xl font-bold">
              {user.name != null ? user.name : user.login}
            </p>
            <p className="text-slate-500 text-lg">
              {user.name != null ? user.login : ""}
            </p>
            {user.bio && <p className="text-sm">{user.bio}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-5">
              <p className=" text-base">
                Seguidores <strong>{user.followers ?? 0}</strong>
              </p>
              <p className=" text-base">
                Seguidos <strong>{user.following ?? 0}</strong>
              </p>
            </div>
            <div className="flex gap-5 items-center">
              {user.twitter_username != null && (
                <div className="flex gap-1 items-center">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="text-slate-900 text-lg"
                  />
                  {user.twitter_username}
                </div>
              )}
              {user.blog != null && (
                <Link
                  href={user.blog}
                  target="_blank"
                  className="flex gap-1 items-center hover:underline cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faBlogger}
                    className="text-slate-900 text-lg "
                  />
                  Visitar el blog
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;

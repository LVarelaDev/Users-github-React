import { copyToClipboard } from "@/utils/helpers/copyToClipboard";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  url: string;
}

const CloneRepo = ({ url }: Props) => {
  const handleCopyToClipboard = async (value: string) => {
    await copyToClipboard(value);
  };

  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm font-bold">Clonar repositorio</p>
      <div className="flex bg-gray-100 rounded-xl px-4 py-1 text-sm justify-between">
        {url.slice(0, 40) + "..."}
        <button
          onClick={async () => {
            await handleCopyToClipboard(url);
          }}
        >
          <FontAwesomeIcon
            icon={faCopy}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default CloneRepo;

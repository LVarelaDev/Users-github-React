import React from "react";

interface Props {
  label: string;
}

const chip = ({ label }: Props) => {
  return (
    <div className="flex items-center justify-center rounded-full py-1 px-2 border text-xs">
      {label}
    </div>
  );
};

export default chip;

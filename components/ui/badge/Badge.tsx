import { getLanguageColorRgb } from "@/utils/helpers/colorLanguageResolver";

interface Props {
  label: string;
}

const Badge = ({ label }: Props) => {
  return (
    <div className="flex gap-[6px] items-center text-sm">
      <div
        className={`p-1 rounded-full`}
        style={{ backgroundColor: getLanguageColorRgb(label) }}
      ></div>
      {label}
    </div>
  );
};

export default Badge;

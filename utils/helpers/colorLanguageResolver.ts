export const getLanguageColorHex = (language: string): string => {
  switch (language) {
    case "JavaScript":
      return "#f1e05a";
    case "Python":
      return "#3572A5";
    case "Java":
      return "#b07219";
    case "C++":
      return "#f34b7d";
    case "TypeScript":
      return "#2b7489";
    case "C#":
      return "#178600";
    case "Ruby":
      return "#701516";
    case "PHP":
      return "#4F5D95";
    case "Go":
      return "#00ADD8";
    case "Swift":
      return "#F05138";
    case "Kotlin":
      return "#A97BFF";
    case "Rust":
      return "#dea584";
    case "HTML":
      return "#e34c26";
    case "CSS":
      return "#563d7c";
    case "Shell":
      return "#89e051";
    default:
      return "#000000";
  }
};

export const getLanguageColorRgb = (language: string): string => {
  switch (language) {
    case "JavaScript":
      return "rgba(241, 224, 90, 0.6)";
    case "Python":
      return "rgba(53, 114, 165, 0.6)";
    case "Java":
      return "rgba(176, 114, 25, 0.6)";
    case "C++":
      return "rgba(243, 75, 125, 0.6)";
    case "TypeScript":
      return "rgba(43, 116, 137, 0.6)";
    case "C#":
      return "rgba(23, 134, 0, 0.6)";
    case "Ruby":
      return "rgba(112, 21, 22, 0.6)";
    case "PHP":
      return "rgba(79, 93, 149, 0.6)";
    case "Go":
      return "rgba(0, 173, 216, 0.6)";
    case "Swift":
      return "rgba(240, 81, 56, 0.6)";
    case "Kotlin":
      return "rgba(169, 123, 255, 0.6)";
    case "Rust":
      return "rgba(222, 165, 132, 0.6)";
    case "HTML":
      return "rgba(227, 76, 38, 0.6)";
    case "CSS":
      return "rgba(86, 61, 124, 0.6)";
    case "Shell":
      return "rgba(137, 224, 81, 0.6)";
    default:
      return "rgba(0, 0, 0, 0.6)";
  }
};

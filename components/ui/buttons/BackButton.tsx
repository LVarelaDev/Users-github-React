"use router";
import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={router.back} className="text-start hover:underline">
      <FontAwesomeIcon icon={faChevronLeft} className="pr-2" />
      Volver
    </Button>
  );
};

export default BackButton;

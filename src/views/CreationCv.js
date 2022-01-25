import { typography } from "@mui/system";
import react from "react";

import Automate from "../helpers/Automate";

import DemandeInfosPersonelles from "../components/creationCv/DemandeInfosPersonnelles";

function getStepContent() {
  console.log("dans le getStepCOntent");
  switch (Automate.state) {
    case "demande_informations_personelles":
      console.log("Automate.state : ", Automate.state);
      return <DemandeInfosPersonelles />;

    default:
      console.log("dans le case default");
      return <typography>Aucun Step de l'automate trouvé Désolé</typography>;
  }
}

const CreationCv = () => {
  return (
    <>
      <div>
        <typography>
          {" "}
          Nous allons vous demander quelques informations afin de générer
          automatiquement votre CV{" "}
        </typography>
      </div>
      <div>{getStepContent()}</div>
    </>
  );
};

export default CreationCv;

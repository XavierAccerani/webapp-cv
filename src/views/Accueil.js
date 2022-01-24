import { Link } from "react-router-dom";
import react from "react";

const Accueil = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/CreationCV">Creation de CV</Link>
        </li>
        <li>
          <Link to="/CreationLettreMotivation">Creation de Lettre De Motivation</Link>
        </li>
      </ul>
    </div>
  );
};

export default Accueil;

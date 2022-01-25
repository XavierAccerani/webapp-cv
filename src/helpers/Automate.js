const StateMachine = require("javascript-state-machine");

const Automate = new StateMachine({
  init: "demande_informations_personelles",

  transitions: [
    {
      name: "demandeInfosPersonellesVersDemandesEtudesEtDiplomes",
      from: "demande_informations_personelles",
      to: "demande_etudes_et_diplomes",
    },
  ],
});
export default Automate;

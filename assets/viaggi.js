// sul click prendo il currentTarget e tramite un querySelector prendo il span e gli faccio togliere o mettere la classe "d-none"
const hot = (e) => {
  e.currentTarget.querySelector(".card span").classList.toggle("d-none");
};

import { situationList } from "/actionCardList.js";

const situationTitle = document.querySelector(".situation-title");
const situationDesc = document.querySelector(".situation-description");
const random_pick_btn = document.querySelector(".random-pick_btn");

const handleRandomPickClick = () => {
  const ranVal = Math.floor(Math.random() * situationList.length);

  situationTitle.innerHTML = situationList[ranVal][0];
  situationDesc.innerHTML = situationList[ranVal][1];
};

random_pick_btn.addEventListener("click", handleRandomPickClick);

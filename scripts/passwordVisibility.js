import {
  CSS_CLASSES,
  FIELD_IDS,
  TYPE_STATES,
  VISIBILITY_STATES,
} from "./constants.js";

const btns = document.querySelectorAll(`.${CSS_CLASSES.btnVisibility}`);

const handleVisibility = (event) => {
  const input = event.target.parentElement.querySelector(
    `.${FIELD_IDS.password}`
  );
  const isVisibility = input.type === TYPE_STATES.text;
  const iconState = isVisibility ? VISIBILITY_STATES.on : VISIBILITY_STATES.off;

  input.type = isVisibility ? TYPE_STATES.password : TYPE_STATES.text;
  event.target.style.backgroundImage = `url("/images/icon_visibility_${iconState}.png")`;
};

btns.forEach((btn) => {
  btn.addEventListener("click", handleVisibility);
});

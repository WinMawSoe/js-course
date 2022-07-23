import Tooltip from "./ninja-ui/tooltips";
import Dropdown from "./ninja-ui/dropdown";
import Tabs from "./ninja-ui/tabs";
import Snackbar from "./ninja-ui/snackbar";

const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

const dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  snackbar.show("you clicked me");
});

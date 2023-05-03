import { navigation } from "../navigation";

const home = (content) => {
  navigation(content);
  const div = document.createElement("div");

  const mainHeader = document
    .createElement("h1")
    .appendChild(document.createTextNode("Ant's Breakfast"));
  const homeCopy = document.createElement("p");
  const hours = document.createElement("ul");

  div.appendChild(mainHeader);
  content.appendChild(div);
};

export { home };

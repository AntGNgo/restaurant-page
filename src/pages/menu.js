import { navigation } from "../navigation";

const menu = (content) => {
  navigation(content);
  const h1 = document.createElement("h1");

  h1.textContent = "This is a menu";
  content.appendChild(h1);
};

export { menu };

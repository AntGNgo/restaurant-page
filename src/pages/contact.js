import { navigation } from "../navigation";

const contact = (content) => {
  navigation(content);
  const h1 = document.createElement("h1");

  h1.textContent = "This is contact information";
  content.appendChild(h1);
};

export { contact };

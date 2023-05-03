import { contact } from "./pages/contact";
import { home } from "./pages/home";
import { menu } from "./pages/menu";
import { clearPage } from "./clearPage";

const navigation = (content) => {
  const ul = document.createElement("ul");
  ul.classList.add("nav");
  const liList = {
    home: document.createElement("li"),
    contact: document.createElement("li"),
    menu: document.createElement("li"),
  };

  for (const [key, value] of Object.entries(liList)) {
    liList[`${key}`].textContent = key;
    liList[`${key}`].classList.add("nav-item");
    // liList[`${key}`].addEventListener("click", (content) => {
    //   if (key === "contact") {
    //     clearPage(content);
    //     contact(content);
    //   } else if (key === "home") {
    //     clearPage(content);
    //     home(content);
    //   } else {
    //     clearPage(content);
    //     menu(content);
    //   }
    // });
    ul.appendChild(liList[key]);
  }

  liList["home"].addEventListener("click", () => {
    clearPage(content);
    home(content);
  });

  liList["contact"].addEventListener("click", () => {
    clearPage(content);
    contact(content);
  });

  liList["menu"].addEventListener("click", () => {
    clearPage(content);
    menu(content);
  });

  content.appendChild(ul);
};

export { navigation };

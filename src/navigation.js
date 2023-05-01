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
    ul.appendChild(liList[key]);
  }
  content.appendChild(ul);
};

export { navigation };

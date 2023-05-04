import { navigation } from "../navigation";
import restaurantImg from "../assets/restaurant.jpg";

const home = (content) => {
  // Load Navigation Module
  navigation(content);

  // Create Container for home items
  const div = document.createElement("div");
  div.classList.add("home-container");

  // Create and populate element for home copy
  const homeCopy = document.createElement("p");
  homeCopy.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  // Create image and add source
  const homeImg = document.createElement("img");
  homeImg.src = restaurantImg;

  // Append copy and image to container
  div.appendChild(homeCopy);
  div.appendChild(homeImg);

  // Create hours table
  const hours = document.createElement("ul");

  // Append container to content div
  content.appendChild(div);
};

export { home };

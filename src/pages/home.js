import { navigation } from "../navigation";
import restaurantImg from "../assets/restaurant.jpg";

const home = (content) => {
  // Load Navigation Module
  navigation(content);

  // Create Container for home items
  const div = document.createElement("div");
  div.classList.add("home-container");

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("home-container-left");

  // Create and populate element for home copy
  const homeCopy = document.createElement("p");
  homeCopy.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  // Create image and add source
  const homeImg = document.createElement("img");
  homeImg.src = restaurantImg;

  // Append copy and image to container
  leftDiv.append(homeCopy);
  div.appendChild(leftDiv);
  div.appendChild(homeImg);

  // Create hours table
  const hours = document.createElement("ul");
  hours.classList.add("hours-list");

  const createLi = (content) => {
    let li = document.createElement("li");
    // let liText = document.createTextNode(content);
    // li.appendChild(liText);
    li.textContent = content;
    return li;
  };

  const hoursArr = [
    "Sunday: 8-5",
    "Monday: 8-5",
    "Tuesday: 8-5",
    "Wednesday: 8-5",
    "Thurday: 8-5",
    "Friday: 8-5",
    "Saturday: 8-5",
  ];

  hoursArr.forEach((day) => {
    let hourToAppend = createLi(day);
    hours.appendChild(hourToAppend);
  });

  // Append container to content div
  leftDiv.appendChild(hours);
  content.appendChild(div);
};

export { home };

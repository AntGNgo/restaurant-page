import { navigation } from "./navigation.js";
import { home } from "./pages/home.js";
import { clearPage } from "./clearPage.js";
import "./style.css";
const content = document.getElementById("content");

home(content);
navigation(content);

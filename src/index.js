import Post from "./Post";
import "./styles/styles.css";
import json from "./assets/json";
import WebpackLogo from "./assets/webpack-logo.png";


const post = new Post("Some post", WebpackLogo);

console.log(post.toString());


const container = document.querySelector(".container");
const content = document.createElement("div");
const h2 = document.createElement("h2");
const p = document.createElement("p");
const title = document.createTextNode(post.title);
const date = document.createTextNode(post.date);
container.appendChild(content);
container.appendChild(h2).appendChild(title);
container.appendChild(p).appendChild(date);


console.log("JSON:",json);

console.log(WebpackLogo);
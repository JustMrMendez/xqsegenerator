/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "The dog",
  "My grandma",
  "His turtle",
  "My bird",
  "My father",
  "His wife"
];
let action = [
  "ate",
  "peed",
  "crushed",
  "broke",
  "killed",
  "stole",
  "destroyed",
  "punched"
];
let what = [
  "my homework",
  "the keys",
  "the car",
  "the phone",
  "the house",
  "the dog",
  "the cat",
  "the bird",
  "the fish",
  "the turtle",
  "the hamster",
  "the mouse",
  "the rat",
  "the snake",
  "the lizard",
  "the spider",
  "the fly",
  "the bee",
  "the ant",
  "the grasshopper",
  "the cockroach",
  "the mosquito",
  "the fly",
  "the wasp",
  "the beetle",
  "the ladybug",
  "the dragonfly",
  "the butterfly",
  "the moth",
  "the snail",
  "the slug",
  "the worm",
  "the clam",
  "the crab",
  "the lobster",
  "the octopus",
  "the squid",
  "the snapper",
  "the shark",
  "the whale",
  "the dolphin",
  "the seal",
  "the fish",
  "the frog"
];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
  "when I was sleeping",
  "when I was eating",
  "when I was playing",
  "when I was working",
  "when I was studying",
  "during my break",
  "when I was walking",
  "when I was running",
  "right before I left",
  "right after I arrived",
  "when I was driving",
  "before I left",
  "after I arrived"
];
let name = ["Rigo", "Juan", "Pedro", "Pablo", "Jose", "Maria", "Luis", "Luisa"];
window.onload = function() {
  document.getElementById("excuse").innerHTML = newExcuse();
  document.getElementById("author").innerHTML =
    name[Math.floor(Math.random() * name.length)];
};

const newExcuse = () => {
  return (
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)]
  );
};
document.getElementById("excuse").innerHTML = newExcuse();
document.getElementById("author").innerHTML =
  name[Math.floor(Math.random() * name.length)];
document.getElementById("newExcuse").addEventListener("click", () => {
  document.getElementById("excuse").innerHTML = newExcuse();
  document.getElementById("author").innerHTML =
    name[Math.floor(Math.random() * name.length)];
});

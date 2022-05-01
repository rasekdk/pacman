import Player from "./src/Player.js";
import animate from "./src/animationLoop.js";
import { createImage } from "./src/utils.js";
import { createMap } from "./src/createMap.js";
import Boundary from "./src/Boundary.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const map = [
  ["1", "-", "-", "-", "-", "-", "-", "-", "-", "-", "2"],
  ["|", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
  ["|", ".", "b", ".", "[", "7", "]", ".", "b", ".", "|"],
  ["|", ".", ".", ".", ".", "_", ".", ".", ".", ".", "|"],
  ["|", ".", "[", "]", ".", ".", ".", "[", "]", ".", "|"],
  ["|", ".", ".", ".", ".", "^", ".", ".", ".", ".", "|"],
  ["|", ".", "b", ".", "[", "+", "]", ".", "b", ".", "|"],
  ["|", ".", ".", ".", ".", "_", ".", ".", ".", ".", "|"],
  ["|", ".", "[", "]", ".", ".", ".", "[", "]", ".", "|"],
  ["|", ".", ".", ".", ".", "^", ".", ".", ".", ".", "|"],
  ["|", ".", "b", ".", "[", "5", "]", ".", "b", ".", "|"],
  ["|", ".", ".", ".", ".", ".", ".", ".", ".", "p", "|"],
  ["4", "-", "-", "-", "-", "-", "-", "-", "-", "-", "3"],
];

const boundaries = [];
const pellets = [];

createMap({ map: map, boundaries: boundaries, pellets: pellets });

boundaries.forEach((boundary) => {
  boundary.draw(c);
});

const player = new Player({
  position: {
    x: Boundary.width + Boundary.width / 2,
    y: Boundary.height + Boundary.height / 2,
  },
  velocity: { x: 0, y: 0 },
});

player.draw(c);

const keyDown = ({ key }) => {
  if (player.keys[key]) {
    player.keys[key].pressed = true;
    player.lastKey = key;
  }
};

const keyUp = ({ key }) => {
  if (player.keys[key]) {
    player.keys[key].pressed = false;
  }
};

addEventListener("keydown", keyDown);
addEventListener("keyup", keyUp);

animate({
  c: c,
  boundaries: boundaries,
  player: player,
  pellets: pellets,
});

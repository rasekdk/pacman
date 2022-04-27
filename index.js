import Player from "./src/Player.js";
import animate from "./src/animationLoop.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Boundary {
  static width = 40;
  static height = 40;
  constructor({ position }) {
    this.position = position;
    this.width = Boundary.width;
    this.height = Boundary.height;
  }

  draw(c) {
    c.fillStyle = "blue";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const map = [
  ["-", "-", "-", "-", "-", "-", "-"],
  ["-", " ", " ", " ", " ", " ", "-"],
  ["-", " ", "-", " ", "-", " ", "-"],
  ["-", " ", "-", " ", "-", " ", "-"],
  ["-", " ", " ", " ", " ", " ", "-"],
  ["-", "-", "-", "-", "-", "-", "-"],
];

const boundaries = [];

map.forEach((row, rowIndex) => {
  row.forEach((symbol, columnIndex) => {
    switch (symbol) {
      case "-":
        boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * columnIndex,
              y: Boundary.height * rowIndex,
            },
          })
        );
        break;
    }
  });
});

boundaries.forEach((boundary) => {
  boundary.draw(c);
});

const player = new Player({
  position: { x: Boundary.width * 1.5, y: Boundary.height * 1.5 },
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
});

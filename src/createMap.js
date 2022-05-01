import { createImage } from "./utils.js";
import Boundary from "./Boundary.js";
import Pellet from "./Pellet.js";

export const createMap = ({ map, boundaries, pellets }) => {
  map.forEach((row, i) => {
    row.forEach((symbol, j) => {
      switch (symbol) {
        case "-":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipes/pipeHorizontal.png"),
            })
          );
          break;
        case "|":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipes/pipeVertical.png"),
            })
          );
          break;
        case "1":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipes/pipeCorner1.png"),
            })
          );
          break;
        case "2":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipes/pipeCorner2.png"),
            })
          );
          break;
        case "3":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipes/pipeCorner3.png"),
            })
          );
          break;
        case "4":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipes/pipeCorner4.png"),
            })
          );
          break;
        case "b":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipes/block.png"),
            })
          );
          break;
        case "[":
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/pipes/capLeft.png"),
            })
          );
          break;
        case "]":
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/pipes/capRight.png"),
            })
          );
          break;
        case "_":
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/pipes/capBottom.png"),
            })
          );
          break;
        case "^":
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/pipes/capTop.png"),
            })
          );
          break;
        case "+":
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/pipes/pipeCross.png"),
            })
          );
          break;
        case "5":
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              color: "blue",
              image: createImage("./img/pipes/pipeConnectorTop.png"),
            })
          );
          break;
        case "6":
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              color: "blue",
              image: createImage("./img/pipes/pipeConnectorRight.png"),
            })
          );
          break;
        case "7":
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              color: "blue",
              image: createImage("./img/pipes/pipeConnectorBottom.png"),
            })
          );
          break;
        case "8":
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/pipes/pipeConnectorLeft.png"),
            })
          );
          break;
        case ".":
          pellets.push(
            new Pellet({
              position: {
                x: j * Boundary.width + Boundary.width / 2,
                y: i * Boundary.height + Boundary.height / 2,
              },
            })
          );
          break;
      }
    });
  });
};

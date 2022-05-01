const animate = (props) => {
  const { c, boundaries, player, pellets } = props;
  requestAnimationFrame(() => animate(props));
  c.clearRect(0, 0, c.canvas.width, c.canvas.height);

  checkMovement(player, boundaries);

  checkColision({
    boundaries: boundaries,
    player: player,
    c: c,
    pellets: pellets,
  });

  player.update(c);
};

export default animate;

const checkMovement = (player, boundaries) => {
  if (player.keys.w.pressed && player.lastKey === "w") {
    handleMove({
      boundaries: boundaries,
      player: player,
      value: "y",
      move: { x: 0, y: -5 },
    });
  }
  if (player.keys.a.pressed && player.lastKey === "a") {
    handleMove({
      boundaries: boundaries,
      player: player,
      value: "x",
      move: { x: -5, y: 0 },
    });
  }
  if (player.keys.s.pressed && player.lastKey === "s") {
    handleMove({
      boundaries: boundaries,
      player: player,
      value: "y",
      move: { x: 0, y: 5 },
    });
  }
  if (player.keys.d.pressed && player.lastKey === "d") {
    handleMove({
      boundaries: boundaries,
      player: player,
      value: "x",
      move: { x: 5, y: 0 },
    });
  }
};

const checkColision = ({ boundaries, player, c, pellets }) => {
  for (let i = pellets.length - 1; 0 < i; i--) {
    const pellet = pellets[i];
    pellet.draw(c);
    if (
      Math.hypot(
        pellet.position.x - player.position.x,
        pellet.position.y - player.position.y
      ) <
      pellet.radius + player.radius
    ) {
      console.log("toucheing");
      pellets.splice(i, 1);
    }
  }
  boundaries.forEach((boundary) => {
    boundary.draw(c);
    if (circleCollidesWithRectangle({ circle: player, rectangle: boundary })) {
      player.velocity = { x: 0, y: 0 };
    }
  });
};

const circleCollidesWithRectangle = ({ circle, rectangle }) => {
  return (
    circle.position.y - circle.radius + circle.velocity.y <=
      rectangle.position.y + rectangle.height &&
    circle.position.x + circle.radius + circle.velocity.x >=
      rectangle.position.x &&
    circle.position.y + circle.radius + circle.velocity.y >=
      rectangle.position.y &&
    circle.position.x - circle.radius + circle.velocity.x <=
      rectangle.position.x + rectangle.width
  );
};

const handleMove = ({ boundaries, player, value, move }) => {
  for (let i = 0; i < boundaries.length; i++) {
    const boundary = boundaries[i];
    if (
      circleCollidesWithRectangle({
        circle: { ...player, velocity: move },
        rectangle: boundary,
      })
    ) {
      player.velocity[value] = 0;
      break;
    } else {
      player.velocity[value] = move[value];
    }
  }
};

const animate = (props) => {
  const { c, boundaries, player } = props;
  requestAnimationFrame(() => animate(props));
  c.clearRect(0, 0, c.canvas.width, c.canvas.height);

  checkMovement(player);

  checkColision({ boundaries: lea, player: player, c: c });

  player.update(c);
};

export default animate;

const checkMovement = (player) => {
  player.velocity = { x: 0, y: 0 };

  if (player.keys.w.pressed && player.lastKey === "w") player.velocity.y = -5;
  if (player.keys.a.pressed && player.lastKey === "a") player.velocity.x = -5;
  if (player.keys.s.pressed && player.lastKey === "s") player.velocity.y = 5;
  if (player.keys.d.pressed && player.lastKey === "d") player.velocity.x = 5;
};

const checkColision = ({ boundaries, player, c }) => {
  boundaries.forEach((boundary) => {
    boundary.draw(c);
    if (
      player.position.y - player.radius + player.velocity.y <=
        boundary.position.y + boundary.height &&
      player.position.x + player.radius + player.velocity.x >=
        boundary.position.x &&
      player.position.y + player.radius + player.velocity.y >=
        boundary.position.y &&
      player.position.x - player.radius + player.velocity.x <=
        boundary.position.x + boundary.width
    ) {
      player.velocity = { x: 0, y: 0 };
    }
  });
};

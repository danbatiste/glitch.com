function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  const container = document.getElementById("container");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  let d = 1;
  function frame() {
    if (pos > 350 || pos < 0) {
      d = -d;
    }
    pos = pos + d + 5 * (Math.random() - 0.5);
    elem.style.top = pos + 5 * (Math.random() - 0.5) + "px";
    elem.style.left = pos + 5 * (Math.random() - 0.5) + "px";
    container.style.background =
      "#" + Math.floor((pos / 350) * 16 * 16 * 16 * 16 * 16 * 16).toString(16);
  }
}

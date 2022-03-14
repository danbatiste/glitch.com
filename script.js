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
    elem.style.top = pos + 2 * (Math.random() - 0.5) + "px";
    elem.style.left = pos + 2 * (Math.random() - 0.5) + "px";
    container.style.background =
      "#" + Math.floor((pos / 350) * 16 * 16 * 16 * 16 * 16 * 16).toString(16);
    elem.style.width = 50 + 200*(Math.random() - 0.5) + "px";
    elem.style.height = 50 + 200*(Math.random() - 0.5) + "px";
  }
}

function coolFunc() {
  document.getElementById("animate").innerText = parseInt(document.getElementById("animate").innerText) + 1;
  var elems = document.body.getElementsByTagName("*");
  var crazyfuncs = [
    //(elem) => { elem.remove() },
    (elem1, elem2) => { elem1.style.width = Math.random()*100 + "px" },
    (elem1, elem2) => { elem1.style.height = Math.random()*100 + "px" },
    (elem1, elem2) => { elem1.style.opacity = Math.floor(Math.random()*100) + "%" },
    (elem1, elem2) => { elem1.style.transform = "rotate(" + Math.floor((Math.random()-0.5)*360) + "deg)" },
    (elem1, elem2) => { elem1.style.top = Math.random()*100 + "px" },
    (elem1, elem2) => { elem1.style.left = Math.random()*100 + "px" },
    (elem1, elem2) => { elem1.style.backgroundColor = "#" + Math.floor((pos / 350) * 16 * 16 * 16 * 16 * 16 * 16).toString(16) },
    (elem1, elem2) => { alert("ATTENTION\n\nTHanks for your attention") },
    (elem1, elem2) => { document.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
    (elem1, elem2) => { elem1.appendChild(elem2.cloneNode(true))}
  ];
  let randoelem1 = elems[Math.floor(Math.random()*elems.length)];
  let randoelem2 = elems[Math.floor(Math.random()*elems.length)];
  let randofunc = crazyfuncs[Math.floor(Math.random()*crazyfuncs.length)];
  randofunc(randoelem1, randoelem2);
}
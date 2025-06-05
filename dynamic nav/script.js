var open = document.querySelector("#nav i");
var close = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 1,
});

tl.from("#full h4", {
  x: 100,
  duration: 0.6,
  opacity: 0,
  stagger: 0.3,
});
tl.from("#full i", {
  opacity: 0,
  scale: 0,
});

tl.pause();

open.addEventListener("click", () => {
  console.log("object");
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
});

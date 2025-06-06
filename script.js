// gsap.to("#box1", {
//   x: 900,
//   duration: 1,
//   delay: 1,
//   rotate: 360,
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to("#box1", { x: 1000, duration: 2, delay: 1 });

// gsap.from("#box2", { x: 500, y: 100, duration: 2, delay: 1 });
// gsap.from("h1", {
//   y: 200,
//   delay: 1,
//   duration: 2,
//   opacity: 0,
//   color: "red",
//   stagger: 1,
// });

var tl = gsap.timeline();

tl.from("h1", {
  opacity: 0,
  y: -20,
  duration: 0.5,
  delay: 0.5,
});
tl.from("h4", {
  opacity: 0,
  y: -20,
  duration: 1,
  stagger: 0.2,
});

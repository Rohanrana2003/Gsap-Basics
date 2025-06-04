gsap.from("#box1", { x: -60, y: -60, duration: 1, delay: 1, rotate: -10 });
// gsap.to("#box1", { x: 1000, duration: 2, delay: 1 });

// gsap.from("#box2", { x: 500, y: 100, duration: 2, delay: 1 });
gsap.from("h1", {
  y: 200,
  delay: 1,
  duration: 2,
  opacity: 0,
  color: "red",
  stagger: 1,
});

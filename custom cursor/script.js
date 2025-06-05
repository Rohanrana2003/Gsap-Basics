const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const imageDiv = document.querySelector("#img");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
    ease: "back.out",
  });
});

imageDiv.addEventListener("mouseenter", () => {
  gsap.to(cursor, { scale: 4 });
});

imageDiv.addEventListener("mouseleave", () => {
  gsap.to(cursor, { scale: 1 });
});

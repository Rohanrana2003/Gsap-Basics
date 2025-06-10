window.addEventListener("wheel", function (dets) {
  console.log(dets.deltaY);
  if (dets.deltaY > 0) {
    gsap.to(".marque", {
      duration: 3.6,
      transform: "translateX(-200%)",
      ease: "none",
      repeat: -1,
    });
    gsap.to(".marque img", {
      rotate: "180deg",
    });
  } else {
    gsap.to(".marque", {
      duration: 3.6,
      transform: "translateX(0)",
      ease: "none",
      repeat: -1,
    });
    gsap.to(".marque img", {
      rotate: "360deg",
    });
  }
});

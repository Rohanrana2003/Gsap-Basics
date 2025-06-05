gsap.to("#page2 h1", {
  transform: "translateX(-120%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "end -180%",
    scrub: 2,
    pin: true,
  },
});

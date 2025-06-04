gsap.from("#page1 #box", {
  scale: 0,
  delay: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page1 #box",
    scroller: "body",
    scrub: 2,
  },
});

gsap.from("#page2 #box", {
  scale: 0,
  delay: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scroller: "body",
    scrub: 2,
  },
});

gsap.from("#page3 #box", {
  scale: 0,
  delay: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page3 #box",
    scroller: "body",
    scrub: 2,
  },
});

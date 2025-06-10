function breakTheText() {
  const h1 = document.querySelector("h1");
  const h1Text = h1.textContent;
  var clutter = "";
  const splittedArray = h1Text.split("");

  const halfLength = splittedArray.length / 2;

  splittedArray.forEach(function (elem, idx) {
    if (idx < halfLength) {
      clutter += `<span class='first'>${elem}</span>`;
    } else {
      clutter += `<span class='second'>${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
  console.log(h1);
}

breakTheText();

gsap.from(".first", {
  y: 50,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  stagger: 0.15,
});

gsap.from(".second", {
  y: 50,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  stagger: -0.15,
});

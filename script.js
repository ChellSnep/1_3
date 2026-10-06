document.addEventListener("DOMContentLoaded", function () {
  const ex6 = document.getElementById("ex6_animate_button");
  const ex6_Element = document.getElementById("ex6_element");

  if (ex6 && ex6_Element) {
    ex6.addEventListener("click", function () {
      ex6_Element.classList.add("animate-move");

      ex6_Element.addEventListener("animationend", function handler() {
        ex6_Element.classList.remove("animate-move");
        ex6_Element.removeEventListener("animationend", handler);
      });
    });
  }
});

const ex4 = document.getElementById("ex4_button");

if (ex4) {
  ex4.addEventListener("click", function () {
    const colors = [
      "#f8d7da",
      "#d4edda",
      "#d1ecf1",
      "#fff3cd",
      "#e2e3e5",
      "#cce5ff",
      "#ffffff",
    ];

    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const chosenColor = colors[randomColorIndex];

    document.body.style.backgroundColor = chosenColor;
  });
}

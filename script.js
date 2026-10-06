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

const ex2 = document.getElementById("ex2_text");
const ex2_text = document.getElementById("ex2_content");

if (ex2 && ex2_text) {
  ex2_text.textContent = `Wpisano ${ex2.value.length} znaków`;

  ex2.addEventListener("input", function () {
    const currentLength = this.value.length;

    ex2_text.textContent = `Wpisano ${currentLength} znaków`;
  });
}

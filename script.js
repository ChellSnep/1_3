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

/* No flag shown by default + gentle animations */

window.addEventListener("DOMContentLoaded", () => {
  // --- Do not decode/show Option C automatically ---
  const encodedC = "V2FzIEhhcmQ=";
  // #finalFlag stays hidden

  // --- Gentle bob animations (keep very small so items stay in their corners) ---
  const card = document.querySelector(".page-card");
  const star = document.querySelector(".star");
  const frog = document.querySelector(".frog");

  if (card && card.animate) {
    card.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(-4px)" },
        { transform: "translateY(0px)" },
      ],
      { duration: 4500, iterations: Infinity, easing: "ease-in-out" }
    );
  }

  if (star && star.animate) {
    star.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(-3px)" },
        { transform: "translateY(0px)" },
      ],
      { duration: 3200, iterations: Infinity, easing: "ease-in-out" }
    );
  }

  if (frog && frog.animate) {
    frog.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(-3px)" },
        { transform: "translateY(0px)" },
      ],
      { duration: 3200, iterations: Infinity, easing: "ease-in-out" }
    );
  }
});

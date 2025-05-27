document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("tooltip");

  document.querySelectorAll(".stop").forEach(stop => {
    stop.addEventListener("mouseenter", (e) => {
      const name = stop.dataset.name;
      const time = stop.dataset.time;
      tooltip.innerHTML = `<strong>${name}</strong><br>Arrival: ${time}`;
      tooltip.classList.remove("d-none");
    });

    stop.addEventListener("mousemove", (e) => {
      tooltip.style.left = `${e.pageX + 10}px`;
      tooltip.style.top = `${e.pageY - 40}px`;
    });

    stop.addEventListener("mouseleave", () => {
      tooltip.classList.add("d-none");
    });
  });
});
function refreshMap() {
  // Placeholder logic - in a real project, you'd fetch live positions via API.
  alert("Live data update not available in this static demo.");

  // Example for dynamic updates (to be implemented with real data):
  // document.querySelector('.bus-icon').setAttribute("cx", "260");
  // document.querySelector('.bus-icon').setAttribute("cy", "85");
}

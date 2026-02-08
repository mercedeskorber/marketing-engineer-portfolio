document.getElementById("cta-button").addEventListener("click", function () {
  document.getElementById("lead-form").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("lead-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Bedankt! (demo)");
});

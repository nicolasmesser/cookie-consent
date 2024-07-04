const modal = document.getElementById("modal");
const close = document.getElementById("modal-close-btn");

setTimeout(function() {
  modal.style.display = "inline";
  console.log("Modal Opened!");
}, 1500);

close.addEventListener("click", function() {
  modal.style.display = "none";
  console.log("Modal Closed!");
});

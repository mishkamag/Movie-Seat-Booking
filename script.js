var container = document.querySelector(".container");
var seats = document.querySelectorAll(".row .seat:not(.occupied)");
var count = document.getElementById("count");
var total = document.getElementById("total");
var movieSelect = document.getElementById("movie");

var ticketPrise = +movieSelect.value;

function updateSelectedCount() {
  var selectedSeats = document.querySelectorAll(".row .seat.selected");
  /*var seatsIndex = [...selectedSeats].map(function (el) {
    return [...seats].indexOf(el);
  });ინდექსაციია ადგილების*/
  var selectedSeatsCount = selectedSeats.length;
  count.textContent = selectedSeatsCount;
  total.innerText = "$" + ticketPrise * selectedSeatsCount;
}

movieSelect.addEventListener("change", function (e) {
  ticketPrise = e.target.value;
  updateSelectedCount();
});

container.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  ) {
    event.target.classList.toggle("selected");
  }
  updateSelectedCount();
});

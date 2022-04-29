var container = document.querySelector(".container");
var seats = document.querySelectorAll(".row .seat:not(.occupied)");
var count = document.getElementById("count");
var total = document.getElementById("total");
var movieSelect = document.getElementById("movie");
const checkout = document.querySelector(".checkout");

var ticketPrise = +movieSelect.value;

function updateSelectedCount() {
  var selectedSeats = document.querySelectorAll(".row .seat.selected");
  var seatsIndex = [...selectedSeats].map(function (el) {
    return [...seats].indexOf(el);
  });

  checkout.innerHTML = ""; /*ყოველ რესტარტზე ასუფთავებს*/

  seatsIndex.map((el) => {
    const str = `Row ${Math.ceil(++el / 8)}.${el % 8}`;
    const para = document.createElement("p");
    para.innerText = str;
    checkout.appendChild(para);
  });
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

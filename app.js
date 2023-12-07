let points = 0;
let numbers = randoSequence(5);

let values = [];
let selectedCards = [];

let pointsElement = document.getElementById("points");

document.getElementById("playButton").addEventListener("click", () => {
  document.getElementById(`card${numbers[0]}`).style.backgroundColor = "red";
  document.getElementById(`card${numbers[1]}`).style.backgroundColor = "red";

  document.getElementById(`card${numbers[2]}`).style.backgroundColor = "blue";
  document.getElementById(`card${numbers[3]}`).style.backgroundColor = "blue";

  document.getElementById(`card${numbers[4]}`).style.backgroundColor = "green";
  document.getElementById(`card${numbers[5]}`).style.backgroundColor = "green";

  pointsElement.innerText = points;

  document.querySelectorAll(".card-container").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (values.length < 2) {
        let id = e.target.id.slice(-1);

        document.getElementById(`${id}`).remove();
        values.push(document.getElementById(`card${id}`).style.backgroundColor);
        selectedCards.push(`${id}`);

        if (values.length == 2) {
          if (values[0] == values[1]) {
            points++;
            values = [];
            selectedCards = [];
          } else {
            returnFrontFaceElements(0, 1);
            selectedCards = [];
            values = [];
          }
        }
        pointsElement.innerHTML = points;
      }
    });
  });
});

function returnFrontFaceElements(id1, id2) {
  let el1 = document.createElement("div");
  el1.setAttribute("id", selectedCards[id1]);
  el1.setAttribute("class", "front-face");
  el1.setAttribute("background-color", "lightgray");
  document
    .getElementsByClassName(`cc-${selectedCards[id1]}`)[0]
    .appendChild(el1);

  let el2 = document.createElement("div");
  el2.setAttribute("id", selectedCards[id2]);
  el2.setAttribute("class", "front-face");
  el2.setAttribute("background-color", "lightgray");
  document
    .getElementsByClassName(`cc-${selectedCards[id2]}`)[0]
    .appendChild(el2);
}

const players = [
  {
    name: "Virat Kohli",
    role: "Batsman",
    strikeRate: "137.8",
    matches: 274,
    jersey: 18,
    best: "82* vs Australia"
  },
  {
    name: "MS Dhoni",
    role: "Wicket Keeper",
    strikeRate: "126.1",
    matches: 350,
    jersey: 7,
    best: "183* vs Sri Lanka"
  },
  {
    name: "Jasprit Bumrah",
    role: "Bowler",
    strikeRate: "N/A",
    matches: 160,
    jersey: 93,
    best: "6/19 vs West Indies"
  }
];

function openModal(index) {
  const player = players[index];
  document.getElementById("modalName").textContent = player.name;
  document.getElementById("modalRole").textContent = player.role;
  document.getElementById("modalSR").textContent = player.strikeRate;
  document.getElementById("modalMatches").textContent = player.matches;
  document.getElementById("modalJersey").textContent = player.jersey;
  document.getElementById("modalBest").textContent = player.best;
  document.getElementById("playerModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("playerModal").style.display = "none";
}

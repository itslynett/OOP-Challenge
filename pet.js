const pet = {
  name: "Fluffy",
  hunger: 5,
  energy: 5,
  happiness: 5,
  tricks: []
};

function updateStatus() {
  document.getElementById("hunger").textContent = pet.hunger;
  document.getElementById("energy").textContent = pet.energy;
  document.getElementById("happiness").textContent = pet.happiness;
}

function eat() {
  pet.hunger = Math.max(0, pet.hunger - 3);
  pet.happiness = Math.min(10, pet.happiness + 1);
  updateStatus();
  alert(`${pet.name} has eaten!`);
}

function sleep() {
  pet.energy = Math.min(10, pet.energy + 5);
  updateStatus();
  alert(`${pet.name} took a nap.`);
}

function play() {
  if (pet.energy >= 2) {
    pet.energy -= 2;
    pet.happiness = Math.min(10, pet.happiness + 2);
    pet.hunger = Math.min(10, pet.hunger + 1);
    updateStatus();
    alert(`${pet.name} had fun playing!`);
  } else {
    alert(`${pet.name} is too tired. Let them sleep!`);
  }
}

function train() {
  const trickInput = document.getElementById("trickInput");
  const trick = trickInput.value.trim();

  if (trick !== "") {
    pet.tricks.push(trick);

    const trickList = document.getElementById("trickList");
    const li = document.createElement("li");
    li.textContent = trick;
    trickList.appendChild(li);

    trickInput.value = "";
    alert(`${pet.name} learned "${trick}"!`);
  } else {
    alert("Please enter a trick.");
  }
}

// Attach event listeners
document.getElementById("eatBtn").addEventListener("click", eat);
document.getElementById("sleepBtn").addEventListener("click", sleep);
document.getElementById("playBtn").addEventListener("click", play);
document.getElementById("trainBtn").addEventListener("click", train);

// Initial display
updateStatus();

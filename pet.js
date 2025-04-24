const pet = {
  name: "Fluffy",
  hunger: 5,
  energy: 5,
  happiness: 5,
  tricks: ["sit", "stay", "fetch", "roll over", "shake", "play dead"]
};

function updateStatus() {
  document.getElementById("hunger").textContent = pet.hunger;
  document.getElementById("energy").textContent = pet.energy;
  document.getElementById("happiness").textContent = pet.happiness;
}

function updateTricks() {
  const trickList = document.getElementById("trickList");
  trickList.innerHTML = ""; // Clear existing list

  pet.tricks.forEach(trick => {
    const li = document.createElement("li");
    li.textContent = trick;
    trickList.appendChild(li);
  });
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
    if (!pet.tricks.includes(trick)) {
      pet.tricks.push(trick);
      updateTricks();
      alert(`${pet.name} learned "${trick}"!`);
    } else {
      alert(`${pet.name} already knows "${trick}".`);
    }
    trickInput.value = "";
  } else {
    alert("Please enter a trick.");
  }
}

// Attach event listeners
document.getElementById("eatBtn").addEventListener("click", eat);
document.getElementById("sleepBtn").addEventListener("click", sleep);
document.getElementById("playBtn").addEventListener("click", play);
document.getElementById("trainBtn").addEventListener("click", train);

// Initialize display
updateStatus();
updateTricks();

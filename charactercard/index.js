const character = {
	name: "Snortlebat",
	classType: "Swamp Guardian",
	level: 1,
	health: 100,
	attacked() {
		this.health = Math.max(0, this.health - 20);
	},
	levelUp() {
		this.level += 1;
	},
};

const classStat = document.querySelector("#classStat");
const levelStat = document.querySelector("#levelStat");
const healthStat = document.querySelector("#healthStat");

function renderStats() {
	classStat.textContent = character.classType;
	levelStat.textContent = character.level;
	healthStat.textContent = character.health;
}

document.querySelector("#attackedBtn").addEventListener("click", () => {
	character.attacked();
	renderStats();
});

document.querySelector("#levelUpBtn").addEventListener("click", () => {
	character.levelUp();
	renderStats();
});

renderStats();

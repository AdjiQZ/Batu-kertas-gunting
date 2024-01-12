class Start {
  constructor() {
    this.playerName = "Player";
    this.botName = "Deabot";
    this.playerOption;
    this.botOption;
    this.winner = "";
    this.score = 0;
  }

  increaseScore() {
    this.score++;
  }

  get getBotOption() {
    return this.botOption;
  }

  set setBotOption(option) {
    this.botOption = option;
  }

  get getPlayerOption() {
    return this.playerOption;
  }

  set setplayerOption(option) {
    this.playerOption = option;
  }

  botBrain() {
    const option = ["✊", "🤚", "✌️"];
    const bot = option[Math.floor(Math.random() * option.length)];
    return bot;
  }

  winCaculation() {
    if (this.botOption == "✊" && this.playerOption == "🤚") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✊" && this.playerOption == "✌️") {
      return (this.winner = this.botName);
    } else if (this.botOption == "🤚" && this.playerOption == "✊") {
      return (this.winner = this.botName);
    } else if (this.botOption == "🤚" && this.playerOption == "✌️") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✌️" && this.playerOption == "✊") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✌️" && this.playerOption == "🤚") {
      return (this.winner = this.botName);
    } else {
      return (this.winner = "SERI");
    }
  }

  matchResult() {
    if (this.winner !== "SERI") {
      return `${this.winner} Menang!`;
    } else {
      return `Wah ${this.winner}, Ngak Ada Yang Menang, Mari Coba Lagi`;
    }
  }
}
function pickOption(params) {
  // const start = new Start();
  start.setplayerOption = params;
  start.setBotOption = start.botBrain();
  start.winCaculation();
  console.log(`Player: ${start.getPlayerOption} VS bot: ${start.getBotOption}`);
  console.log("Hasil Akhir: ", start.matchResult());

  const inGame = document.getElementById("inGame");
  const result = document.getElementById("result");

  inGame.textContent = "...";
  result.textContent = "...";

  const backgroundAudio = document.getElementById("backgroundAudio");
  backgroundAudio.play();

  setTimeout(() => {
    inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`;
    result.textContent = start.matchResult();
    if (start.winner === start.playerName) {
      start.increaseScore();
      console.log(`Skor Anda: ${start.score}`);
      document.getElementById("playerScore").textContent = start.score;
    }
  }, 1500);
}
const start = new Start();

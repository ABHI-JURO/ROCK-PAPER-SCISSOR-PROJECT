# ✂️ Rock Paper Scissor — Browser Game

A classic **Rock, Paper, Scissors** game playable in the browser. Built with pure **HTML**, **CSS**, and **JavaScript** — no frameworks, no dependencies. Features persistent score tracking via `localStorage` so your score survives page refreshes!

---

## 🎮 How to Play

1. Open `new(v6)-rock_paper_scissor.html` in your browser.
2. Click **Rock** 🪨, **Paper** 📄, or **Scissors** ✂️ to make your move.
3. The computer picks randomly — the result and updated score appear instantly.
4. Click **NEW GAME** to reset all scores back to zero.

---

## 📁 Project Structure

```
Rock_Paper_Scissor_Project/
│
├── new(v6)-rock_paper_scissor.html   # Main game page (v6 — latest version)
│
├── scripts/
│   └── rock_paper_sissor.js          # All game logic
│
├── styles/
│   └── Rock_Paper_Scissor.css        # Styling for the game UI
│
└── images/
    ├── rock-emoji.png                # Rock move image
    ├── paper-emoji.png               # Paper move image
    └── scissor-emoji.png             # Scissor move image
```

---

## ⚙️ How It Works

### Game Logic — `rock_paper_sissor.js`

| Function | Purpose |
|----------|---------|
| `gameplay(my_move)` | Called when the player clicks a move button. Compares player's move against computer's pick and determines the result. |
| `comp_pick()` | Generates the computer's random move using `Math.random()`, split into equal thirds for Rock / Paper / Scissor. |
| `updateScore()` | Renders the current Wins / Losses / Ties count to the DOM. |
| `new_game()` | Clears the result and move display (used by the NEW GAME button). |

### Score Persistence — `localStorage`

```js
// Load saved score on page load (defaults to 0 if none exists)
let score = JSON.parse(localStorage.getItem('Score')) || { wins: 0, loses: 0, ties: 0 };

// Save updated score after every round
localStorage.setItem('Score', JSON.stringify(score));

// Reset score on NEW GAME button click
localStorage.removeItem('Score');
```

The score is saved as a JSON string in the browser's `localStorage`, so it **persists across page refreshes** without any backend.

### Computer Move Generation

```js
function comp_pick() {
    const comp = Math.random(); // 0 to 1

    if (comp >= 0 && comp < 1/3)  return 'rock';
    if (comp >= 1/3 && comp < 2/3) return 'paper';
    if (comp >= 2/3 && comp < 1)   return 'scissor';
}
```

Each move has an equal **1 in 3** (≈33.3%) probability — perfectly fair!

---

## ✨ Features

- ✅ **Player vs Computer** gameplay
- ✅ **Persistent score tracking** with `localStorage` (survives page refresh)
- ✅ **Visual move display** — shows both player's and computer's chosen emoji after each round
- ✅ **Instant result feedback** — Win / Lose / Tie message shown immediately
- ✅ **Score reset** — NEW GAME button clears score and localStorage
- ✅ **Dark themed UI** — Clean dark background with white text

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **HTML5** | Game layout and button structure |
| **CSS3** | Dark theme styling, circular move buttons, flex layouts |
| **Vanilla JavaScript** | Game logic, DOM manipulation, `localStorage` |

---

## 🚀 Getting Started

No setup needed — it's a plain static HTML file.

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Rock_Paper_Scissor_Project
   ```

2. **Open in browser**
   ```
   Simply double-click: new(v6)-rock_paper_scissor.html
   ```
   > ✅ No local server required — this project does **not** use ES Modules, so it works straight from `file://`.

---

## 📸 UI Overview

- **Title** — `ROCK PAPER SCISSOR` heading centered at the top
- **Move Buttons** — Three circular dashed-border buttons with emoji images for Rock, Paper, and Scissors
- **Result Display** — Shows outcome (`you won!!!` / `you lose!` / `it's a tie!!`) after each round
- **Move Comparison** — Displays player's emoji vs computer's emoji side by side
- **Score Board** — Live `Wins / Loses / Ties` counter
- **NEW GAME Button** — Resets score and clears the display

---

## 👤 Author

**Abhishek**
Built as a beginner JavaScript project to practise DOM manipulation, event handling, conditional logic, and browser storage using `localStorage`.

---

## 📄 License

This project is for **educational/personal use** only.

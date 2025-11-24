# 🃏 War-Style Card Game

A simple web-based card game built with React, focused on card drawing, comparison, and state management.

## 🚀 Features

* **Deck Management:** A class-based structure for creating, shuffling, and drawing from a standard 52-card deck.
* **Gameplay Loop:** Users draw one card, the opponent draws another, and the higher rank wins the round.
* **Scoring:** Tracks scores for the user and the computer (first to 5 points wins).
* **Visual Feedback:** Displays the cards drawn and a dynamic text message for the result of the round.
* **Responsive UI:** A simple, centered interface for a focused gaming experience.
* **Game Reset:** A button to clear scores, reset the deck, and start a new game.
* **CommandLine Result:** Also implements command-line results as an MVP!

***

## ⚙️ Setup and Installation

Follow these steps to get the project running on your local machine.

### Prerequisites

* Node.js (LTS version recommended)
* npm or yarn

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [Your Repository URL]
    cd [Your Project Directory]
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Run the application:**
    ```bash
    npm start
    # or
    # yarn start


***

## 🕹️ How to Play

1.  Click the card (or the Deck component) to initiate a round.
2.  A card for you and a card for the opponent will be drawn from the deck.
3.  The result text below the cards will instantly show which card was higher and update the score.
4.  The game continues until either the player or the computer reaches 5 points.
5.  Once the game is finished, a "Again?" (Reset) button will appear to start a new game.

***

## Images
<img width="1111" height="620" alt="image" src="https://github.com/user-attachments/assets/b167bea9-518e-4d72-bddf-941293fddb0f" />


## 💻 Tech Stack

* **React:** Frontend library for the user interface.
* **JavaScript (ES6+):** For game logic and state management.
* **CSS/SCSS:** For styling and layout.

***

## ✨ Further Improvements

This section lists potential features, refactors, and styling enhancements for future development:

* **User & Opponent's Card:** Currently, the opponent's card is only shown as data. Implement a visual component to show the opponent's card face-up after the round starts.
* I was in the midst of this but ran out of time, hopefully can create in a future update.
* **Score Display:** Add a persistent score display (e.g., "Player: X | Computer: Y").
* **Animations:** Add subtle card flip or card draw animations for a smoother user experience.
* **Code Refactoring:** Separate complex game logic (e.g., the `playround` function) into smaller, more specialized methods or Hooks.

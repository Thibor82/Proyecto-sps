from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/play/<choice>")
def play(choice):

    options = ["piedra", "papel", "tijera"]
    computer = random.choice(options)

    if choice == computer:
        result = "tie"
    elif (
        (choice == "piedra" and computer == "tijera") or
        (choice == "papel" and computer == "piedra") or
        (choice == "tijera" and computer == "papel")
    ):
        result = "win"
    else:
        result = "lose"

    return {
        "player": choice,
        "computer": computer,
        "result": result
    }

if __name__ == "__main__":
    app.run(debug=True)
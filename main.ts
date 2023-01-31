input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        # . . . #
        # . . . #
        `)
    Rounds += 1
    PlayerA += 1
    UpdateScore()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    Rounds += 1
    Ties += 1
    UpdateScore()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
    Rounds += 1
    PlayerB += 1
    UpdateScore()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    PlayerA = 0
    PlayerB = 0
    Ties = 0
    Rounds = 0
    basic.clearScreen()
    OLED.writeStringNewLine("Play Rock Paper      Scissors?                                 How to Play:         Press A/B to add     score to Player A/B. Press A+B to count a tie. Shake to reset.")
    basic.pause(5000)
    UpdateScore()
}
function UpdateScore () {
    OLED.clear()
    OLED.writeStringNewLine("Player A Score:  " + PlayerA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B Score:  " + PlayerB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds Played: " + Rounds)
    if (Rounds == 20) {
        basic.pause(500)
        if (PlayerA < PlayerB) {
            OLED.clear()
            basic.clearScreen()
            OLED.writeStringNewLine("The Winner is...     Player B!")
            basic.showLeds(`
                . # # . .
                . # . # .
                . # # . .
                . # . # .
                . # # . .
                `)
            basic.pause(5000)
            reset()
        } else if (PlayerB < PlayerA) {
            OLED.clear()
            basic.clearScreen()
            OLED.writeStringNewLine("The Winner is...     Player A!")
            basic.showLeds(`
                . . # . .
                . # . # .
                . # # # .
                # . . . #
                # . . . #
                `)
            basic.pause(5000)
            reset()
        } else {
            OLED.clear()
            basic.clearScreen()
            OLED.writeStringNewLine("Tie Game")
            basic.showLeds(`
                # # # # #
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
            basic.pause(5000)
            reset()
        }
    }
}
let PlayerB = 0
let Ties = 0
let PlayerA = 0
let Rounds = 0
reset()

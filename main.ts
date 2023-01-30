function UpdateScore () {
    OLED.clear()
    OLED.writeStringNewLine("Player A Score:  " + PlayerA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B Score:  " + PlayerB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds Played: " + Rounds)
}
let Rounds = 0
let Ties = 0
let PlayerB = 0
let PlayerA = 0
OLED.init(128, 64)
PlayerA = 0
PlayerB = 0
Ties = 0
Rounds = 0
OLED.writeStringNewLine("Play Rock Paper      Scissors?                                 How to Play:         Press A/B to add     score to Player A/B. Press A+B to count a tie. Shake to reset.")
basic.pause(5000)
UpdateScore()

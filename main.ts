input.onButtonPressed(Button.A, function () {
    Time = 60
    currentscore = 0
    if (Time == 60) {
        OLED.writeString("Game Start!")
        OLED.clear()
    }
    while (Time < 0) {
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            currentscore += 1
            music.playMelody("C5 - - - - - - - ", 120)
        }
        OLED.writeStringNewLine("Score: ")
        OLED.writeNumNewLine(currentscore)
        OLED.writeStringNewLine("Time")
        OLED.writeNumNewLine(Time)
        OLED.clear()
    }
    OLED.clear()
    if (currentscore > 300) {
        OLED.writeString("Perfect game!You have win the big price")
        basic.pause(1000)
        OLED.clear()
        OLED.writeString("Press B putton to get the prise")
        basic.pause(1000)
        if (input.buttonIsPressed(Button.B)) {
            OLED.writeString("You cheated right?")
            basic.pause(5000)
            OLED.clear()
            OLED.writeString("How can you get in 300 balls in 1min?")
            basic.pause(2000)
            OLED.clear()
            OLED.writeString("`Dont even think about the prise!")
            basic.pause(2000)
            OLED.clear()
        }
    }
    if (Highest_score < currentscore) {
        Highest_score = currentscore
        OLED.writeString("Game over")
        basic.pause(1000)
        OLED.clear()
        OLED.writeString("Sponsored By The Big Bang Basketball :))))")
        basic.pause(1000)
        OLED.clear()
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . . . #
            # # # # .
            `)
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            # . . . .
            # . # # #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
        OLED.clear()
        for (let index = 0; index < 4; index++) {
            OLED.writeString("Bingo, you bit the highest score!")
            music.playTone(988, music.beat(BeatFraction.Whole))
            basic.pause(1000)
            OLED.clear()
        }
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        OLED.clear()
        basic.pause(5000)
        OLED.writeString("Good job, you want to try another round? Its free! ")
        basic.pause(2000)
        OLED.clear()
        OLED.writeString("If you want to play anther round, please press A button.")
        basic.pause(2000)
        OLED.clear()
        OLED.writeString("Get 300 point to get the prise!")
        basic.pause(1000)
        OLED.clear()
    } else {
        OLED.writeString("Game over")
        basic.pause(1000)
        OLED.clear()
        OLED.writeString("Sponsored By The Big Bang Basketball :)))) ")
        basic.pause(1000)
        OLED.clear()
        OLED.writeString("Better luck next time.")
        basic.pause(1000)
        OLED.clear()
        music.playMelody("C5 B A G C - - - ", 300)
    }
})
let currentscore = 0
let Time = 0
let Highest_score = 0
OLED.init(128, 64)
Highest_score = 0
OLED.writeNumNewLine(Highest_score)

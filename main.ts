input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(200)
        basic.showIcon(IconNames.Square)
        basic.pause(200)
    }
    rd = randint(1, 6)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    if (rd == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (rd == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
    } else if (rd == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (rd == 4) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # . . . #
            . . . . .
            . . # . .
            `)
    } else if (rd == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
    basic.pause(2000)
    basic.showIcon(IconNames.Skull)
})
let rd = 0
basic.showIcon(IconNames.Heart)
basic.pause(1000)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(500)
basic.showLeds(`
    . . . . .
    . . . # .
    . . . . .
    . # . . .
    . . . . .
    `)
basic.pause(500)
basic.showLeds(`
    # . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . #
    `)
basic.pause(500)
basic.showLeds(`
    . . # . .
    . . . . .
    # . . . #
    . . . . .
    . . # . .
    `)
basic.pause(500)
basic.showLeds(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `)
basic.pause(500)
basic.showLeds(`
    # . . . #
    . . . . .
    # . . . #
    . . . . .
    # . . . #
    `)
basic.pause(1000)
basic.showIcon(IconNames.Skull)
basic.forever(function () {
	
})

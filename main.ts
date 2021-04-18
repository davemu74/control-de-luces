basic.forever(function () {
    if (input.lightLevel() >= 50) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        basic.showLeds(`
            . . # # .
            . # # . .
            . # # . .
            . # # . .
            . . # # .
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})

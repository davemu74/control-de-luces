def on_forever():
    if input.light_level() >= 50:
        basic.show_leds("""
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            """)
        pins.digital_write_pin(DigitalPin.P0, 0)
    else:
        basic.show_leds("""
            . . # # .
            . # # . .
            # # # . .
            . # # . .
            . . # # .
            """)
        pins.digital_write_pin(DigitalPin.P0, 1)
basic.forever(on_forever)

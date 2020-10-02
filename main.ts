// Created by Vaughn Hatherall
// Created on October 1 2020
// 
// This program detects how far something is
// 
let strip: neopixel.Strip = null
let distance = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showString("" + (distance))
    basic.pause(500)
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
})

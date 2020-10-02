// Created by Vaughn Hatherall
// Created on October 1 2020
// 
// This program detects how far something is
// 
let strip: neopixel.Strip = null
let distance = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showString("" + (distance))
    basic.pause(500)
    if (distance < 2) {
        strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (distance > 5) {
        strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (distance == 2) {
        strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    if (distance == 3) {
        strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    if (distance == 4) {
        strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
})

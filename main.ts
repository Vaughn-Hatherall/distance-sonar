let distance = 0
let strip: neopixel.Strip = null
basic.forever(function () {
    if (distance > 24) {
        robotbit.MotorRun(robotbit.Motors.M2B, 78)
        basic.pause(1000)
        robotbit.MotorStop(robotbit.Motors.M2B)
    }
})
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Inches
    )
    basic.showString("" + (distance))
    basic.pause(200)
    if (distance > 2) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    if (distance > 4) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    if (distance > 6) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    if (distance > 8) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    if (distance > 10) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    if (distance > 12) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    if (distance > 14) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    if (distance > 16) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    if (distance > 18) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    if (distance > 20) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(20, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    if (distance > 22) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(20, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(21, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(22, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    if (distance > 24) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(20, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(21, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(22, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(23, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(24, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})

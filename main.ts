let x = 90
let y = 90
let t = 90
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
servos.P0.setRange(0, 180)
servos.P1.setRange(0, 180)
servos.P0.setAngle(90)
servos.P1.setAngle(90)
basic.forever(function () {
    while (pins.digitalReadPin(DigitalPin.P8) == 0) {
        basic.pause(100)
        servos.P0.setAngle(x)
        servos.P1.setAngle(y)
        t = pins.map(
        pins.analogReadPin(AnalogPin.P2),
        0,
        1023,
        180,
        0
        )
        if (t < 80) {
            if (x >= 2) {
                x = x - 2
            }
            servos.P0.setAngle(x)
        }
        if (t > 100) {
            if (x <= 178) {
                x = x + 2
            }
            servos.P0.setAngle(x)
        }
        t = pins.map(
        pins.analogReadPin(AnalogPin.P4),
        0,
        1023,
        180,
        0
        )
        if (t < 80) {
            if (y >= 2) {
                y = y - 2
            }
            servos.P1.setAngle(y)
        }
        if (t > 100) {
            if (y <= 178) {
                y = y + 2
            }
            servos.P1.setAngle(y)
        }
    }
})

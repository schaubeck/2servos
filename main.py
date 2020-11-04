servos.P0.set_pulse(1500)
servos.P0.set_range(0, 180)
servos.P1.set_range(0, 180)
servos.P0.set_angle(90)
servos.P1.set_angle(90)

def on_forever():
    servos.P0.set_angle(39)
    servos.P1.set_angle(pins.map(pins.analog_read_pin(AnalogPin.P4), 0, 1023, 180, 0))
    # servos.P1.setAngle(servos.P1.Angle--)
    if pins.map(pins.analog_read_pin(AnalogPin.P4), 0, 1023, 180, 0) < 70:
        pass
    else:
        servos.P1.Angle + 1
basic.forever(on_forever)

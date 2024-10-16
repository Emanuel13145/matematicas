let temperatura = 0
basic.forever(function () {
    temperatura = pins.analogReadPin(AnalogReadWritePin.P1)
    basic.showNumber(temperatura)
    serial.writeValue("temperatura", temperatura)
    serial.redirectToUSB()
    if (temperatura >= 35) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showIcon(IconNames.Sad)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showIcon(IconNames.Happy)
    }
})

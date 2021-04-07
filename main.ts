input.onButtonPressed(Button.A, function () {
    temperatureData = input.temperature()
    lightData = input.lightLevel()
    radio.sendValue("alexander", temperatureData)
    radio.sendValue("Grp03lgt", lightData)
})
let lightData = 0
let temperatureData = 0
radio.setGroup(1)

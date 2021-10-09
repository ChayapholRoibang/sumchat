enum RadioMessage {
    message1 = 49434,
    message2 = 1435,
    message3 = 31126,
    message4 = 29926,
    message5 = 42976,
    message6 = 19755,
    message7 = 8929,
    message8 = 25329,
    message9 = 19017,
    message10 = 33660
}
radio.onReceivedMessage(RadioMessage.message4, function () {
    basic.showString("555")
})
radio.onReceivedMessage(RadioMessage.message7, function () {
    basic.showString("Love You")
})
radio.onReceivedMessage(RadioMessage.message3, function () {
    basic.showString("Love")
})
input.onButtonPressed(Button.A, function () {
    chat = randint(1, 10)
})
radio.onReceivedMessage(RadioMessage.message6, function () {
    basic.showString("OK!")
})
radio.onReceivedMessage(RadioMessage.message5, function () {
    basic.showString("You")
})
radio.onReceivedMessage(RadioMessage.message8, function () {
    basic.showString("Hello")
})
radio.onReceivedMessage(RadioMessage.message9, function () {
    basic.showString("Bye")
})
radio.onReceivedMessage(RadioMessage.message10, function () {
    basic.showString("Good Bye")
})
radio.onReceivedMessage(RadioMessage.message2, function () {
    basic.showString("OK!")
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showString("Hello!")
})
let chat = 0
basic.showString("Click A To Chat")
basic.forever(function () {
    if (chat == 1) {
        radio.sendMessage(RadioMessage.message1)
    } else if (chat == 2) {
        radio.sendMessage(RadioMessage.message2)
    } else if (chat == 3) {
        radio.sendMessage(RadioMessage.message3)
    } else if (chat == 4) {
        radio.sendMessage(RadioMessage.message4)
    } else if (chat == 5) {
        radio.sendMessage(RadioMessage.message5)
    } else if (chat == 6) {
        radio.sendMessage(RadioMessage.message6)
    } else if (chat == 7) {
        radio.sendMessage(RadioMessage.message7)
    } else if (chat == 8) {
        radio.sendMessage(RadioMessage.message8)
    } else if (chat == 9) {
        radio.sendMessage(RadioMessage.message9)
    } else if (chat == 10) {
        radio.sendMessage(RadioMessage.message10)
    }
})

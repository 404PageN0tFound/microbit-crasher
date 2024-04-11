let random = 0
basic.forever(function () {
    random += 1
    datalogger.log(datalogger.createCV("Addition", random + random))
    datalogger.log(datalogger.createCV("Subtraction", random - random))
    datalogger.log(datalogger.createCV("Times", random * random))
    datalogger.log(datalogger.createCV("Division", random / random))
    datalogger.log(datalogger.createCV("Double", random ** random))
    datalogger.log(datalogger.createCV("Square Root", Math.sqrt(random)))
})

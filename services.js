 // JavaScript function to open a new page for Bed Availability
 function openBedAvailability() {
    // Replace with the actual URL of the Bed Availability page
    window.open('requirementsPg.html', '_blank');
    // app.js

const express = require('express')
const bodyParser = require('body-parser')
const patients = [{
    name: 'Aditya',
    number: '8175826846',
    dob: '29/09/2001',
    city: 'Mirzapur',
    roomNo: '1',
}]

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/", function (req, res) {
    res.render("home", {
        data: patients
    })
})

app.listen(3000, (req, res) => {
    console.log("App is running on port 3000")
})

}
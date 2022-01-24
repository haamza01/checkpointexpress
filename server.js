

const express = require('express')
const app = express()
const port = 5000

const middleware = (req, res, next) => {
    let date = new Date();

    
    if((date.getHours()<=9 || date.getHours() >=17) || (date.getDay()==6 || date.getDay()==0)) {return res.send('Come Back Later')}
    next()
}


app.use(middleware)



app.get('/contactus', (req, res) => {
    res.sendFile(__dirname + '/public/ContactUs.html')
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/HomePage.html')
})
app.get('/ourservice', (req, res) => {
    res.sendFile(__dirname + '/public/OurService.html')
})
app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname + '/public/styles.css')
})



app.listen(port, () => console.log(`port is running on LocalHost : ${port}`))
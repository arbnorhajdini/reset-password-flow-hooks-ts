const express = require('express')()
const app = express;
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require("nodemailer")
const hbs = require('nodemailer-express-handlebars')
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())

const portRoute = require('./routes/users')

app.use('/users', portRoute)

app.post('/mail', async (req, res) => {
  const { email, language } = req.body
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    auth: {
      user: 'summer.batz43@ethereal.email',
      pass: '3cBSuRmss1THuCPeRF'
    }
  })

  transporter.use('compile', hbs({
    viewEngine: 'express-handlebars',
    viewPath:'./views/layouts'
  }))

  const msg = {
    from: '"The Keleya App" <ArbnorHajdini@keleya.de>',
    to: `${email}`,
    subject: language === 'en' ? "Reset Password": "Password zurücksetzen",
    template: language === 'en' ? 'english' : 'german'
  }

  const info = await transporter.sendMail(msg)
  res.json(nodemailer.getTestMessageUrl(info))
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })

app.listen(process.env.PORT || 3000)

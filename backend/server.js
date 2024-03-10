const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const {User} = require('./models.js')
const routes = require('./routes')




const app = express()
const port = 8550

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



mongoose.connect('mongodb+srv://valerio:valerio@cluster0.cclrdmg.mongodb.net/real-estate-app').then(() => {
    console.log('Connected to MongoDB')
}).catch((error) => {
    console.log('Error connecting to MongoDB', error)
})

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})


const sendVerificationEmail = async(email, verificationToken) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'zherdvaleriy@gmail.com',
            pass: 'mris orwq pjgc zlyw'
        }
    }) 
    const mailOptions = {
        from: 'real-estate-app',
        to: email,
        subject: 'Email verification',
        text: `Please click the following link to verify your email: http://localhost:8550/verify/${verificationToken}`
    }
    try {
      await transporter.sendMail(mailOptions)
    
    } catch (error) {
       console.log('Error sending verification email', error) 
    }
}




app.post('/register', async (req,res) => {
    try {
      const {name, email, password} = req.body

      const existingUser = await User.findOne({email: email})
      if (existingUser) {
        return res.status(400).json({message: 'Email already registered'})
      }

      const newUser = new User({name, email, password})

      newUser.verificationToken = crypto.randomBytes(20).toString('hex')

      await newUser.save()

      sendVerificationEmail(newUser.email, newUser.verificationToken)

      res.status(201).json({message: 'User registered successfully. Verification email sent.'})
        
    } catch (error) {
        console.log('Error registering an user ', error)
        res.status(500).json({message: 'Registration failed'})
    }
})

//verifying token
app.get('/verify/:token', async (req,res) => {
   try {
     const token = req.params.token

    const user = await User.findOne({verificationToken: token})

    if(!user){
       return res.status(404).json({message: 'Invalid verification token'}) 
    }

    user.verified = true
    user.verificationToken = undefined

    await user.save()
    res.status(200).json({message: 'Email verified successfully'})

   } catch (error) {
     res.status(500).json({message: 'Email Verification failed', error})
   }
})



const generateSecretKey = () => {
   const secretKey = crypto.randomBytes(32).toString('hex')
   return secretKey
}
const secretKey = generateSecretKey()


app.post('/login', async(req, res) => {
    try {
      const {email, password} = req.body
      const user = await User.findOne({email})

      if(!user){
        return res.status(401).json({message: 'Invalid email or password'})
      }
      if(user.password !== password){
        return res.status(401).json({message: 'Invalid password'})
      }

      const token = jwt.sign({userId: user._id}, secretKey)
      res.status(200).json({token})
        
    } catch (error) {
        res.status(500).json({message: 'Login failed!'})
    }
})

app.use('/', routes)
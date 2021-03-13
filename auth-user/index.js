const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const cors = require('cors')



const app = express()
const SECRETKEY = "12345"
app.use(bodyParser.json())
app.use(cors())

const verifyToken = (req, res, next) => {
    // getting token from the header
    const bearer = req.headers["authorization"]
    if(bearer) {
        const bearerToken = bearer.split(" ")
        const token = bearerToken[1]

        jwt.verify(token, SECRETKEY, (err, data) => {
            if(err) {
                res.sendStatus(403)
            }else{
                req.userData = data
                next()
            }
        })
    }else {
        res.sendStatus(403)
    }
}

app.post("/delete-user", verifyToken, (req, res) => {
        // next() in line 22 sends to this block
        console.log("userData in block 2", res.userData)
        res.send("user deleted")
})

app.post("/login", (req, res) => {
    console.log(req.body)
    // check for users
    const {username , password} = req.body

   // auth database
   if(username === "ram" && password=== "123" ) {
    const users = {
        username,
       
        age: 24
    }
    //  asign users object in jwt.sign also use SECRETKEY
    jwt.sign({users}, SECRETKEY, (err, token) => {
        if(err) {
            res.sendStatus(403)
        }else{
            res.json({
                token
            })
        }
    })
   
   
   } else{
       res.sendStatus(403)
   } 

  
})

app.listen(8080, () => {
    console.log('sucessfull')
})

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6eyJ1c2VybmFtZSI6InJhbSIsImFnZSI6MjR9LCJpYXQiOjE2MTU2MzM1NjR9.nBbDtWz5W7w6TeL31PEYU7MvWAcvAXmlEKP-v5x74dI
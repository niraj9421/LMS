import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

//Initialize express

const app = express()

//Middleware
app.use(cors())

//Connect To db
await connectDB()

// Route
app.get('/' , (req, res)=>res.send("API Working") )

app.post('/clerk', express.raw({ type: 'application/json' }), clerkWebhooks);



//Port
const PORT = process.env.PORT || 5000

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})
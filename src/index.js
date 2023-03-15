const express = require('express')
const app = express()
const userRoutes = require('./routes/users.routes')
const balanceRoutes = require('./routes/balance.routes')
const cors = require('cors')
const connectDB = require('./config/db')

require('dotenv').config()
connectDB()

app.use(cors())
app.use(express.json())

//3. Rutas
app.use('/usuario', userRoutes)
app.use('/balance', balanceRoutes)
app.get('/', (req, res) => res.send('UCAMP API'))

// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log(`El servidor está corriendo en ${process.env.PORT}`)
})

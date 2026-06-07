const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

const app = express()
app.use(cors())
app.use(express.json())

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'PVSP backend is running!' })
})

// Get all vendors
app.get('/vendors', async (req, res) => {
  const { data, error } = await supabase.from('vendors').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running on port ${process.env.PORT || 8080}`)
})

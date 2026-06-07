const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

const app = express()
app.use(cors())
app.use(express.json())

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

app.get('/', (req, res) => {
  res.json({ message: 'PVSP backend is running!' })
})

app.get('/vendors', async (req, res) => {
  const { data, error } = await supabase.from('vendors').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

app.get('/contracts', async (req, res) => {
  const { data, error } = await supabase.from('contracts').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

app.get('/tasks', async (req, res) => {
  const { data, error } = await supabase.from('tasks').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

app.get('/risks', async (req, res) => {
  const { data, error } = await supabase.from('risks').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

app.get('/documents', async (req, res) => {
  const { data, error } = await supabase.from('documents').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

app.get('/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running on port ' + (process.env.PORT || 8080))
})

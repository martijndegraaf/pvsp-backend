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

// Vendors
app.get('/vendors', async (req, res) => {
  const { data, error } = await supabase.from('vendors').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})
app.post('/vendors', async (req, res) => {
  const { data, error } = await supabase.from('vendors').insert(req.body).select()
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

// Contracts
app.get('/contracts', async (req, res) => {
  const { data, error } = await supabase.from('contracts').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})
app.post('/contracts', async (req, res) => {
  const { data, error } = await supabase.from('contracts').insert(req.body).select()
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

// Tasks
app.get('/tasks', async (req, res) => {
  const { data, error } = await supabase.from('tasks').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})
app.post('/tasks', async (req, res) => {
  const { data, error } = await supabase.from('tasks').insert(req.body).select()
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

// Risks
app.get('/risks', async (req, res) => {
  const { data, error } = await supabase.from('risks').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})
app.post('/risks', async (req, res) => {
  const { data, error } = await supabase.from('risks').insert(req.body).select()
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

// Documents
app.get('/documents', async (req, res) => {
  const { data, error } = await supabase.from('documents').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})
app.post('/documents', async (req, res) => {
  const { data, error } = await supabase.from('documents').insert(req.body).select()
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

// Users
app.get('/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running on port ${process.env.PORT || 8080}`)
}const express = require('express')
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

// Vendors
app.get('/vendors', async (req, res) => {
  const { data, error } = await supabase.from('vendors').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})
app.post('/vendors', async (req, res) => {
  const { data, error } = await supabase.from('vendors').insert(req.body).select()
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

// Contracts
app.get('/contracts', async (req, res) => {
  const { data, error } = await supabase.from('contracts').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})
app.post('/contracts', async (req, res) => {
  const { data, error } = await supabase.from('contracts').insert(req.body).select()
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

// Tasks
app.get('/tasks', async (req, res) => {
  const { data, error } = await supabase.from('tasks').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})
app.post('/tasks', async (req, res) => {
  const { data, error } = await supabase.from('tasks').insert(req.body).select()
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

// Risks
app.get('/risks', async (req, res) => {
  const { data, error } = await supabase.from('risks').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})
app.post('/risks', async (req, res) => {
  const { data, error } = await supabase.from('risks').insert(req.body).select()
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

// Documents
app.get('/documents', async (req, res) => {
  const { data, error } = await supabase.from('documents').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})
app.post('/documents', async (req, res) => {
  const { data, error } = await supabase.from('documents').insert(req.body).select()
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

// Users
app.get('/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running on port ${process.env.PORT || 8080}`)
})const express = require('express')
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

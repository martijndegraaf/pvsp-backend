const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

const app = express()
app.use(cors({
  origin: [
    'https://it-contract-vendor-management.onrender.com',
    'http://localhost:3000',
    'http://localhost:8080'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

// Admin client with service role key — only for privileged operations
const supabaseAdmin = process.env.SUPABASE_SERVICE_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
  : null

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

// Global app data — shared across all users
app.get('/data', async (req, res) => {
  if (!supabaseAdmin) return res.status(500).json({ error: 'Service key not configured' })
  const { data, error } = await supabaseAdmin
    .from('pvsp_global_data')
    .select('data, updated_at')
    .eq('id', 1)
    .single()
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

app.put('/data', async (req, res) => {
  if (!supabaseAdmin) return res.status(500).json({ error: 'Service key not configured' })
  const payload = req.body
  if (!payload) return res.status(400).json({ error: 'No data provided' })
  const { error } = await supabaseAdmin
    .from('pvsp_global_data')
    .update({ data: payload, updated_at: new Date().toISOString() })
    .eq('id', 1)
  if (error) return res.status(500).json({ error: error.message })
  res.json({ message: 'Data saved' })
})

// Invite a new user — sends Supabase invite email so they can set their own password
app.post('/invite-user', async (req, res) => {
  if (!supabaseAdmin) return res.status(500).json({ error: 'SUPABASE_SERVICE_KEY not configured on server' })
  const { email, name, role } = req.body
  if (!email) return res.status(400).json({ error: 'Email is required' })

  const { data, error } = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
    data: { name, role }
  })

  if (error) return res.status(400).json({ error: error.message })
  res.json({ message: 'Invitation sent to ' + email, user: data.user })
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running on port ' + (process.env.PORT || 8080))
})

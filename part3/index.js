const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))
app.use(cors())
app.use(express.static('dist'))


let phonebook = [
        { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
        },
        { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
        },
        { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
        },
        { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
        }
    ]

morgan.token('data', function (req, res) { return JSON.stringify(req.body) })

  app.get('/api/persons', (request, response) => {
    response.json(phonebook)
  })

  app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${phonebook.length} people</p><p>${new Date()}</p>`)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const phone = phonebook.find(phone => phone.id === id)
   
    if (phone) {
        response.json(phone)
      } else {
        response.status(404).end()
      }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    phonebook = phonebook.filter(phone => phone.id !== id)
  
    response.status(204).end()
  })

  const generateId = () => {
    const maxId = phonebook.length > 0
      ? Math.max(...phonebook.map(n => n.id))
      : 0
    return maxId + 1
  }
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.name) {
        return response.status(400).json({ 
            error: 'name missing' 
        })
    }
    else if (!body.number){
        return response.status(400).json({ 
            error: 'number missing' 
        })
    }
    else if (phonebook.map(phone => phone.name).includes(body.name)){
        return response.status(400).json({ 
            error: 'name must be unique' 
        })
    }

    const phone = {
      id: generateId(),
      name: body.name,
      number: body.number
    }
    
    phonebook = phonebook.concat(phone)
    response.json(phone)
  })
  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
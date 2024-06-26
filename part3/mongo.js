const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://GanmaZ:${password}@cluster0.k02qv1a.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String, 
    number: String,
})

const Person = mongoose.model('Person', personSchema)

// const person = new Person({
//   name: 'ganma',
//   number: '987421-4577',
// })

// person.save().then(result => {
//   console.log('person saved!')
//   mongoose.connection.close()
// })

Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
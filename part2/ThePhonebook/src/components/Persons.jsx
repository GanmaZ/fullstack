import Phone from './Phone'

const Persons = ({showFilter, persons}) => {
    
    return(
        <>
        {showFilter.length === 0 ? persons.map(person => <Phone key={person.name} phone={person}/>) : showFilter.map(person => <Phone key={person.name} phone={person}/>)}
        </>
    )
}

export default Persons
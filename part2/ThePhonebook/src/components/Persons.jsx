import Phone from './Phone'

const Persons = ({showFilter, persons, deletePerson}) => {
    
    return(
        <>
        {showFilter.length === 0 ? 
        persons.map(person => <Phone key={person.name} phone={person} deletePerson={deletePerson}/>) 
        : 
        showFilter.map(person => <Phone key={person.name} phone={person} deletePerson={deletePerson}/>)}
        </>
    )
}

export default Persons
const PersonForm = ({addPerson, nameChangeHandler , numberChangeHandler, newName, newNumber}) => {
 
    return(
        <form onSubmit={addPerson}>
            <div>
            name: 
            <input 
                value={newName} 
                onChange={nameChangeHandler}          
            />
            </div>
            <div>
            number: 
                <input 
                value={newNumber} 
                onChange={numberChangeHandler}          
                />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm
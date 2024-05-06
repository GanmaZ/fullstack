const Filter = ({filterChangeHandler}) => {

    return(
        <div>
        filter show with: 
            <input 
                onChange={filterChangeHandler}          
            />
        </div>
    )
}

export default  Filter
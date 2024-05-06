const Phone = ({ phone, deletePerson }) => {
    return (
      <>
      <p className="person" >{phone.name} {phone.number} <button onClick={() => deletePerson(phone)}>delete</button></p>
      </>
    )
  }
  
  export default Phone
const Phone = ({ phone, deletePerson }) => {
    return (
      <>
      <p>{phone.name} {phone.number} <button onClick={() => deletePerson(phone)}>delete</button></p>
      </>
    )
  }
  
  export default Phone
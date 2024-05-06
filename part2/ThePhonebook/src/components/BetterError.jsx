const Notification = ({ error, success }) => {
    if (error === null && success === null) {
      return null
    }if(success !== null){
      return <div className="success">{success}</div>
    } 
  
    return (
        <div className="error">
          {error}
        </div>
    )
  }
  export default Notification
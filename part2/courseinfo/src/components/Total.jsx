const Total = ({parts}) => {
    return(
      <h3>Total of {parts.map(amount => amount.exercises).reduce((sum, order) => sum + order, 0)} exercises </h3>
    ) 
  }
  export default Total
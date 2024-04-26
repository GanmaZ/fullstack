const Header = ({courses}) => {
    return(
      <>
        {<h1 key={courses.id}>{courses.name}</h1>}
      </>
    )
  }
  export default Header

  //{parts.map(part => <p key={part.id}> {part.name} {part.exercises}</p>)}
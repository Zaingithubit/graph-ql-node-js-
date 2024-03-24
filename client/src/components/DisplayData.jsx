import {useQuery , gql, useLazyQuery} from "@apollo/client"
import { useState } from "react"
const Get_All_Users= gql`
query GetAllUsers{
  users {
  name 
  userName
  age
  nationality

}
}
`
const Get_All_Movies= gql`
query GetAllMovies{
  movies {
  name 
  yearOfPublication
}
}
`
const Get_Single_Movie= gql`
query GetSingleMovie($name: String!) {
  movie(name: $name) {
   name 
  } 
  }

`
const DisplayData = () => {
  const [searchMovie , setSearchMovie]=useState("")
  const {data}= useQuery( Get_All_Users)
  const {data : movieData}= useQuery( Get_All_Movies)
  const [fetchMovie, {data:serachMovieData ,error:movieError }]= useLazyQuery(Get_Single_Movie)
  if (data){
    console.log(data)
  }
  return (
    <div>
      {data && data.users.map(user =>{
        return  <div key={user.id}>
          <h3>Name : {user.name}</h3> 
          <h3>User-Name : {user.userName}</h3> 
          <h3>Age : {user.age}</h3> 
          <h3>Nationality : {user.nationality}</h3> 

        </div>
      })}

    <h2>Movie data</h2>
      { movieData &&  movieData.movies.map(movie =>{
        return  <div key={movie.id}>
          <h3>Name : {movie.name} , Year of Publition:{movie.yearOfPublication}</h3> 
         
        </div>
      })}

     
      <div className="SearchByMovie"> <h1>Search by single movie</h1>
      <input type="text" placeholder="enter the movie name " onChange={(event)=>setSearchMovie(event.target.value)}/>
      <button onClick={()=>{fetchMovie({variables:{
        name :searchMovie
      }})}}>Fetch Data</button>
      <div>
        <h1>{serachMovieData && serachMovieData.movie.name}</h1>
        {movieError && <h1>movie is not found</h1>}
      </div>
      </div>


    </div>
  )
}

export default DisplayData

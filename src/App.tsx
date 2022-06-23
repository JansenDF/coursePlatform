import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

  const GET_LESSONS_QUERY = gql `
    query {
      lessons {
        id
        title
        teacher {
          name
        }
      }
    }
  `
function App() {

  const { data } = useQuery(GET_LESSONS_QUERY)
  console.log(data)

  interface Lesson {
    id: string;
    title: string
  }

  return (
    <ul>
      {data?.lessons.map(
        (lesson: Lesson) => {
          return(
            <li key={lesson.id}>{lesson.title}</li>
          )
        }
      )}
    </ul>  
  )
}

export default App

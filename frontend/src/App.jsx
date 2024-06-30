import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the jokes:", error);
      });
  }, []);

  return (
    <div>
      <h2>Full Stack</h2>
      <p>Jokes : {jokes.length}</p>

      {
        //  In this way we need to return things
      }
      {jokes?.map((joke, index) => {
        return (
          <div key={joke?.id}>
            <h3>{joke?.author}</h3>
            <p>{joke?.description}</p>
          </div>
        );
      })}

      {
        //  In this way we don't need to return things
      }
      {jokes?.map((joke, index) => (
        <div key={joke?.id}>
          <h3>{joke?.author}</h3>
          <p>{joke?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

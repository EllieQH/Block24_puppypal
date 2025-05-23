import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";
import "./index.css";
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [count, setCount] = useState(0);
  console.log(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
console.log (featuredPup)

  return (
    <div>
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}
      <hr />
  
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

    </div>
  );
}

export default App;

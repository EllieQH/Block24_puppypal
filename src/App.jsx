import { useState } from "react";
import { puppyList } from "./data";


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [count, setCount] = useState(0);
  console.log(puppyList);
  const [featPupId, setFeatPupId] = useState(null)

  return (
    <div>
      {puppies.map((puppy) => {
        return <p onClick={()=> {console.log ("puppy id: ", puppy.id )}} key={puppy.id}> {puppy.name} <br/> {puppy.age} </p>;
      })}
    </div>
  );
}

export default App;

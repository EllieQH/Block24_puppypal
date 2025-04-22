import { useState } from "react";
import { puppyList } from "./data";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [count, setCount] = useState(0);
  console.log(puppyList);
  return (
    <div>
      {puppies.map((puppy) => {
        return <p>{puppy.name}</p>;
      })}
    </div>
  );
}

export default App;

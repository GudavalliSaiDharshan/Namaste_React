import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className="user-card">
      <h1>
        <span>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </span>
        Count = {count}
        <span>
          <button onClick={() => setCount(count - 1)} disabled={count === 0}>
            Decrement
          </button>
        </span>
      </h1>
      <h1>
        <span>
          <button onClick={() => setCount2(count2 + 1)}>Increment</button>
        </span>
        Count2 = {count2}
        <span>
          <button onClick={() => setCount2(count2 - 1)} disabled={count2 === 0}>
            Decrement
          </button>
        </span>
      </h1>
      <h2>Name: {name}</h2>
      <h3>Location: Chennai</h3>
      <h4>Contact: @gudavalli</h4>
    </div>
  );
};

export default User;

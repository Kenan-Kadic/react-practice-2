import React, { useState } from "react";
import useFetch from './useFetch';

const App = () => {

   const [count, setCount] = useState(0);    

   const { data } = useFetch();
   const { results } = data || []; 

return (
    <div className="App">
        <h1>Hello Everyone</h1>
        <button onClick={() => setCount(count+1)}>Increase Count</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count-1)}>Decrease Count</button>
        
        {results && 
        results.map((user) => {
            console.log('USER OBJECT:', user);
            return (
                <ul key = {user.id.value}>
                    <li>{user.name.first}</li>
                    <li>{user.gender}</li>
                    <li>{user.email}</li>
                    <li>
                        <img src = {data.results[0].picture.medium} alt='random user'/>                        
                    </li>
                </ul>
            );
        })}
    </div>
);
};

export default App
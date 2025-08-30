

import { useState } from "react";

function Apitest() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const testLogin = async () => {
    try {
      const response = await fetch("https://task-79s6.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
       
      });

      const data = await response.json();
      console.log("API response:", data);
      alert(JSON.stringify(data));  // show result in popup
    } catch (error) {
      console.error("Error testing API:", error);
    }
  };

  return (
    <div>
      <h1>Test Teacher’s API</h1>
      <input 
        placeholder="Username" 
        value={username} 
        onChange={e => setUsername(e.target.value)} 
      />
      <input 
        placeholder="Password" 
        type="password"
        value={password} 
        onChange={e => setPassword(e.target.value)} 
      />
      <button onClick={testLogin}>Test API</button>
    </div>
  );
}

export default Apitest;
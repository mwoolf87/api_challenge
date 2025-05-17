import { useState } from "react";

function App() {
  // Client ID: 6559f30c7223439cb3a0d69bf9a8db82 Client Secret: 4ceef2a1dcdb44edab46deb55e5cffcc
  const [searchTerm, setSearchTerm] = useState("");

  const clickHandler = async () => {
    try {
      const res = await fetch(
        `https://platform.fatsecret.com/rest/foods/search/v3?&search_expression=${searchTerm}&max_results=3&region=US&format=json`
      );

      const data = await res.json();
      console.log(searchTerm);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome to my App</h1>
      <input
        type="text"
        placeholder="Search for your favorite food!"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={clickHandler}>Search</button>
    </div>
  );
}

export default App;

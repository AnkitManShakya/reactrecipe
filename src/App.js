import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from "./Recipe"

function App() {

  const APP_ID = 'ad2decf6';
  const APP_KEY = '1e0ff461a7d75043bff28a84d6c3cc7e';

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
      getRecipies()
  }, [query])

  const updateSearch = (e) =>{
    setSearch(e.target.value)
  }

  const getSearch = (e) =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  const getRecipies = async () =>{
    const data = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`).
    then(response => response.json())
    setRecipies(data.hits)
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button" >Search</button>
      </form>
      {recipies.map(recipe =>(
        <Recipe 
          key={recipe.recipe.title}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
      ) )}
    </div>
  );
}

export default App;

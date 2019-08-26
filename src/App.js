import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

const App = () => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => setUrl(res.data.url))
      .catch(err => console.log(err));

  }, []);


  return (
    <div className="App">
      <img src={url} alt="nasa pic"/>
    </div>
  );
}

export default App;

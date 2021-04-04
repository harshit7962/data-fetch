import './App.css';
import DataFetch from './Components/DataFetch';
<script src="https://kit.fontawesome.com/e3f169f2ea.js" crossorigin="anonymous"></script>

function App() {
  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png" alt="VIT-Logo" className="img"></img>
      <DataFetch/>
      <div className="description">
        <div>This is a Data Fetching code which fetches the data from a website <a href="https://jsonplaceholder.typicode.com/">Json-Placeholder</a>.</div>
        <div>This website contains an array of dummy data which we are trying to fetch and print.</div>
        <div>The input field takes any integer from 1 to 100 and print the text corresponding to that index.</div>
      </div>
      <div className = "footer">Made with ❤️ by Harshit Mishra (19BCE0799)</div>
      
    </div>
  );
}

export default App;

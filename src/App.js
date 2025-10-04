import './App.css';

function App() {
  const handleClick = () => {
    alert('Hello from the blurry world! 🌫️');
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Blur circles */}
        <div className="blur-circle"></div>
        <div className="blur-circle"></div>
        <div className="blur-circle"></div>
        
        {/* Content */}
        <h1>Hello, World!</h1>
        <p>Welcome to the blur dimension!</p>
        <button className="hello-button" onClick={handleClick}>
          Click Me!
        </button>
      </header>
    </div>
  );
}

export default App;
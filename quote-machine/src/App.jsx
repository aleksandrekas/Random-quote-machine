import QuoteBox from "./components/QuoteBox"

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
}



function App() {



  return (
    <div style={{background:"purple"}} className="container">
      <QuoteBox color={"purple"} />
    </div>
  )
}

export default App

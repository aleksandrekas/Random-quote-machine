import QuoteBox from "./components/QuoteBox"
import { useEffect, useState } from "react";

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
}



function App() {
  const [color,setColor] = useState("purple")



  return (
    <div style={{background:color}} className="container">
      <QuoteBox color={color} />
    </div>
  )
}

export default App

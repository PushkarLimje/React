import { useState } from "react";

function App() {
  const [color, setColor] = useState("skyblue");

  return (<>
    <br />
    <body className="flex flex-col " 
          style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-5 px-2 gap-10 rounded-full shadow-2xl" 
          style={{backgroundColor:"black", padding:'10px', borderStyle:'2px dashed  white'}}>
        <button onClick ={()=>setColor("red")} type="button" style={{backgroundColor:"red",color: "black"}}>red</button>

        <button  onClick ={()=>setColor("yellow")}type="button"style={{backgroundColor:"yellow",color: "black"}}>yellow</button>

        <button onClick ={()=>setColor("blue")} type="button"style={{backgroundColor:"blue",color: "black"}}>blue</button>

        <button  onClick ={()=>setColor("green")} type="button"style={{backgroundColor:"green",color: "black"}}>green</button>

        <button  onClick ={()=>setColor("white")}type="button"style={{backgroundColor:"white",color: "black"}}>white</button>

        <button onClick ={()=>setColor("black")}type="button"style={{backgroundColor:"black", borderColor:"white"}}>black</button>

        <button onClick ={()=>setColor("grey")}type="button"style={{backgroundColor:"grey",color: "black"}}>grey</button>

        <button onClick ={()=>setColor("magenta")}type="button"style={{backgroundColor:"magenta", borderColor:"white",color: "black"}}>magenta</button>

      </div>
    </body>
    </>
  )
}

export default App;

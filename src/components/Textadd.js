import React ,{ useState }from 'react'



export default function Textadd(props){
    const [text, settext] = useState('');
    const handleUpClick= ()=> {
        console.log("It is clicked");
        let newText=text.toUpperCase();
        settext(newText)
    }
    const handleLoClick= ()=> {
        console.log("It is clicked");
        let newText=text.toLowerCase();
        settext(newText)
    }
   const handleOnChange= (event)=> {
    console.log("It is not clicked");
    settext(event.target.value)
   }
//    const clearText= (event)=> {
//     console.log("It is not clicked");
//     settext(event.target.value)
//    }
   const handleCopy= (event)=> {
    console.log("It is not clicked");
    var text=document.getElementById('myBox');
    text.select();
    text.SelectionRange(0,999);
    navigator.clipboard.writeText(text.value);
   }
   
    return(
        <>
             <div className="container " style={{color:props.mode==='dark'?'white':'dark'}} >
                 <h1 >{props.heading}</h1>
                  <div className="mb-3">    
                     <textarea className="form-control" id="hello" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} onChange={handleOnChange} rows="8"></textarea>
                    </div>
                        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Click here for Uppercase</button>
                        <button className="btn btn-secondary mx-1" onClick={handleLoClick}>Click here for Lowercase</button>
                        {/* <button className="btn btn-secondary mx-1" onClick={handlet}>Clear Text</button> */}
                        <button className="btn btn-secondary mx-1" onClick={handleCopy}>Copy Text</button>
                    </div>
                    <div className="container" style={{color:props.mode==='dark'?'white':'dark'}}>
                        <h2>This is for paragraph</h2>
                        <p>{text.split(" ").length} and {text.length}</p>
                        <p>Reading Time:{(0.008)*text.split(" ").length}wpm</p>
                        <h3>Preview</h3>
                        <p>{text.length>0?text:"Your text appears here."}</p>
             </div>
         </>
    )
}
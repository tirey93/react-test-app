import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react"

const Webwork = () => {    
    const [num, setNum] = useState(0);
    const [result, setResult] = useState(0);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [clicked, setClicked] = useState('');

    const handleCount = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNum(Number.parseInt(e.target.value));
    }
    const handleCalculate = () => {
        console.log("start")
        const worker = new Worker(new URL('./worker.js', import.meta.url));

        worker.postMessage({ num });

        worker.onmessage = function(e) {
            const { result, message, complete } = e.data;

            if(message){
                setLoadingMessage(message);
            }
            if(complete){
                setResult(result);
                worker.terminate();
            }
        };
    }
    function handleClick(): void {
        setClicked("Clicked")
    }

    return ( 
        <>
            <TextField type="number" value={num} onChange={handleCount}></TextField>
            <Button onClick={handleCalculate}>Calculate</Button>
            <Button onClick={handleClick}>Click me</Button>
            <Typography variant="h3">{loadingMessage}</Typography>
            <Typography variant="h3">{result}</Typography>
            <Typography variant="h3" color="error">{clicked}</Typography>
        </>
     );
}
 
export default Webwork;
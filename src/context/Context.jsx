import { createContext,useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) =>{

    const[input,setInput] = useState("");
    const[recentPrompt,setRecentPrompt] = useState("");
    const[prevPrompts,setPrevPrompts] = useState([]);
    const[showResult,setShowResult] = useState(false);
    const[loading,setLoading] = useState(false);
    const[resultData,setResultData] = useState("");

    const delayPara = (index,nextword) =>{
            setTimeout(function(){
                setResultData(prev=>prev+nextword);
            },75*index)
    }

    const onSent = async(prompt)=>{
        try
        {   setResultData("")
            setLoading(true);
            setShowResult(true)
            setRecentPrompt(input)
            setPrevPrompts(prev=>[...prev,input])
            const response = await run(input)

            const cleanResponse = response.trim();
            const responseWithBold = cleanResponse.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");

            const finalResponse = responseWithBold.replace(/\s*\*\s*/g, "<br/>* ");




            let newResponse = finalResponse.split(" ")
            for(let i=0; i<newResponse.length; i++){
                const nextWord = newResponse[i];
                delayPara(i,nextWord + " ");
            }


            // setResultData(finalResponse)
        }catch (error) {
            console.error("Error in onSent:", error);
            setResultData("Failed to fetch data");
        }finally{
            setLoading(false)
            setInput("")
        }
    }

    // onSent("Who is the president of US");

    const contextValue ={

        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
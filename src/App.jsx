import Title from "./components/Title.jsx";
import {Input} from "@/components/ui/input.jsx";
import {useState} from "react";
import ChatResponse from "@/components/ChatResponse.jsx";
import {Button} from "@/components/ui/button.jsx";

export default function App() {
    const [URL, setURL] = useState(null);
    const [response, setResponse] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        /* COMMENT DET HER UD NÅR DET IKKE ER TEST LÆNGERE
        fetch("http://localhost:8080/identify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({imageUrl: URL}),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setResponse(data.Choices[0].message.content);
            })*/
        setResponse("Red rose")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col h-svh justify-center items-center">
                <Title/>
                <Input className={"w-1/2 my-2 "} type={"url"} placeholder={"URL"}
                       onChange={(e) => setURL(e.target.value)} required/>
                <Button variant={"outline"} type={"submit"}>Submit</Button>
                {response && <ChatResponse response={response}/>}
            </form>

        </>

    )
}
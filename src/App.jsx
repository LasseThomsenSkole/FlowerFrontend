import Title from "./components/Title.jsx";
import {Input} from "@/components/ui/input.jsx";
import {useState} from "react";
import ChatResponse from "@/components/ChatResponse.jsx";
import {Button} from "@/components/ui/button.jsx";

export default function App() {
    const [URL, setURL] = useState(null);
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

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
                setLoading(false);
                setResponse(data.Choices[0].message.content);
            })
        //setResponse("Red rose") for test
    }


    //HTML SIDE
    return (
        <div className="h-screen w-full bg-[radial-gradient(circle,_#9DB394,_#718F66,_#5E7755)]">
            <form onSubmit={handleSubmit} className="flex flex-col h-svh items-center">
                <Title/>
                <Input className={"w-1/2 my-2 "} type={"url"} placeholder={"URL"}
                       onChange={(e) => setURL(e.target.value)} required/>
                {loading && <p className={"font-mono font-bold text-[#262626]"}>Loading...</p>}
                <Button className="mt-5" variant={"outline"} type={"submit"}>Identify</Button>
                {response && <ChatResponse response={response}/>}
            </form>
        </div>

    )
}

export default function ChatResponse({ response }) {
    return (

        <div className="font-mono mt-20 flex flex-row items-center justify-center bg-[#E7ECD5] rounded-xl box-border h-24 w-5/12 border-2 border-[#5E7755]">

            <h1 className="text-2xl font-bold ">
                The flower is: <span>{response}</span>
            </h1>


        </div>

    )
}




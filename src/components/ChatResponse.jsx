
export default function ChatResponse({ response }) {
    return (
        <div className="flex flex-row items-center">
            <h1 className="text-3xl font-bold ">
                The flower is: <span>{response}</span>
            </h1>
        </div>
    )
}

export default function ChatResponse({ response }) {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold underline">
                The flower is:
            </h1>
            <p className="text-lg font-bold">
                {response}
            </p>
        </div>
    )
}
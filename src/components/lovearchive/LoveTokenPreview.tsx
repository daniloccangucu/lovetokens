import { LoveToken } from "../../models/LoveToken"

function LoveTokenPreview(loveToken: LoveToken) {
    return (
        <article className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-2 px-2 pl-0">
            <p className="background--lighter-persian-pink rounded-lg shadow-inner p-4 text-base text-gray-800">
                {loveToken.phrase}
            </p>
            {loveToken.labels.map((label, index) => (
                <span key={index} className="label--small inline-block bg-blue-200 rounded-full px-2 py-1 text-xs font-semibold text-blue-700 mr-2 mt-2">
                    {label}
                </span>
            ))}
        </article>
    )
}

export default LoveTokenPreview

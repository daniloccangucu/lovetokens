import { LoveToken } from "../../models/LoveToken"
import LoveLabelsDisplay from "../singlelovetoken/LabelsDisplay"
import SmallPhraseDisplay from "./SmallPhraseDisplay"

function LoveTokenPreview(loveToken: LoveToken) {
    return (
        <article className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-2 px-2 pl-0">
            <SmallPhraseDisplay {...loveToken} />
            <LoveLabelsDisplay labels={loveToken.labels} />
        </article>
    )
}

export default LoveTokenPreview

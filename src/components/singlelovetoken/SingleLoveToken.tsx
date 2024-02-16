import { LoveToken } from "../../models/LoveToken"
import CallToAction from "../calltoaction/CallToAction"
import PageHeader from "../pageheader/PageHeader"
import LoveLabelsDisplay from "./LabelsDisplay"
import LovePhraseDisplay from "./LargePhraseDisplay"


function SingleLoveToken(loveToken: LoveToken) {
    return (
        <section className="p-4">
            <PageHeader
                title="Love Token #1"
                subtitle="created at 02.02.2024"
            />
            <article className="mt-3">
                <LovePhraseDisplay {...loveToken} /><br />
                <LoveLabelsDisplay labels={loveToken.labels} />
            </article>
            <CallToAction />
        </section>
    )
}

export default SingleLoveToken

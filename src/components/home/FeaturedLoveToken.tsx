import { LoveToken } from '../../models/LoveToken'
import huggingHands from "../../images/hands-hugging-heart.png";
import LargePhraseDisplay from '../singlelovetoken/LargePhraseDisplay';

function FeaturedLoveToken(loveToken: LoveToken) {
    return (
        <div className={`flex flex-col items-center section-container--max-height`}>
            <div className="px-4 text-6xl">
                <LargePhraseDisplay {...loveToken} />
            </div>
            <div>
                <img className="object-contain h-50 w-60" src={huggingHands} alt="Illustration of hands hugging a heart" />
            </div>
        </div>
    )
}

export default FeaturedLoveToken

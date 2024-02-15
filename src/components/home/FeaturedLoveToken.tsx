import { LoveToken } from '../../models/LoveToken'
import huggingHands from "../../images/hands-hugging-heart.png";

function FeaturedLoveToken(loveToken: LoveToken) {
    return (
        <div className="flex flex-col items-center section-container--max-height">
            <div className="px-4 text-6xl">
                <p className="text--persian-pink">“I feel loved when you</p>
                <p>
                    {loveToken.phrase}
                    <span className="text--persian-pink">”</span>
                </p>
                <p className="italic text-base mt-4">
                    Love token created by {loveToken.createdBy.userName}
                </p>
            </div>
            <div>
                <img className="object-contain h-50 w-60" src={huggingHands} alt="Illustration of hands hugging a heart" />
            </div>
        </div>
    )
}

export default FeaturedLoveToken

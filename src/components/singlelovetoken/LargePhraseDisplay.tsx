import { LoveToken } from '../../models/LoveToken';

function LargePhraseDisplay(loveToken: LoveToken) {
    return (
        <div className="px-4 text-6xl">
            <span className="text--persian-pink">“I feel loved when you </span>

            {loveToken.phrase}
            <span className="text--persian-pink">”</span>

            <p className="italic text-base mt-4">
                Love token created by {loveToken.createdBy.userName}
            </p>
        </div>
    );
}

export default LargePhraseDisplay;

import { LoveToken } from '../../models/LoveToken'

function SmallPhraseDisplay(loveToken: LoveToken) {
    return (
        <p className="background--lighter-persian-pink rounded-lg shadow-inner p-4 text-base text-gray-800">
            {loveToken.phrase}
        </p>
    )
}

export default SmallPhraseDisplay

import { useTheme } from '../../contexts/ThemeContext'
import { LoveToken } from '../../models/LoveToken'

function SmallPhraseDisplay(loveToken: LoveToken) {
    const { theme } = useTheme();
    return (
        <p className={`rounded-lg shadow-inner p-4 text-base
            ${theme === 'light' ?
                'background--lighter-persian-pink text-gray-800' :
                'bg-indigo-900 text-gray-200'
            }`}>
            {loveToken.phrase}
        </p>
    )
}

export default SmallPhraseDisplay

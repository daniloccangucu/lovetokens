import { HeaderTwoProps } from '../../models/Types'

function HeaderTwo(props: HeaderTwoProps) {
    const { title, position } = props;
    return (
        <h2 className={`mt-4 mb-4 text-2xl text--persian-pink ${position}`}>{title}</h2>
    )
}

export default HeaderTwo

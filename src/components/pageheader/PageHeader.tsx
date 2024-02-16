import { PageHeaderProps } from "../../models/PageHeaderProps";

function PageHeader(props: PageHeaderProps) {
    const { title, subtitle } = props;

    return (
        <div>
            <h1 className="font-bold text-4xl text--persian-pink">{title}</h1>
            <h2 className="text-xl italic">{subtitle}</h2>
        </div>
    );
}

export default PageHeader;

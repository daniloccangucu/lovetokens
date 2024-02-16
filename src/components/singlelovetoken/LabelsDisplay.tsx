import { LabelsProps } from "../../models/Props";

function LoveLabelsDisplay({ labels }: LabelsProps) {
    return (
        <>
            {labels.map((label, index) => (
                <span key={index} className="label--small inline-block bg-blue-200 rounded-full px-2 py-1 text-xs font-semibold text-blue-700 mr-2 mt-2">
                    {label}
                </span>
            ))}
        </>
    );
}

export default LoveLabelsDisplay;

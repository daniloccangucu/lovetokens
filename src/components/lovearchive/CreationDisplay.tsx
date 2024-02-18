function CreationDisplay({ creationDate, size }: { creationDate: string, size: string }) {
    const formattedDate = new Date(creationDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    size === 'small' ? size = 'text-xs' : size = 'text-sl'

    return (
        <div className={`text--ce-soir ${size} mt-1`}>
            Created: {formattedDate}
        </div>
    );
}

export default CreationDisplay

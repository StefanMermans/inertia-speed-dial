import { useState } from 'react';

type Props = {
    onEdit(): void;
};

function Content({ onEdit }: Props) {
    return (
        <div className="mb-5 mr-5">
            <button onClick={onEdit}>Edit</button>
        </div>
    );
}

export default function EditButton({ onEdit }: Props) {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="absolute bottom-0 right-0 flex cursor-pointer"
            onClick={() => setVisible(true)}
        >
            <div className="h-6 w-6 bg-amber-700"></div>
            {visible && <Content onEdit={onEdit} />}
        </div>
    );
}

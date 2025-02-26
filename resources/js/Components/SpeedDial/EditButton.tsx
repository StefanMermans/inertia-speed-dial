import { useRemember } from '@inertiajs/react';
import cn from 'classnames';

type Props = {
    onEdit(): void;
};

export default function EditButton({ onEdit }: Props) {
    const [visible, setVisible] = useRemember(false, 'EditButton.visible');

    return (
        <div
            className={cn(
                'absolute -right-4 bottom-32 flex w-36 cursor-pointer items-center rounded-md border border-gray-700 bg-black/15 backdrop-blur-xl transition-transform',
                {
                    'translate-x-28': !visible,
                    'translate-x-0': visible,
                },
            )}
        >
            <button
                className="h-6 py-1 pl-1 pr-2"
                onClick={() => setVisible((prev) => !prev)}
            >
                <div className="h-full w-2 border-x border-x-gray-200/50" />
            </button>
            <button className="px-2 text-gray-400" onClick={onEdit}>
                Edit
            </button>
        </div>
    );
}

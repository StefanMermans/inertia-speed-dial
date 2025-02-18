import { router } from '@inertiajs/react';
import { MouseEventHandler, ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function Drawer({ children }: Props) {
    function handleBackgroundClick() {
        router.visit(
            route('speed-dial', {
                editing: true,
            }),
        );
    }

    const handleDrawerClicked: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className="absolute h-full w-full bg-black/25"
            onClick={handleBackgroundClick}
        >
            <div
                onClick={handleDrawerClicked}
                className="absolute right-0 top-0 h-full w-96 bg-white"
            >
                {children}
            </div>
        </div>
    );
}

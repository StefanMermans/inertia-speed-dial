import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function Drawer({ children }: Props) {
    function handleBackgroundClick() {
        history.back();
    }

    return (
        <div className="absolute flex h-screen w-screen">
            <div
                onClick={handleBackgroundClick}
                className="flex-aut"
            />
            <div className="h-full w-96 border-l border-gray-500 bg-black/30 backdrop-blur-xl">
                {children}
            </div>
        </div>
    );
}

import { Container } from '@/Components/SpeedDial/Site';

type Props = {
    onClick(): void;
};

export default function NewSite({ onClick }: Props) {
    return (
        <Container
            as="button"
            onClick={onClick}
            className="bg-slate-700/20 text-black outline-dashed outline-4 outline-white"
        >
            Add
        </Container>
    );
}

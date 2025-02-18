import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Site } from '@/Pages/SpeedDial';

type Props = {
    sites: Site[];
};

export default function Index({ sites }: Props) {
    return (
        <Authenticated>
            <main>
                {sites.map((site) => (
                    <div key={site.id}>
                        <h2>{site.name}</h2>
                        <p>{site.url}</p>
                    </div>
                ))}
            </main>
        </Authenticated>
    );
}

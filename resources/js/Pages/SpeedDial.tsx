import Drawer from '@/Components/Drawer/Drawer';
import SiteForm from '@/Components/SiteForm/SiteForm';
import Clock from '@/Components/SpeedDial/Clock';
import EditButton from '@/Components/SpeedDial/EditButton';
import NewSite from '@/Components/SpeedDial/NewSite';
import { Site as SiteComponent } from '@/Components/SpeedDial/Site';
import { Head, router, useRemember } from '@inertiajs/react';
import cn from 'classnames';
import styles from './SpeedDial.module.css';

export type Site = {
    id: number;
    name: string;
    url: string;
    icon_path: string;
    icon_url: string;
    background_color?: string;
    created_at?: string;
    updated_at?: string;
    no_padding?: boolean;
};

type Props = {
    site?: Site;
    sites: Site[];
    creating: boolean;
    isLoggedIn?: boolean;
};

export default function SpeedDial({
    sites,
    site,
    creating,
    isLoggedIn,
}: Props) {
    const [editing, setEditing] = useRemember(false, 'SpeedDial.editing');

    const handleEdit = () => {
        setEditing((prev) => !prev);
    };

    const handleNewSiteClick = () => {
        router.visit(
            route('speed-dial', {
                creating: true,
            }),
        );
    };

    return (
        <>
            <Head title="Speed dial" />
            <main
                className={cn(
                    'relative flex h-screen w-screen flex-col overflow-x-hidden bg-cover bg-center bg-no-repeat',
                    'bg-[url(/background-compressed.jpg)]',
                )}
                style={{
                    boxShadow: 'inset 0px 0px 200px 16px rgba(0,0,0,0.75)',
                }}
            >
                {isLoggedIn && <EditButton onEdit={handleEdit} />}
                <div className="flex h-full flex-col justify-between p-4">
                    <div className={cn(styles.grid)}>
                        {sites.map((site) => (
                            <SiteComponent
                                editable={editing}
                                key={site.name}
                                site={site}
                            />
                        ))}
                        {editing && <NewSite onClick={handleNewSiteClick} />}
                    </div>
                    <div className={styles.footer}>
                        <div className="col-span-full flex w-full justify-between">
                            <Clock />
                        </div>
                    </div>
                </div>
                {(site || creating) && (
                    <Drawer>
                        <SiteForm site={site} creating={creating} />
                    </Drawer>
                )}
                {/*<RegisterServiceWorker />*/}
            </main>
        </>
    );
}

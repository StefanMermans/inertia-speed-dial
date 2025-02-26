import { Site as SiteType } from '@/Pages/SpeedDial';
import { default as cn } from 'classnames';
import { CSSProperties, useMemo } from 'react';

type Props = {
    clickable?: boolean;
    editable: boolean;
    site: Partial<
        Pick<
            SiteType,
            | 'background_color'
            | 'no_padding'
            | 'id'
            | 'url'
            | 'name'
            | 'icon_url'
        >
    >;
};

export const Site = ({ site, editable }: Props) => {
    const style = useMemo(
        (): CSSProperties => ({
            backgroundColor: site.background_color || 'white',
        }),
        [site.background_color],
    );

    const url = editable
        ? route('speed-dial', {
              site: site.id,
          })
        : site.url;

    return (
        <a
            href={url}
            className={cn(
                'block h-24 w-24 transform cursor-pointer overflow-hidden rounded-2xl shadow-md transition-transform hover:scale-110 hover:shadow-xl',
                { 'p-2': !site.no_padding },
                {
                    'bg-slate-700 outline-4 outline-offset-4 outline-white hover:outline-dashed':
                        editable,
                },
            )}
            style={style}
        >
            <img src={`${site.icon_url}`} alt={`${site.name} logo`} />
        </a>
    );
};

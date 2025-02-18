import { Site as SiteType } from '@/Pages/SpeedDial';
import { router } from '@inertiajs/react';
import { default as cn } from 'classnames';
import { CSSProperties, ReactNode, useMemo } from 'react';

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

type ContainerProps = {
    as: 'a' | 'button';
    children?: ReactNode;
    href?: string;
    className?: string;
    style?: CSSProperties;
    onClick?(): void;
};

export function Container({
    as,
    className,
    style,
    href,
    children,
    onClick,
}: ContainerProps) {
    const fullClassName = cn(
        `block h-24 w-24 transform cursor-pointer overflow-hidden rounded-2xl shadow-md transition-transform hover:scale-110 hover:shadow-xl`,

        className,
    );

    if (as === 'a') {
        return (
            <a href={href} className={fullClassName} style={style}>
                {children}
            </a>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={fullClassName}
            style={style}
        >
            {children}
        </button>
    );
}

export const Site = ({ site, editable, clickable = false }: Props) => {
    const style = useMemo(
        (): CSSProperties => ({
            backgroundColor: site.background_color || 'white',
        }),
        [site.background_color],
    );

    const handleClick = () => {
        if (!editable) {
            return;
        }

        router.visit(
            route('speed-dial', {
                site: site.id,
                editing: editable,
            }),
        );
    };

    return (
        <Container
            as={editable || !clickable ? 'button' : 'a'}
            href={site.url}
            className={cn(
                { 'p-2': !site.no_padding },
                {
                    'bg-slate-700 outline-4 outline-offset-4 outline-white hover:outline-dashed':
                        editable,
                },
            )}
            onClick={handleClick}
            style={style}
        >
            <img src={`${site.icon_url}`} alt={`${site.name} logo`} />
        </Container>
    );
};

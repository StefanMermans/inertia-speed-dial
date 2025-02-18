import cn from 'classnames';
import React from 'react';

type Props = Exclude<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >,
    'type'
>;

export default function ColorPicker({ className, ...props }: Props) {
    return (
        <input {...props} className={cn('bg-white border border-black', className)} type="color" />
    );
}

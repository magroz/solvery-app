import React from 'react';
import ClassNames from 'classnames';
import ButtonHooksProps from './ButtonHooksProps';

export default function ButtonHooks({
    isDisabled = false,
    isLoading = false,
    onClick,
    elementId,
    icon,
    title = 'Btn',
    isPrimary,
    isSecondary,
    isAdvanced,
    isBig,
}: ButtonHooksProps) {
    const className = ClassNames('Button', {
        Button_primary: isPrimary,
        Button_secondary: isSecondary,
        Button_advanced: isAdvanced,
        Button_big: isBig,
        loading: isLoading,
    })

    return (
        <button
            onClick={onClick}
            disabled={isDisabled || isLoading}
            id={elementId}
            className={className}
        >
            {icon && <div className="Button__icon">{icon}</div>}
            {title}
        </button>
    )
}

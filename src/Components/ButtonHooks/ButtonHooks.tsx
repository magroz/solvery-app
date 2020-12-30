import React, {useState, useEffect} from "react";
import ClassNames from "classnames";
import ButtonHooksProps from "./ButtonHooksProps";

export default function ButtonHooks({isDisabled, elementId, icon, title, isPrimary, isSecondary, isAdvanced, isBig}: ButtonHooksProps) {
    const [isLoading, setLoading] = useState(false)
    const [isDisabledInner, setDisabledInner] = useState(isDisabled)

    useEffect(() => {
        setDisabledInner(isDisabled)
    }, [isDisabled])

    useEffect(() => {
        return () => {
            setLoading(false)
            setDisabledInner(false)
        }
    })

    const handleClick = () => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
            .finally(() => setLoading(false))
    }

    const className = ClassNames('Button', {
        Button_primary: isPrimary,
        Button_secondary: isSecondary,
        Button_advanced: isAdvanced,
        Button_big: isBig,
        loading: isLoading,
    });

    return <button
        onClick={handleClick}
        disabled={isDisabledInner || isLoading}
        id={elementId}
        className={className}
    >
        {icon && (
            <div className="Button__icon">
                {icon}
            </div>
        )}
        {title ? title : "Btn Hooks"}
    </button>
}
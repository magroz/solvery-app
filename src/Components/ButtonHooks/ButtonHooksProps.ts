export default interface ButtonHooksProps {
    elementId: string,
    title?: string,
    isDisabled?: boolean,
    isPrimary?: boolean,
    isSecondary?: boolean,
    isAdvanced?: boolean,
    isBig?: boolean,
    icon?: JSX.Element,
}
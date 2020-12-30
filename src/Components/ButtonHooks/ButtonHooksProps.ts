export default interface ButtonHooksProps {
    elementId: string
    onClick: () => void
    title: string
    isDisabled?: boolean
    isLoading?: boolean
    isPrimary?: boolean
    isSecondary?: boolean
    isAdvanced?: boolean
    isBig?: boolean
    icon?: JSX.Element
}

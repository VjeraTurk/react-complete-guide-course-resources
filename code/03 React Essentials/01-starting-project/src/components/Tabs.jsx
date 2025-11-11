export default function Tabs({children, buttons, buttonsContainer = "menu"}){

    // constant must begin with Uppercase
    const ButtonsContainer = buttonsContainer
    return <>
    <ButtonsContainer>
        {buttons}
    </ButtonsContainer>
    {children}
    </>
}
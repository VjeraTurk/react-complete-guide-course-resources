/* starting with on makes it clear that this prop is a function */
export default function TabButton({children, onSelect}) {

    // inner function
    // function handleClick() {
    //    console.log("Clicked!")
    // }
    // document.querySelector('button').addEventListener('click', () =>{})

    return (
        <li>
            {/*do not invoke the function, just use the functionname*/}
            <button onClick={onSelect} >{children}</button>
        </li>
    );
}
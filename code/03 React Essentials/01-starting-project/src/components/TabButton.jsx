/* starting with on makes it clear that this prop is a function */
export default function TabButton({children, onSelect, isSelected}) {

    // inner function
    // function handleClick() {
    //    console.log("Clicked!")
    // }
    // document.querySelector('button').addEventListener('click', () =>{})

  // by default it executes only once
  console.log('BUTTON COMPONENT EXECUTING')

    return (
        <li>
            {/*do not invoke the function, just use the functionname*/}
            <button className={isSelected? 'active':  undefined} onClick={onSelect} >{children}</button>
        </li>
    );
}
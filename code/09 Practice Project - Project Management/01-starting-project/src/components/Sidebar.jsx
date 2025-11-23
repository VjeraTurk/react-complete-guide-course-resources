export default function Sidebar() {
    return (
        // w-1/3: width of 1/3 of the container
        // px-8: padding left and right of 8 units
        // py-16: padding top and bottom of 16 units
        // bg-stone-900: background color
        // text-stone-50: text color
        // md:w-72: width of 72 units on medium screens and larger
        // rounded-r-xl: rounded corners on the right side

        // mb-8: margine bottom of 8 units
        // font-bold: font weight bold
        // uppercase: text is uppercase
        // md:text-xl: text size of 16 units on medium screens and larger
        // text-stone-200: text color

        // px-4: padding left and right of 4 units
        // py-2: padding top and bottom of 2 units
        // text-xs: text size of 12 units
        // md:text-base: text size of 16 units on medium screens and larger
        // rounded-md: rounded corners of 4 units
        // bg-stone-700: background color
        // text-stone-400: text color
        // hover:bg-stone-600: background color on hover
        // hover:text-stone-100: text color on hover

        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your Projects
            </h2>
            <div>
                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                    + Add Project
                </button>
            </div>
        </aside>
    )
}
export default function Input({ label, textarea, ...props }) {

    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    return (
        // flex: flexbox layout
        // flex-col: flex direction column
        // gap-1: gap between the elements of 1 unit
        // my-4: margin top and bottom of 4 units

        // text-sm: text size of 12 units
        // font-bold: font weight bold
        // uppercase: text is uppercase
        // text-stone-500: text color

        // w-full: width of 100% of the container
        // p-1: padding of 1 unit
        // border-b-2: border bottom of 2 units
        // rounded-sm: rounded corners of 4 units
        // border-stone-300: border color
        // bg-stone-200: background color
        // text-stone-600: text color
        // focus:outline-none: remove the outline when the input is focused
        // focus:border-stone-600: border color when the input is focused

        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">
                {label}</label>
            {textarea ? (
                <textarea className={classes} {...props} />
            ) : (
                <input className={classes} {...props} />
            )}
        </p>
    )
}
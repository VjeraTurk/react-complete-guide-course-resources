import Input from './Input.jsx';

export  default function NewProject() {

    // w-[35rem]: width of 35rem
    // mt-16: margin top of 16 units

    // flex: flexbox layout
    // items-center: align items in the center
    // justify-end: align items to the end
    // gap-4: gap between the elements of 4 units
    // my-4: margin top and bottom of 4 units

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </li>
            </menu>
            <div>
                <Input label="Title" />
                <Input label="Description" textarea />
                <Input label="Due Date" />
            </div>
        </div>
    )
}
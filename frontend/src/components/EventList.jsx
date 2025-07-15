import Button from "./Button";

export default function EventList() {
    return (
        <aside className="w-1/3 px-8 py-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Events</h2>
            <div>
                <Button>+ Add Event</Button>
            </div>
            <ul className="mt-8">
                {/* events.map */}
            </ul>
        </aside>
    )
}
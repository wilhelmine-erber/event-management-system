import Button from "./Button";

export default function EventList({ events, onSelectedEvent, onStartAddEvent }) {

    console.log('events:', events);


    return (
        <aside className="w-1/3 px-8 py-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">

            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Events</h2>

            <div>
                <Button onClick={onStartAddEvent}>+ Add Event</Button>
            </div>

            {/* each event should clickable */}
            <ul className="mt-8">
                {events.map(item => {

                    return (
                        <li key={item.id}>
                            <button
                                className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                                onClick={() => onSelectedEvent?.(item.id)}>
                                {item.title}
                            </button>
                        </li>
                    )
                }
                )}
            </ul>
        </aside>
    )
}
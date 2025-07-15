import Button from "./Button";

export default function EventDetail({ eventItem }) {
    return (
        <div className="w-[35rem] mt-16">
            <header>
                <div className="pb-4 mb-4 border-b-2 border-stone-300 flex justify-between">
                    <h2 className="text-2-xl font-bold text-stone-600 mb-2">{eventItem.title}</h2>

                    {/* TODO implement the delete btn */}
                    <button className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-400 whitespace-pre-wrap">{eventItem.description}</p>
                <p className="mb-4 text-stone-400 whitespace-pre-wrap">{eventItem.location}</p>
                <p className="mb-4 text-stone-400 whitespace-pre-wrap">{eventItem.date}</p>
            </header>
            <Button>register for this event</Button>
        </div>
    )
}
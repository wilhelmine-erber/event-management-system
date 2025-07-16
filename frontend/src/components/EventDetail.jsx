import Button from "./Button";

export default function EventDetail({ eventItem }) {



    const formattedDate = new Date(eventItem.date).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

    console.log(formattedDate);

    return (
        <div className="w-[35rem] mt-16">
            <header className="mb-8">
                <div className="pb-2 mb-8 border-b-2 border-stone-300 flex justify-between">
                    <h2 className="text-2-xl font-bold text-stone-600 mb-2">{eventItem.title}</h2>

                    {/* TODO implement the delete btn */}
                    <button className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-600 whitespace-pre-wrap">{eventItem.description}</p>
                <p className="mb-4 text-stone-600 whitespace-pre-wrap">{eventItem.location}</p>
                <p className="mb-4 text-stone-600 whitespace-pre-wrap">Findet statt am: {formattedDate}</p>
                <p className="mb-4 text-stone-600 whitespace-pre-wrap">Noch {eventItem.maxParticipants} Plätze frei</p>
            </header>
            <Button>register for this event</Button>
        </div>
    )
}
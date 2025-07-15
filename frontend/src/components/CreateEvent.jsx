import { useState } from "react";
import Button from "./Button";


export default function CreateEvent({ onAdd, onCancel }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");

    function handleSave() {
        const eventData = {
            title,
            description,
            date,
            location
        }

        console.log(eventData);
        onAdd(eventData)
    }

    return (
        <div className="w-[35rem]">
            <h2 className='text-xl font-bold text-stone-500 my-4'>create a new event</h2>

            <div>
                <label className="block mb-2 font-bold">Title</label>
                <input
                    type="text"
                    className="w-full rounded-md border p-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <label className="block mb-2 font-bold">Description</label>
                <textarea
                    className="w-full rounded-md border p-2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />

                <label className="block mb-2 font-bold">Date</label>
                <input
                    type="date"
                    className="w-full rounded-md border p-2"
                    value={date}
                    onChange={(e) => setDate(e.target.value)} />

                <label className="block mb-2 font-bold">Location</label>
                <input
                    type="text"
                    className="w-full rounded-md border p-2"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} />

            </div>
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <Button onClick={onCancel}>Cancel</Button>
                </li>
                <li>
                    <Button onClick={handleSave}>Save</Button>
                </li>
            </menu>
        </div>
    )
}
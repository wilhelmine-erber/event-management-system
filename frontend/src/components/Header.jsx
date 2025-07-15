import Button from "./Button"
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate = useNavigate()

    return (
        <header className="flex justify-between items-center p-5 mb-10">
            <h1 className='text-3xl font-bold m-4'>Event Management Challenge</h1>
            <Button onClick={() => navigate('/login')}>login</Button>
        </header >
    )
}
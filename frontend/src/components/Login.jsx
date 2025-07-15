import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

export default function Login() {

    const navigate = useNavigate()

    const [isRegister, setIsRegister] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: hier login implementieren
    }

    return (
        <div className="mx-auto mt-16 w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
            <h2 className='text-2xl font-semibold m-4'>Login Page</h2>
            {/* only for TEST */}
            <a className="link link-error" onClick={() => navigate('/')}>HOME</a>

            <form className='space-y-4' onSubmit={handleSubmit}>
                {isRegister && (
                    <div>
                        <label>Email</label>
                        <input type="text" />
                        <label>Password</label>
                        <input type="password" />
                    </div>
                )}
                <div>
                    <label>Name</label>
                    <input type="text" />
                    <label>Email</label>
                    <input type="text" />
                    <label>Password</label>
                    <input type="password" />
                </div>
                <Button>{isRegister ? 'create account' : 'login'}</Button>
            </form>

            <p className="mt-4 text-center text-sm">
                {isRegister ? "Schon registriert?" : "Noch kein Konto?"}{" "}
                <button
                    onClick={() => setIsRegister(!isRegister)}
                    className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-100 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
                >
                    {isRegister ? "Hier einloggen" : "Registrieren"}
                </button>
            </p>
        </div>
    )
}
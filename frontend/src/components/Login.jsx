import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

export default function Login() {

    const navigate = useNavigate()
    const [isRegister, setIsRegister] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === '' || password === '') {
            alert('please use test data to login')
        }

        // Testdaten
        const testEmail = 'test@test.de'
        const testPassword = '12345'

        if (!isRegister) {
            if (email === testEmail && password === testPassword) {
                setError('')
                navigate('/')
            } else {
                setError('failed login, please try test data')
            }
        } else {
            console.log(`register data: ${name}, ${password}, ${email}`);
            setError('')
            setIsRegister(false)
        }
    }

    return (
        <div className="mx-auto mt-16 w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
            {/* only for TEST */}
            <button className="link link-error text-red-400" onClick={() => navigate('/')}>HOME</button>

            <h2 className='text-2xl font-semibold my-4'>{!isRegister ? 'Login' : 'Register'} Form</h2>

            <form className='space-y-4' onSubmit={handleSubmit}>
                {!isRegister ? (
                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                            className="w-full rounded-md border p-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <label>Password</label>
                        <input
                            type="password"
                            className="w-full rounded-md border p-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                ) : (
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            className="w-full rounded-md border p-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />

                        <label>Email</label>
                        <input
                            type="text"
                            className="w-full rounded-md border p-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <label>Password</label>
                        <input
                            type="password"
                            className="w-full rounded-md border p-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                )}

                <Button>{isRegister ? 'create account' : 'login'}</Button>
            </form>

            <p className="mt-4 text-center text-sm">
                {isRegister ? "already registered?" : "no account yet?"}
                <Button onClick={() => setIsRegister(!isRegister)}>{isRegister ? "login here" : "register here"}</Button>
            </p>
        </div>
    )
}
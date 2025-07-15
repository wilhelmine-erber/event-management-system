

export default function Login() {
    return (
        <div>
            <h2 className='text-2xl font-semibold m-4'>Login Page</h2>
            <form className='m-4'>
                <label>Email</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
            </form>
        </div>
    )
}
import noData from '../assets/noData.jpg'
import Button from './Button'


export default function NoEventListed({onStartAddEvent}) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noData} alt='empty event data' className='w-50 object-contain mx-auto' />
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Event Selected</h2>
            <p className='text-stone-400 mb-4'>Selected a event or get started with a new one</p>
            <p className='mt-8'>
                <Button onClick={onStartAddEvent}>
                    Create new Event
                </Button>
            </p>
        </div>
    )
}
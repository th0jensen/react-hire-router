import { useState } from 'react'

function HireForm(props: any) {
    const [wage, setWage] = useState(0)

    function handleSubmit(event: any) {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='wage'>Wage Offer</label>
            <input
                type='text'
                id='wage'
                name='wage'
                onChange={(e) => setWage(parseInt(e.target.value))}
                value={wage}
            />
            <button type='submit'>Hire</button>
        </form>
    )
}

export default HireForm

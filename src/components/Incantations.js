import Item from '../components/Item'

function Incantations(props) {

    return (
        <>
            <div className='incantations-container'>
                <h1>Incantations</h1>
                {props.incants.map((incant, idx) => {
                    // console.log(incant)
                    return (
                            <Item item={incant} />
                    )
                })}
            </div>
        </>
    )
}

export default Incantations

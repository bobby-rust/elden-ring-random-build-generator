import Item from '../components/Item'
import { v4 } from 'uuid'

function Incantations(props) {
    return (
        <>
            <div className='incantations-container'>
                <h1 className={`section-container-title${props.size}`}>
                    Incantations
                </h1>
                {props.incants.map((incant, idx) => {
                    // console.log(incant)
                    return (
                        <Item
                            item={incant}
                            color={props.color}
                            key={v4()}
                            size={props.size}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Incantations

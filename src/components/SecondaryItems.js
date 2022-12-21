import Talismans from './Talismans'
import Incantations from './Incantations'
import Sorceries from './Sorceries'
import Ashes from './Ashes'
import Spirits from './Spirits'

function SecondaryItems(props) {
    const color = props.color
    return (
        <>
            <div className={`secondary-items-container${color}${props.size}`}>
                <Sorceries
                    sorcs={props.build['sorcs']}
                    color={color}
                    size={props.size}
                />
                <Incantations
                    incants={props.build['incants']}
                    color={color}
                    size={props.size}
                />
                <Talismans
                    talismans={props.build['talismans']}
                    color={color}
                    size={props.size}
                />
                <div className='ashes-spirits-container'>
                    <Ashes
                        ashes={props.build['ashes']}
                        color={color}
                        size={props.size}
                    />
                    <Spirits
                        spirits={props.build['spirits']}
                        color={color}
                        size={props.size}
                    />
                </div>
            </div>
        </>
    )
}

export default SecondaryItems

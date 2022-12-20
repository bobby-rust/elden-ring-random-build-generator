import SecondaryItems from '../components/SecondaryItems'
import Button from 'react-bootstrap/Button'
import StartingClass from '../components/StartingClass'
import Weapons from '../components/Weapons'
import Armors from '../components/Armors'

function LargeLayout(props) {
    // Need buttonstate, css, generate props.build func, props.build
    return (
        <>
            <div className='body-container'>
                <div className={`class-button-container${props.color}`}>
                    <StartingClass
                        starting_class={props.build['starting_class']}
                    />
                    <div className='button-container'>
                        <Button
                            className='button-large'
                            onClick={props.generateNewBuild}
                            variant='danger'
                        >
                            GENERATE NEW BUILD
                        </Button>
                    </div>
                </div>
                <Weapons
                    weapons={props.build['weapons']}
                    shields={props.build['shields']}
                    color={props.color}
                />
                <Armors armor={props.build['armor']} color={props.color} />
                <SecondaryItems color={props.color} build={props.build} />
            </div>
        </>
    )
}

export default LargeLayout

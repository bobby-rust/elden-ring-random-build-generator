import SecondaryItems from '../components/SecondaryItems'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Button from 'react-bootstrap/Button'
import StartingClass from '../components/StartingClass'
import Weapons from '../components/Weapons'
import Armors from '../components/Armors'

function LargeLayout(props) {

    // Need buttonstate, css, generate props.build func, props.build
    return (
        <>
            <div className='body-container'>
                <div className={`class-button-container${props.CSS}`}>
                    <div className='toggle-button-container'>
                        <div className='toggle-button-label'>
                            Dark mode
                        </div>
                        <BootstrapSwitchButton checked={props.buttonState} onstyle='dark' offstyle='light' style='border' width='90' onChange={props.handleColorChange} />
                    </div>
                    <StartingClass starting_class={props.build['starting_class']} />
                    <div className='button-container'>
                        <Button className='button-large' onClick={props.generateNewBuild} variant='danger'>
                            GENERATE NEW BUILD
                        </Button>
                    </div>
                </div>
                <Weapons weapons={props.build['weapons']} shields={props.build['shields']} CSS={props.CSS} />
                <Armors armor={props.build['armor']} CSS={props.CSS}/>
                <SecondaryItems CSS={props.CSS} build={props.build} />
            </div>
        </>
    )
}

export default LargeLayout;
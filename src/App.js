import './App.css'
import Weapons from './components/Weapons'
import Armors from './components/Armors'
import Talismans from './components/Talismans'
import Incantations from './components/Incantations'
import Sorceries from './components/Sorceries'
import Ashes from './components/Ashes'
import Spirits from './components/Spirits'
import StartingClass from './components/StartingClass'
import Header from './components/Header'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    // Generate new build
    function generateNewBuild() {
        console.log('You clicked the button')
    }
    // End generate new build

    return (
        <div className='root'>
            <div className='App'>
                <Header />
                <div className='class-button-container'>
                    <StartingClass />
                    <div className='button-container'>
                        {/* <button
                            className='generate-button'
                            onClick={generateNewBuild}
                        >
                            GENERATE NEW BUILD
                        </button> */}
                        <Button className='button' variant='danger'>
                            GENERATE NEW BUILD
                        </Button>
                    </div>
                </div>
                <Weapons />
                <Armors />
                <div className='secondary-items-container'>
                    <Sorceries />
                    <Incantations />
                    <Talismans />
                    <div className='ashes-spirits-container'>
                        <Ashes />
                        <Spirits />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App

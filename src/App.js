import './App.css'
import Weapons from './components/Weapons'
import Armors from './components/Armors'
import Talismans from './components/Talismans'
import Incantations from './components/Incantations'
import Sorceries from './components/Sorceries'
import Ashes from './components/Ashes'
import Spirits from './components/Spirits'
import StartingClass from './components/StartingClass'

function App() {
    // Generate new build
    function generateNewBuild() {}
    // End generate new build

    return (
        <div className='App'>
            <h1>Elden Ring Random Build Generator</h1>
            <div className='button-container'>
                <button className='generate-button' onClick={generateNewBuild}>
                    Generate new build
                </button>
            </div>
            <StartingClass />
            <Weapons />
            <Armors />
            <div className='secondary-items-container'>
                <Sorceries />
                <Incantations />
                <Talismans />
                <div className="ashes-spirits-container" >
                    <Ashes />
                    <Spirits />
                </div>
            </div>
        </div>
    )
}

export default App

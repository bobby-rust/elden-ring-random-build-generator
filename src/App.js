import './App.css'
import React from 'react'
import Header from './components/Header.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import generateRandomBuild from './functions/generateRandomBuild'
import AnalyticsWrapper from './components/AnalyticsWrapper'
import LargeLayout from './layouts/LargeLayout'
import SmallLayout from './layouts/SmallLayout'
import DevMessage from './components/DevMessage.tsx'

// add an option to allow the user to keep most of the build but regenerate one item of their choosing.

// Armor piece Redmane knight gauntlets id: 17f693ced0bl0i0oh402gmm7bjbdty description is null

// Could create a random optimized build by searching for a weapon that does the most damage and talismans/incants/etc
// that buff that damage type the most.
// Could do early game, mid game, late game by sorting the weapons by their damage and type and
// Sorting by required attributes for early/mid/late game

function App() {
    // Set up media state
    const [mediaState, setMediaState] = React.useState({
        isLargeMedia: window.matchMedia('(min-width: 1200px)').matches,
    })
    const handler = (e) => setMediaState({ isLargeMedia: e.matches })
    window.matchMedia('(min-width: 1200px)').addEventListener('change', handler)
    // End set up media state

    // Set up layout state
    const [layout, setLayout] = React.useState({
        isLargeLayout: true,
        size: '',
    })
    // End set up layout state

    // Set up color button state
    const [colorButtonState, setColorButtonState] = React.useState(true)
    // End set up color button state

    // Set up layout button state
    const [layoutButtonState, setLayoutButtonState] = React.useState(true)
    // End set up layout button state

    // color Styling State
    const [darkMode, setDarkMode] = React.useState({
        isDarkMode: true,
        color: '',
    })
    // End color Styling State

    // Set up items state
    const [build, setBuild] = React.useState(generateRandomBuild()) // 16 items generated by default. Maybe add options to select how many of each item they want to gen.
    // End set up items state

    // Generate new build
    function generateNewBuild() {
        setBuild(generateRandomBuild())
    }
    // End generate new build

    // Handle color change
    function handleColorChange() {
        setColorButtonState(!colorButtonState)

        if (darkMode.isDarkMode) {
            setDarkMode({ isDarkMode: false, color: '-lt' })
        } else if (!darkMode.isDarkMode) {
            setDarkMode({ isDarkMode: true, color: '' })
        }
    }
    // End handle color change

    // Handle layout change
    function handleLayoutChange() {
        setLayoutButtonState(!layoutButtonState)

        if (layout.isLargeLayout) {
            setLayout({ isLargeLayout: false, size: '-sm' })
        } else if (!layout.isLargeLayout) {
            setLayout({ isLargeLayout: true, size: '' })
        }
    }
    // End handle layout change

    return (
        <>
            <div className='root'>
                <div className={`App${darkMode.color}${layout.size}`}>
                    {!mediaState.isLargeMedia && (
                        <div className='mobile-message'>
                            Mobile support coming soon.
                        </div>
                    )}

                    {mediaState.isLargeMedia && (
                        <Header
                            color={darkMode.color}
                            handleColorChange={handleColorChange}
                            handleLayoutChange={handleLayoutChange}
                            layoutButtonState={layoutButtonState}
                            colorButtonState={colorButtonState}
                        />
                    )}

                    {mediaState.isLargeMedia && layout.isLargeLayout && (
                        <LargeLayout
                            color={darkMode.color}
                            build={build}
                            handleColorChange={handleColorChange}
                            handleLayoutChange={handleLayoutChange}
                            generateNewBuild={generateNewBuild}
                            size={layout.size}
                        />
                    )}

                    {mediaState.isLargeMedia && !layout.isLargeLayout && (
                        <SmallLayout
                            color={darkMode.color}
                            build={build}
                            handleColorChange={handleColorChange}
                            handleLayoutChange={handleLayoutChange}
                            generateNewBuild={generateNewBuild}
                            size={layout.size}
                        />
                    )}
                    <DevMessage />
                    <AnalyticsWrapper />
                </div>
            </div>
        </>
    )
}

export default App

import Item from './Item'
import Shield from '../components/Shield'
import { v4 } from 'uuid'
import React from 'react'

function Weapons(props: any) {
    return (
        <>
            <div
                className={`primary-items-container${props.color}${props.size}`}
            >
                <div className={`weapons-outer${props.size}`}>
                    <h1 className={`section-container-title${props.size}`}>
                        Weapons
                    </h1>
                    <div className='weapons-container'>
                        {props.weapons.map((weapon: any) => {
                            return (
                                <Item
                                    item={weapon}
                                    color={props.color}
                                    key={v4()}
                                    size={props.size}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className={`shield-outer${props.size}`}>
                    <h1 className={`section-container-title${props.size}`}>
                        Shield
                    </h1>
                    <Shield
                        items={props.shields}
                        color={props.color}
                        size={props.size}
                    />
                </div>
            </div>
        </>
    )
}

export default Weapons

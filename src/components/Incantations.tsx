import Item from './Item'
import { v4 } from 'uuid'
import React from 'react'
import { BuildItem, BuildSetProps } from '../types/ItemTypes'

function Incantations(props: BuildSetProps) {
    return (
        <>
            <div className='incantations-container'>
                <h1 className={`section-container-title${props.size}`}>
                    Incantations
                </h1>
                {props.items.map((incant: BuildItem) => {
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
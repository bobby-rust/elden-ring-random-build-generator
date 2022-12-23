import React from 'react'
import { BuildItemProps } from '../types/ItemTypes'

function Item(props: BuildItemProps) {
    return (
        <div className={`item-container${props.color}${props.size}`}>
            <h4 className={`item-title${props.size}`}>{props.item.name}</h4>
            <a
                href={`https://eldenring.wiki.fextralife.com/${props.item.name}`}
                rel='noreferrer'
                target='_blank'
            >
                <img
                    className={`item-img${props.size}`}
                    src={props.item.image}
                    alt={props.item.name + ' img'}
                />
            </a>
            <p className={`desc-container${props.size}`}>
                {props.item.description}
            </p>
        </div>
    )
}

export default Item;
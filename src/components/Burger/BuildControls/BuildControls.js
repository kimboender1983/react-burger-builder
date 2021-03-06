import React from 'react'
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price is {props.price}</p>
        {controls.map((ctrl) => {
            return <BuildControl key={ctrl.label} label={ctrl.label} added={() => props.ingredientAdded(ctrl.type)} removed={() => props.ingredientRemoved(ctrl.type)} disabled={props.disabled[ctrl.type]} />
        })}
        {/* <button disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button> */}
    </div>
);

export default BuildControls;

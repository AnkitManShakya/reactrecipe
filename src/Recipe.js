import React from 'react'

export default function Recipe({ ingredients, title, calories, image }) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} />

            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories : {calories}</p>
        </div>
    )
}

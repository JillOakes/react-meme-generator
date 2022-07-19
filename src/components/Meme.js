import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top Row Text" className="form--input" />
                <input type="text" placeholder="Bottom Row Text" className="form--input" />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} alt="randomly generated meme" className="meme--image"/>
        </main>
    )
}
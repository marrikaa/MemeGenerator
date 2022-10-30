import React from "react";
import memedata from './data'

export default function Meme(){

    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText: "",
        randomImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQsbznGmq411FW6CmmkMU-CEFbcpy9819Qg&usqp=CAU",
    })

    const[allMemeImg,setAllMemeImg]=React.useState(memedata)
    
 
    function GetMemeImg(){
        const memes=allMemeImg.data.memes;
        const randomNumber=Math.floor(Math.random() * memes.length);
        const url=memes[randomNumber].coverImg;
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImg:url
        }))
    }
    return(
        <main>
            <div className="form">
                <input type="text" className="form-input" placeholder="TopText" name="Top text" />
                <input type="text" className="form-input" placeholder="BottomText" name="Bottom text" /> 
                <button className="form-button" onClick={GetMemeImg}>Get a new meme image</button> 
                <img className="form-img" src={meme.randomImg} />
            </div>    
        </main>
    )
}
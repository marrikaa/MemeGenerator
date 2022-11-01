import React from "react";


export default function Meme(){

    const [meme,setMeme]=React.useState({
        TopText:"",
        BottomText: "",
        randomImg:"https:\/\/i.imgflip.com\/30b1gx.jpg"
    })

    const[allMemeImg,setAllMemeImg]=React.useState({})
    
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemeImg(data))
    },[])

    
    

    function GetMemeImg(){
        const memes=allMemeImg.data.memes;
        const randomNumber=Math.floor(Math.random() * memes.length);
        const src=memes[randomNumber].url;
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImg:src,
            TopText:"",
            BottomText: "",
        }))
    }

    function handleInputChange(event){
        const{name,value}=event.target;
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]:value })
        )
    }
    return(
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Top Text" 
                    name="TopText"
                    value={meme.TopText} 
                    onChange={handleInputChange}
                      />
                <input type="text" 
                    className="form-input" 
                    placeholder="Bottom Text" 
                    name="BottomText"
                    value={meme.BottomText} 
                    onChange={handleInputChange}
                     /> 
                <button className="form-button"  
                        onClick={GetMemeImg}>Get a new meme image</button> 
                <div className="memeImg">
                    <img className="form-img" src={meme.randomImg} alt="background" />
                    <h2 className="img-topText">{meme.TopText}</h2>
                    <h2 className="img-bottomText">{meme.BottomText}</h2>
                </div>   
            </div>    
        </main>
    )
}
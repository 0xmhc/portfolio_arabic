import React from "react";
import IMAGES from "../data/images"
import ImageShadow from "react-image-shadow"
import "react-image-shadow/assets/index.css"

const Gallery = () =>{
    return(
        <div>
            {
                IMAGES.map(Imj=>{
                    return <Image key={Imj.id} src={Imj.image} desc={Imj.description}/>
                })
            }
        </div>
    )
}

const Image = ({src,desc}) =>{
    return <div className="gallery">
        <a href={src} target="_blank">
            <ImageShadow src={src}/>
        </a>
        <p>
            {desc}
        </p>
    </div>
}
export default Gallery
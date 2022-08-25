import { useState } from "react";
import { useEffect } from "react";
import { getGifs} from "../helpers/getGifs";
import { GifItem } from "./gifItem";

export const GifGrid = ({category}) =>{

    const [images,setImages] = useState([]);

    const getImages = async() => {
        const newImages = await(getGifs(category));
        setImages(newImages);
        
    };

    useEffect(() => {
        getImages();
    }, []);


    return (
        <> 
            <h3>{category}</h3>

            <div className="card-grid">
                {   
                    images.map((images) => (
                        <GifItem 
                            key={ images.id }
                            {...images} 
                        />
                    ))   
                }
            </div>
           
        </>
    )

}   

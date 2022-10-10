import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { CounterItem } from "./components/CounterItem";

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Lion']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory])
    };

    return(
        <>
            <div className="container">
                {/* titulo */}
                <h1>GifExpertApp</h1>

                {/* Input */}

                <AddCategory onNewCategory={ onAddCategory } />

                {/* Listado Gif */}

                { categories.map((category) => 
                    <GifGrid key={category} category={category}/>
                )}

                <CounterItem/>
        
            </div>
        </>
    )
}   


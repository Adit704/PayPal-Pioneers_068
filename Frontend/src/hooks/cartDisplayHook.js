import { useState } from "react";

export function useCartDisplay(){
    const [visible, setVisible] = useState("none");
    function cartToggle(){
        setVisible(prev => {
            if(prev == "none") return "block";
            else return "none";
        });
        // console.log()
    }
    
    return [visible, cartToggle]
}
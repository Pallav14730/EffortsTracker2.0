"use client"

import { useState } from "react";
import Tile from "./Tile";
// import Tile from "./Tile";
export default function SideBar(){
    const[isOpen] = useState(true);

    return(
        <div className="min-h-screen ">    
                <div id="external-events" className="">
                    {isOpen && (
                        <Tile />
                    )}
            </div>
        </div>
    )
}
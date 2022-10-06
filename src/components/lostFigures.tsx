import {Figure} from "../models/figures/Figure";
import React from "react";

type LostFiguresProps = {
    title: string
    figures: Figure[]
}

export const LostFigures: React.FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <>
            <h3 style={{margin: "10px 0"}}>{title}</h3>
            {figures.map(element =>
                <div key={element.id}>
                    {element.name}
                    {element.logo && <img width={"25px"} height={"25px"} src={element.logo} alt=""/>}
                </div>
            )}
        </>
    )
}
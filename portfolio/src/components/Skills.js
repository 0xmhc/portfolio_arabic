import React from "react";
import Card from "./elements/Card"
import SKILLS from "../data/skills";

const Skills = () =>{
    return (

        <div>
            <h2>مهاراتي</h2>
            {SKILLS.map((skill)=>
                <Card  key={skill.id} skill={skill} /> 
            )}
        </div>
    )
}
export default Skills;
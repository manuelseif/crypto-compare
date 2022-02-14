import React from 'react'
import "./style.css";

interface IProps { 
    title: any;
    description?: string;
    children?: any
}

const Card = ({title, description, children}: IProps) => {
  return (
    <div className={"glass-card fade-in p-4"} key={title} >
        {title}
        {description}
        <hr />
        {children}
    </div>
  )
}

export default Card;
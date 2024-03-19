import React from 'react';
import "./Card.css";

const Card=(props)=> {
  const classes = "card " + props.className; //"card" se card.css ki style apply ho jaengi or props.className se props ki jaise AddUser.js me <Card className="input"> h to "input" isse apply hogi
  return <div className={classes}>{props.children}</div>; //props.children will give what is passed between opening and closing tag of Card
}

export default Card;

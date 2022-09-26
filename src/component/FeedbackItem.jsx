import Card from "./shared/Card";
import {useContext} from "react";
import {FaTimes} from "react-icons/fa"
import FeedbackContex from "../contex/FeedbackContex";

const FeedbackItem = ({item}) => {
    const {deleteFedback}=useContext(FeedbackContex)
   

    

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close"
            onClick={()=>deleteFedback(item.id)}>
            <FaTimes color="purple"/>
        </button>
        <div className="text-display">{item.text}</div>
       
    </Card>
  )
}

export default FeedbackItem
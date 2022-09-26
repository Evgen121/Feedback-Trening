import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContex = createContext()

export const FeedbackProvider = ({children})=>{
    const [feedback, setFeedback]=useState([
        {
            id:1,
            text:'This item is from context 1',
            rating:10
        },
        {
            id:2,
            text:'This item is from context 2',
            rating:8
        },
        {
            id:3,
            text:'This item is from context 3' ,
            rating:6
        },
    ])


    const addFeedback= (newFeedback)=>{
        newFeedback.id=uuidv4()
        setFeedback([newFeedback, ...feedback])
      }


    const deleteFeedback=(id)=>{
        if(window.confirm('Are you sure you want to delet')){
          setFeedback(feedback.filter((item)=>item.id !==id))
        }
    
      }

    return <FeedbackContex.Provider
     value ={{
        feedback,
        deleteFeedback,
        addFeedback


    }}>
        {children}
    </FeedbackContex.Provider>
}
export default FeedbackContex
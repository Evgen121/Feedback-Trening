import React, {useState, useContext} from 'react'
import FeedbackContex from '../contex/FeedbackContex'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

const FeedbackForm = () => {
    const [text, setText]= useState('')
    const [rating, setRating]= useState(10)
    const [btnDisabled, setBtnDisabled]= useState(true)
    const [message, setMessage]= useState('')

    const {addFeedback}=useContext(FeedbackContex)

    const handleTextChange = (e)=>{
        if(text ===''){
            setBtnDisabled(true)
            setMessage(null)
        }else if (text !== '' && text.trim().length<=10){
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback={
                text,
                rating
            }
         addFeedback(newFeedback)
         setText('')
        }
    }


  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How you rate your with us</h2>
            <RatingSelect select={(rating)=>setRating(rating)}/>
            <div className="input-group">
                <input type='text'
                onChange={handleTextChange}
                value={text}
                placeholder='Write a review'/>
                <Button type='submit'
                isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
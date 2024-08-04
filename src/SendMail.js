import React from 'react'
import "./SendMail.css"
import MinimizeIcon from '@mui/icons-material/Minimize';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';

function SendMail() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm();
    const dispatch = useDispatch();
const onSubmit = (formData) => {
    if (isValid) {

        dispatch(closeSendMessage());
    } else {

        alert("Please enter valid information");
    }
};

  return (
    <div className='sendMail'>

        <div className="sendMail_header">
            <h3>New Message</h3>
            <div className="sendMail_headerIcons">
            <MinimizeIcon className='icon'/>
            <OpenInFullIcon className='icon'/>
            <CloseIcon onClick={()=> dispatch(closeSendMessage())} className='close-icon'/>
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="receiver" type="email" placeholder='To' {...register('receiver', {required: true})}/>
            {errors.receiver && <p className='sendMail_error'>Email is required</p>}
            <input name="subject" type="text" placeholder='Subject' {...register('subject', {required: true})}/> 
            {errors.subject && <p className='sendMail_error'>Subject is required</p>}
            <textarea name='message' rows="15" {...register('message', {required: true})} />
            {errors.message && <p className='sendMail_error'>Message is required</p>}
            

            <div className="sendMail_Options">
                <button  onClick={handleSubmit(onSubmit)} className='send'>Send</button>
            </div>
        </form>
    </div>
  )
}

export default SendMail
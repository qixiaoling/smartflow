import React, {useForm} from "react-hook-form";
import './Contact.css'

function Contact() {
    const {handleSubmit, register} = useForm();

    function onFormSubmit(data) {
        console.log('registered!')
    }

    return (
        <div className='contact-container'>
            <div className='inner-contact-container'>
                <div className='contact-title-container'>
                    <h3>Do you need SmartFlow to help to achieve your Goal?</h3>
                    <h4>Fill in the contact form and let's finish the project together!</h4>
                </div>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <fieldset>
                        <legend>Your information</legend>
                        <div className='contact-element'>
                            <label htmlFor="firstName">
                                First Name :
                                <input
                                    className='element-name'
                                    type='text'
                                    id='firstName'
                                    placeholder='First Name * '
                                    {...register('firstName')}
                                />
                            </label>

                            <label htmlFor="lastName">
                                Last Name :
                                <input
                                    className='element-name'
                                    type='text'
                                    id='lastName'
                                    placeholder='Last Name * '
                                    {...register('lastName')}
                                />
                            </label>
                        </div>
                        <div className='contact-element'>
                            <label htmlFor="organisation">
                                Organisation :
                                <input
                                    className='element'
                                    type='text'
                                    id='organisation'
                                    placeholder='Organisation *'
                                    {...register('organisation')}
                                />
                            </label>
                        </div>
                        <div className='contact-element'>
                            <label htmlFor="email">
                                Email :
                                <input
                                    className='element'
                                    type='email'
                                    id='email'
                                    placeholder='Email *'
                                    {...register('email')}
                                />
                            </label>
                        </div>
                        <div className='contact-element'>
                            <label htmlFor="comments">
                                Comments :
                                <textarea
                                    className='element'
                                    id='comments'
                                    rows='4'
                                    col='30'
                                    placeholder='What can we help you with *'
                                    {...register('comments')}
                                >
                        </textarea>
                            </label>
                        </div>


                    </fieldset>

                </form>
            </div>

        </div>
    )
}

export default Contact
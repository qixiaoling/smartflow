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
                    <h2>Do you need SmartFlow to help to achieve your Goal?</h2>
                    <br />
                    <h4>Fill in the contact form and let's finish the project together!</h4>
                </div>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <fieldset>
                        <legend>Information</legend>
                        <div className='fieldset-above'>
                            <div className='col-left'>
                                <h4>Contact information</h4>
                                <div className='contact-details'>
                                    <i className="fas fa-phone-square-alt"></i>
                                    <p className='detail'>0031 (0) 6 5322 7615</p>
                                </div>
                                <div className='contact-details'>
                                    <i className="far fa-envelope"></i>
                                    <p className='detail'>ericvandoorn@planet.nl</p>
                                </div>
                                <div className='contact-details'>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p className='detail'>Zandbergenlaan 43, Amersfoort, NL</p>
                                </div>
                            </div>
                            <div className='col-right'>
                                <div className='contact-element'>
                                    <div className='form-group'>
                                        <label htmlFor="firstName">
                                            First Name :
                                            <input
                                                type='text'
                                                id='firstName'
                                                placeholder='First Name * '
                                                {...register('firstName')}
                                            />
                                        </label>
                                    </div>
                                    <div className='form-group' style={{marginLeft:'10px'}}>
                                        <label htmlFor="lastName">
                                            Last Name :
                                            <input
                                                type='text'
                                                id='lastName'
                                                placeholder='Last Name * '
                                                {...register('lastName')}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className='contact-element-other'>
                                    <label htmlFor="organisation">
                                        Organisation :
                                        <input
                                            type='text'
                                            id='organisation'
                                            placeholder='Organisation *'
                                            {...register('organisation')}
                                        />
                                    </label>
                                </div>
                                <div className='contact-element-other'>
                                    <label htmlFor="email">
                                        Email :
                                        <input
                                            type='email'
                                            id='email'
                                            placeholder='Email *'
                                            {...register('email')}
                                        />
                                    </label>
                                </div>
                                <div className='contact-element-other'>
                                    <label htmlFor="comments">
                                        Message :
                                        <textarea
                                            id='comments'
                                            rows='4'
                                            col='30'
                                            placeholder='What can we help you with *'
                                            {...register('comments')}
                                        >
                        </textarea>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='fieldset-bottem'>
                            <button type='submit' className='contact-submit'>
                                Submit
                            </button>
                        </div>





                    </fieldset>

                </form>
            </div>

        </div>
    )
}

export default Contact
import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section
        style={{
            background:`url(${appointment})`
        }}
        className="py-10 my-32"
        >
            <div className='text-center '>
                <div className=''>
                    <h4 className='text-primary text-2xl pb-3'>Contact Us</h4>
                    <h3 className='text-4xl pb-10 text-white '>Stay connected with us</h3>
                </div>
                <div className='flex justify-center items-center'>
                    <div class="form-control w-2/4 ">
                        <label class="input-group input-group-vertical mb-2">
                            <input type="text" placeholder="Email Address" class="input input-bordered" />
                        </label>
                        <label class="input-group input-group-vertical mb-2">
                            <input type="text" placeholder="Subject" class="input input-bordered" />
                        </label>
                        <label class="input-group input-group-vertical mb-2 width">
                            <textarea class="textarea textarea-bordered" placeholder="Your Message"></textarea>
                        </label>
                        <div className='pt-5'>
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
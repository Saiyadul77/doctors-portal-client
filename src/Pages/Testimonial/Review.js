import React from 'react';

const Review = ({ testimonial }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{testimonial.comments}</p>
            </div>
            <div>
                <div className='flex items-center ml-5'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5 mb-5 ">
                            <img src={testimonial.img} />
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='text-xl'>{testimonial.name}</h3>
                        <h4>{testimonial.place}</h4>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Review;
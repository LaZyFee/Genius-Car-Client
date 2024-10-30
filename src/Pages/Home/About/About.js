import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-full lg:w-1/2'>
                    <img src={person} alt="Person" className="w-full h-auto rounded-lg shadow-2xl" />
                    <img src={parts} alt="Parts" className="absolute right-5 top-1/10 w-3/5 h-auto border-8 rounded-lg shadow-2xl transform -translate-y-1/2" />
                </div>
                <div className='w-full lg:w-1/2 mt-10'>
                    <p className="text-2xl font-bold text-orange-600">About Us</p>
                    <h1 className="my-5 text-4xl md:text-5xl font-bold leading-snug">
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p className="py-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="py-2">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn btn-primary mt-4">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
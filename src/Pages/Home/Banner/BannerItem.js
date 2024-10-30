import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            {/* Image */}
            <div className="w-full">
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>

            {/* Main Heading */}
            <div className="absolute flex justify-end transform -translate-y-1/2 left-6 md:left-24 top-1/4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight md:leading-snug lg:leading-normal">
                    Affordable <br />
                    Price for Car <br />
                    Servicing
                </h1>
            </div>

            {/* Description */}
            <div className="absolute flex justify-end transform -translate-y-1/2 w-4/5 md:w-2/5 left-6 md:left-24 top-1/2 my-5">
                <p className="text-base md:text-lg lg:text-xl text-white">
                    There are many variations of passages of available, but the majority have suffered alteration in some form
                </p>
            </div>

            {/* Buttons */}
            <div className="absolute flex justify-start transform -translate-y-1/2 w-4/5 md:w-2/5 left-6 md:left-24 top-3/4 space-x-3 my-5">
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-outline btn-warning">More Details</button>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 w-full px-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;

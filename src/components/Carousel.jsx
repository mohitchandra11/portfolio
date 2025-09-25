import React from 'react';

const Carousel = ({ items }) => (
    <div className="relative">
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
            {items}
        </div>
    </div>
);

export default Carousel;

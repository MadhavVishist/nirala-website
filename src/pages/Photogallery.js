// src/pages/PhotoGallery.js
import React, { useState } from 'react';
import picture1 from '../assets/picture1.jpg';
import picture2 from '../assets/picture2.jpg';
import picture3 from '../assets/picture3.jpg';
import picture4 from '../assets/picture4.jpg';
import picture5 from '../assets/picture5.jpg';
import picture6 from '../assets/picture6.jpg';
import handwriting1 from '../assets/handwriting1.jpg';
import handwriting2 from '../assets/handwriting2.jpg';
import handwriting3 from '../assets/handwriting3.jpg';
import handwriting4 from '../assets/handwriting4.jpg';
import handwriting5 from '../assets/handwriting5.jpg';
import handwriting6 from '../assets/handwriting6.jpg';

const images = [
    picture1, picture2, picture3, picture4, picture5, picture6,
   
];

const PhotoGallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="min-h-screen flex flex-col items-center  py-12 px-4">
            <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-8">
                Photo Gallery
            </h1>
            <p className="text-lg text-gray-600 mb-12">
                A collection of images celebrating the life and works of Suryakant Tripathi Nirala.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {images.map((image, index) => (
                    <div key={index} className="relative overflow-hidden group rounded-lg shadow-lg transition-transform duration-300 ease-in-out">
                        <img
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        />
                        {/* View Image Button */}
                        <button 
                            onClick={() => openModal(index)}
                            className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 mx-auto text-white rounded-lg px-4 py-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        >
                            View Image
                        </button>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative max-w-4xl w-full h-auto flex flex-col items-center justify-center">
                        <img
                            src={images[currentImageIndex]}
                            alt={`Current Image ${currentImageIndex + 1}`}
                            className="max-w-full max-h-[90vh] object-contain cursor-pointer" // Adjusted to max height
                            onClick={closeModal} // Close modal when clicked
                        />
                        <button 
                            onClick={closeModal}
                            className="absolute top-4 left-4 bg-red-600 text-white rounded-full p-2 transition-transform duration-300 hover:scale-110"
                        >
                            Back
                        </button>
                        <button 
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 transition-transform duration-300 hover:scale-110"
                        >
                            &lt; Previous
                        </button>
                        <button 
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 transition-transform duration-300 hover:scale-110"
                        >
                            Next &gt;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhotoGallery;

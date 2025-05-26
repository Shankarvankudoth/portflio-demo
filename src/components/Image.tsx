import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
// import AwsImg from '../assets/aws.png';

interface ImageProps {
    onClose: () => void;
    imgSrc:string;
}

const Image: React.FC<ImageProps> = ({ onClose, imgSrc }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-75"
            >
                ×
            </button>

            {/* Image */}
            <div className='w-2/4'>
                <img
                src={imgSrc}
                alt="Not found"
                className="max-w-full max-h-full object-contain"
            />
            </div>
        </div>,
        document.body
    );
};

export default Image;

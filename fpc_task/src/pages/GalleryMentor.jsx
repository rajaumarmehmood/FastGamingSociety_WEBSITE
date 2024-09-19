import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import NavbarMentor from './NavbarMentor';
import './GalleryMentor.css';

const GalleryMentor = () => {
    const [images, setImages] = useState([]);

    const fetchImages = async () => {
        const imagesRef = collection(firestore, 'gallery');
        const imageDocs = await getDocs(imagesRef);
        const fetchedImages = imageDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setImages(fetchedImages);
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleDownload = async (url, title) => {
        const response = await fetch(url);
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <NavbarMentor />
            <div className="gallery-container">
                <h2>Gallery</h2>
                <div className="gallery-grid">
                    {images.map(image => (
                        <div key={image.id} className="gallery-item">
                            <img src={image.url} alt={image.title} />
                            <p>{image.title}</p>
                            <button
                                onClick={() => handleDownload(image.url, image.title)}
                                className="download-btn"
                            >
                                Download
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default GalleryMentor;

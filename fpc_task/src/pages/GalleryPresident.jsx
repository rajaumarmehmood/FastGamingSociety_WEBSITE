// // // // // // import React from 'react';
// // // // // // import './GalleryPresident.css';

// // // // // // const GalleryPresident = () => {
// // // // // //     return (
// // // // // //         <div className="gallery-container">
// // // // // //             <h2>Gallery</h2>
// // // // // //             {/* Add your gallery content here */}
// // // // // //             <p>Here you can add images or a gallery component.</p>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default GalleryPresident;
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { storage, firestore } from '../firebase';
// // // // // import { ref, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage';
// // // // // import { collection, addDoc, getDocs, Timestamp } from 'firebase/firestore';
// // // // // import Navbar from './NavbarPresident';
// // // // // import './GalleryPresident.css';

// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { storage, firestore } from '../firebase';  // Correct imports
// // // // // // import { Timestamp } from 'firebase/firestore';
// // // // // // import { ref, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage';
// // // // // // import { collection, addDoc, getDocs } from 'firebase/firestore';
// // // // // // import './GalleryPresident.css';


// // // // // const GalleryPresident = () => {
// // // // //     const [images, setImages] = useState([]);
// // // // //     const [imageFile, setImageFile] = useState(null);
// // // // //     const [imageTitle, setImageTitle] = useState("");

// // // // //     useEffect(() => {
// // // // //         const fetchImages = async () => {
// // // // //             const galleryCollection = collection(firestore, 'gallery');
// // // // //             const gallerySnapshot = await getDocs(galleryCollection);
// // // // //             const galleryList = gallerySnapshot.docs.map(doc => ({
// // // // //                 id: doc.id,
// // // // //                 ...doc.data()
// // // // //             }));
// // // // //             setImages(galleryList);
// // // // //         };

// // // // //         fetchImages();
// // // // //     }, []);

// // // // //     const handleImageUpload = async () => {
// // // // //         if (!imageFile || !imageTitle) return;
// // // // //         const storageRef = ref(storage, `gallery/${imageFile.name}`);
// // // // //         const uploadTask = uploadBytesResumable(storageRef, imageFile);

// // // // //         uploadTask.on(
// // // // //             'state_changed',
// // // // //             snapshot => {
// // // // //                 // Handle upload progress here if needed
// // // // //             },
// // // // //             error => {
// // // // //                 console.error("Upload failed", error);
// // // // //             },
// // // // //             async () => {
// // // // //                 const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
// // // // //                 await addDoc(collection(firestore, 'gallery'), {
// // // // //                     title: imageTitle,
// // // // //                     imageUrl: downloadURL,
// // // // //                     createdAt: Timestamp.now()
// // // // //                 });
// // // // //                 // Fetch images again to update the gallery
// // // // //                 const galleryCollection = collection(firestore, 'gallery');
// // // // //                 const gallerySnapshot = await getDocs(galleryCollection);
// // // // //                 const galleryList = gallerySnapshot.docs.map(doc => ({
// // // // //                     id: doc.id,
// // // // //                     ...doc.data()
// // // // //                 }));
// // // // //                 setImages(galleryList);
// // // // //                 // Reset form
// // // // //                 setImageFile(null);
// // // // //                 setImageTitle("");
// // // // //             }
// // // // //         );
// // // // //     };

// // // // //     return (
// // // // //         <>
// // // // //             <Navbar />
// // // // //             <div className="gallery-container">
// // // // //                 <h2>Gallery</h2>
// // // // //                 <div className="gallery-grid">
// // // // //                     {images.map(image => (
// // // // //                         <div key={image.id} className="gallery-item">
// // // // //                             <img src={image.imageUrl} alt={image.title} />
// // // // //                             <p>{image.title}</p>
// // // // //                         </div>
// // // // //                     ))}
// // // // //                 </div>
// // // // //                 <div className="upload-form">
// // // // //                     <input
// // // // //                         type="text"
// // // // //                         placeholder="Image Title"
// // // // //                         value={imageTitle}
// // // // //                         onChange={(e) => setImageTitle(e.target.value)}
// // // // //                     />
// // // // //                     <input
// // // // //                         type="file"
// // // // //                         onChange={(e) => setImageFile(e.target.files[0])}
// // // // //                     />
// // // // //                     <button onClick={handleImageUpload}>Upload Image</button>
// // // // //                 </div>
// // // // //             </div>
// // // // //         </>
// // // // //     );
// // // // // };

// // // // // export default GalleryPresident;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { storage, firestore } from '../firebase'; // Make sure to import storage and firestore from your firebase setup
// // // // import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
// // // // import { collection, getDocs, addDoc } from "firebase/firestore";
// // // // import './GalleryPresident.css';

// // // // const GalleryPresident = () => {
// // // //     const [images, setImages] = useState([]);
// // // //     const [uploadImage, setUploadImage] = useState(null);
// // // //     const [title, setTitle] = useState('');

// // // //     const fetchImages = async () => {
// // // //         const imagesRef = collection(firestore, 'gallery');
// // // //         const imageDocs = await getDocs(imagesRef);
// // // //         const fetchedImages = imageDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // //         setImages(fetchedImages);
// // // //     };

// // // //     useEffect(() => {
// // // //         fetchImages();
// // // //     }, []);

// // // //     const handleUpload = async () => {
// // // //         if (uploadImage == null || title === '') return;
// // // //         const imageRef = ref(storage, `gallery/${uploadImage.name}`);
// // // //         await uploadBytes(imageRef, uploadImage);
// // // //         const imageUrl = await getDownloadURL(imageRef);

// // // //         await addDoc(collection(firestore, 'gallery'), {
// // // //             title: title,
// // // //             url: imageUrl,
// // // //         });

// // // //         setUploadImage(null);
// // // //         setTitle('');
// // // //         fetchImages(); // Refresh the image list after uploading
// // // //     };

// // // //     return (
// // // //         <div className="gallery-container">
// // // //             <h2>Upload New Image</h2>
// // // //             <input
// // // //                 type="text"
// // // //                 placeholder="Enter title"
// // // //                 value={title}
// // // //                 onChange={(e) => setTitle(e.target.value)}
// // // //                 required
// // // //             />
// // // //             <input
// // // //                 type="file"
// // // //                 onChange={(e) => setUploadImage(e.target.files[0])}
// // // //             />
// // // //             <button onClick={handleUpload}>Upload</button>

// // // //             <div className="gallery-grid">
// // // //                 {images.map(image => (
// // // //                     <div key={image.id} className="gallery-item">
// // // //                         <img src={image.url} alt={image.title} />
// // // //                         <p>{image.title}</p>
// // // //                     </div>
// // // //                 ))}
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default GalleryPresident;
// // // import React, { useState, useEffect } from 'react';
// // // import { storage, firestore } from '../firebase'; // Ensure these imports match your Firebase setup
// // // import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
// // // import { collection, getDocs, addDoc } from "firebase/firestore";
// // // import './GalleryPresident.css';

// // // const GalleryPresident = () => {
// // //     const [images, setImages] = useState([]);
// // //     const [uploadImage, setUploadImage] = useState(null);
// // //     const [title, setTitle] = useState('');

// // //     const fetchImages = async () => {
// // //         const imagesRef = collection(firestore, 'gallery');
// // //         const imageDocs = await getDocs(imagesRef);
// // //         const fetchedImages = imageDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // //         setImages(fetchedImages);
// // //     };

// // //     useEffect(() => {
// // //         fetchImages();
// // //     }, []);

// // //     const handleUpload = async () => {
// // //         if (uploadImage == null || title === '') return;
// // //         const imageRef = ref(storage, `gallery/${uploadImage.name}`);
// // //         await uploadBytes(imageRef, uploadImage);
// // //         const imageUrl = await getDownloadURL(imageRef);

// // //         await addDoc(collection(firestore, 'gallery'), {
// // //             title: title,
// // //             url: imageUrl,
// // //         });

// // //         setUploadImage(null);
// // //         setTitle('');
// // //         fetchImages(); // Refresh the image list after uploading
// // //     };

// // //     return (
// // //         <div className="gallery-container">
// // //             <h2>Upload New Image</h2>
// // //             <input
// // //                 type="text"
// // //                 placeholder="Enter title"
// // //                 value={title}
// // //                 onChange={(e) => setTitle(e.target.value)}
// // //                 required
// // //             />
// // //             <input
// // //                 type="file"
// // //                 onChange={(e) => setUploadImage(e.target.files[0])}
// // //             />
// // //             <button onClick={handleUpload}>Upload</button>

// // //             <div className="gallery-grid">
// // //                 {images.map(image => (
// // //                     <div key={image.id} className="gallery-item">
// // //                         <img src={image.url} alt={image.title} />
// // //                         <p>{image.title}</p>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default GalleryPresident;
// // import React, { useState, useEffect } from 'react';
// // import { storage, firestore } from '../firebase'; // Make sure to import storage and firestore from your firebase setup
// // import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
// // import { collection, getDocs, addDoc } from "firebase/firestore";
// // import './GalleryPresident.css';

// // const GalleryPresident = () => {
// //     const [images, setImages] = useState([]);
// //     const [uploadImage, setUploadImage] = useState(null);
// //     const [title, setTitle] = useState('');

// //     const fetchImages = async () => {
// //         const imagesRef = collection(firestore, 'gallery');
// //         const imageDocs = await getDocs(imagesRef);
// //         const fetchedImages = imageDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //         setImages(fetchedImages);
// //     };

// //     useEffect(() => {
// //         fetchImages();
// //     }, []);

// //     const handleUpload = async () => {
// //         if (uploadImage == null || title === '') return;
// //         const imageRef = ref(storage, `gallery/${uploadImage.name}`);
// //         await uploadBytes(imageRef, uploadImage);
// //         const imageUrl = await getDownloadURL(imageRef);

// //         await addDoc(collection(firestore, 'gallery'), {
// //             title: title,
// //             url: imageUrl,
// //         });

// //         setUploadImage(null);
// //         setTitle('');
// //         fetchImages(); // Refresh the image list after uploading
// //     };

// //     const handleDownload = (url) => {
// //         const link = document.createElement('a');
// //         link.href = url;
// //         link.download = url.substring(url.lastIndexOf('/') + 1);
// //         document.body.appendChild(link);
// //         link.click();
// //         document.body.removeChild(link);
// //     };

// //     return (
// //         <div className="gallery-container">
// //             <h2>Upload New Image</h2>
// //             <input
// //                 type="text"
// //                 placeholder="Enter title"
// //                 value={title}
// //                 onChange={(e) => setTitle(e.target.value)}
// //                 required
// //             />
// //             <input
// //                 type="file"
// //                 onChange={(e) => setUploadImage(e.target.files[0])}
// //             />
// //             <button onClick={handleUpload}>Upload</button>

// //             <div className="gallery-grid">
// //                 {images.map(image => (
// //                     <div key={image.id} className="gallery-item">
// //                         <img src={image.url} alt={image.title} />
// //                         <p>{image.title}</p>
// //                         <button className="download-btn" onClick={() => handleDownload(image.url)}>Download</button>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default GalleryPresident;
// import React, { useState, useEffect } from 'react';
// import { storage, firestore } from '../firebase';
// import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
// import { collection, getDocs, addDoc } from "firebase/firestore";
// import './GalleryPresident.css';

// const GalleryPresident = () => {
//     const [images, setImages] = useState([]);
//     const [uploadImage, setUploadImage] = useState(null);
//     const [title, setTitle] = useState('');
//     const [enlargedImage, setEnlargedImage] = useState(null);

//     const fetchImages = async () => {
//         const imagesRef = collection(firestore, 'gallery');
//         const imageDocs = await getDocs(imagesRef);
//         const fetchedImages = imageDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setImages(fetchedImages);
//     };

//     useEffect(() => {
//         fetchImages();
//     }, []);

//     const handleUpload = async () => {
//         if (uploadImage == null || title === '') return;
//         const imageRef = ref(storage, `gallery/${uploadImage.name}`);
//         await uploadBytes(imageRef, uploadImage);
//         const imageUrl = await getDownloadURL(imageRef);

//         await addDoc(collection(firestore, 'gallery'), {
//             title: title,
//             url: imageUrl,
//         });

//         setUploadImage(null);
//         setTitle('');
//         fetchImages(); // Refresh the image list after uploading
//     };

//     const handleDownload = (url) => {
//         const link = document.createElement('a');
//         link.href = url;
//         link.download = url.substring(url.lastIndexOf('/') + 1);
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     const handleImageClick = (image) => {
//         setEnlargedImage(image);
//     };

//     const handleCloseEnlarged = () => {
//         setEnlargedImage(null);
//     };

//     return (
//         <div className="gallery-container">
//             <h2>Upload New Image</h2>
//             <input
//                 type="text"
//                 placeholder="Enter title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//             />
//             <input
//                 type="file"
//                 onChange={(e) => setUploadImage(e.target.files[0])}
//             />
//             <button onClick={handleUpload}>Upload</button>

//             <div className="gallery-grid">
//                 {images.map(image => (
//                     <div key={image.id} className="gallery-item">
//                         <img src={image.url} alt={image.title} onClick={() => handleImageClick(image)} />
//                         <p>{image.title}</p>
//                         <button className="download-btn" onClick={() => handleDownload(image.url)}>Download</button>
//                     </div>
//                 ))}
//             </div>

//             {enlargedImage && (
//                 <div className="enlarged" onClick={handleCloseEnlarged}>
//                     <img src={enlargedImage.url} alt={enlargedImage.title} />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default GalleryPresident;
import React, { useState, useEffect } from 'react';
import { storage, firestore } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, getDocs, addDoc } from "firebase/firestore";
import NavbarPresident from './NavbarPresident';
import './GalleryPresident.css';

const GalleryPresident = () => {
    const [images, setImages] = useState([]);
    const [uploadImage, setUploadImage] = useState(null);
    const [title, setTitle] = useState('');

    const fetchImages = async () => {
        const imagesRef = collection(firestore, 'gallery');
        const imageDocs = await getDocs(imagesRef);
        const fetchedImages = imageDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setImages(fetchedImages);
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleUpload = async () => {
        if (uploadImage == null || title === '') return;
        const imageRef = ref(storage, `gallery/${uploadImage.name}`);
        await uploadBytes(imageRef, uploadImage);
        const imageUrl = await getDownloadURL(imageRef);

        await addDoc(collection(firestore, 'gallery'), {
            title: title,
            url: imageUrl,
        });

        setUploadImage(null);
        setTitle('');
        fetchImages(); // Refresh the image list after uploading
    };

    const handleDownload = async (url, title) => {
        console.log('URLLLL', url);
        const response = await fetch(url);
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    // const handleDownload = async (url, title) => {
    //     try {
    //         // Create a hidden anchor element
    //         const link = document.createElement('a');
    //         link.href = url;
    //         link.download = title;

    //         // Append to the document, trigger click, and remove
    //         document.body.appendChild(link);
    //         link.click();
    //         document.body.removeChild(link);
    //     } catch (error) {
    //         console.error('Error downloading the image:', error);
    //     }
    // };


    return (
        <>
            <NavbarPresident />
            <div className="gallery-container">
                <h2>Upload New Image</h2>
                <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setUploadImage(e.target.files[0])}
                />
                <button onClick={handleUpload}>Upload</button>

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

export default GalleryPresident;

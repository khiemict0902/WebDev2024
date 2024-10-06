import React, { useState } from 'react';
import './Write.css';

function Write() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            title,
            category,
            content,
            image,
        });
    };

    return (
        <div className="write-container">
            <h1 class="Write-New-Blog">Write a New Blog Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter your blog title"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select a category</option>
                        <option value="Tech">Tech</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Education">Education</option>
                        <option value="Travel">Travel</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="image">Upload Image</label>
                    <input type="file" id="image" onChange={handleImageUpload} />
                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="Blog Preview"
                            className="image-preview"
                        />
                    )}
                </div>

            
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="10"
                        placeholder="Write your blog content here..."
                        required
                    />
                </div>

          
                <button type="submit" className="publish-button">Publish Blog</button>
            </form>
        </div>
    );
}

export default Write;

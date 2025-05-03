'use client'

import { useState } from 'react';
import { X, Calendar, Upload, Loader2 } from 'lucide-react';

export default function FormLayout() {
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    author: '',
    category: '',
    content: '',
    excerpt: '',
    tags: [],
    publishDate: '',
    status: 'draft',
    featured: false,
    allowComments: true,
    coverImage: null,
    metaDescription: '',
    metaKeywords: '',
  });

  // UI states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [currentTag, setCurrentTag] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Add a tag
  const addTag = () => {
    if (currentTag.trim() !== '' && !formData.tags.includes(currentTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, currentTag.trim()],
      });
      setCurrentTag('');
    }
  };

  // Remove a tag
  const removeTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove),
    });
  };

  // Handle tag input keypress
  const handleTagKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      // Create FormData object for file uploads
      const submitData = new FormData();
      
      // Append all form fields to FormData
      Object.keys(formData).forEach(key => {
        if (key === 'coverImage' && formData[key]) {
          submitData.append(key, formData[key]);
        } else if (key === 'tags') {
          submitData.append(key, JSON.stringify(formData[key]));
        } else {
          submitData.append(key, formData[key]);
        }
      });

      // Dummy API call simulation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful API response
      console.log('Form data submitted:', formData);
      setMessage({ 
        type: 'success', 
        text: 'Blog post created successfully!' 
      });
      
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage({ 
        type: 'error', 
        text: error.message || 'An error occurred while creating the blog post' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Create New Blog Post</h1>
      
      {message.text && (
        <div className={`p-4 mb-6 rounded-md ${
          message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {message.text}
        </div>
      )}
      
      <div className="space-y-6">
        {/* Text Input - Title */}
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter blog title"
          />
        </div>
        
        {/* Text Input - Slug */}
        <div className="space-y-2">
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
            Slug <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            required
            value={formData.slug}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="enter-url-friendly-slug"
          />
        </div>
        
        {/* Select Dropdown - Category */}
        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select a category</option>
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="health">Health</option>
          </select>
        </div>
        
        {/* Textarea - Content */}
        <div className="space-y-2">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content <span className="text-red-600">*</span>
          </label>
          <textarea
            id="content"
            name="content"
            required
            value={formData.content}
            onChange={handleChange}
            rows={8}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Write your blog content here..."
          ></textarea>
        </div>
        
        {/* Textarea - Excerpt */}
        <div className="space-y-2">
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
            Excerpt
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="A short summary of your blog post"
          ></textarea>
        </div>
        
        {/* Tags Input */}
        <div className="space-y-2">
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="current-tag"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              onKeyPress={handleTagKeyPress}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Add a tag"
            />
            <button
              type="button"
              onClick={addTag}
              className="px-4 py-2 bg-red-600 text-white rounded-r-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="ml-1 inline-flex text-red-600 focus:outline-none"
                >
                  <X size={16} />
                </button>
              </span>
            ))}
          </div>
        </div>
        
        {/* Date Input */}
        <div className="space-y-2">
          <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700">
            Publish Date
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={20} className="text-gray-400" />
            </div>
            <input
              type="date"
              id="publishDate"
              name="publishDate"
              value={formData.publishDate}
              onChange={handleChange}
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
        
        {/* Radio Buttons - Status */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="draft"
                name="status"
                value="draft"
                checked={formData.status === 'draft'}
                onChange={handleChange}
                className="h-4 w-4 text-red-600 focus:ring-red-500"
              />
              <label htmlFor="draft" className="ml-2 text-sm text-gray-700">
                Draft
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="published"
                name="status"
                value="published"
                checked={formData.status === 'published'}
                onChange={handleChange}
                className="h-4 w-4 text-red-600 focus:ring-red-500"
              />
              <label htmlFor="published" className="ml-2 text-sm text-gray-700">
                Published
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="archived"
                name="status"
                value="archived"
                checked={formData.status === 'archived'}
                onChange={handleChange}
                className="h-4 w-4 text-red-600 focus:ring-red-500"
              />
              <label htmlFor="archived" className="ml-2 text-sm text-gray-700">
                Archived
              </label>
            </div>
          </div>
        </div>
        
        {/* Checkboxes */}
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="h-4 w-4 text-red-600 focus:ring-red-500 rounded"
            />
            <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
              Featured post
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="allowComments"
              name="allowComments"
              checked={formData.allowComments}
              onChange={handleChange}
              className="h-4 w-4 text-red-600 focus:ring-red-500 rounded"
            />
            <label htmlFor="allowComments" className="ml-2 text-sm text-gray-700">
              Allow comments
            </label>
          </div>
        </div>
        
        {/* File Upload - Cover Image */}
        <div className="space-y-2">
          <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">
            Cover Image
          </label>
          <div className="flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload size={24} className="mx-auto text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="coverImage"
                  className="relative cursor-pointer rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500"
                >
                  <span>Upload a file</span>
                  <input 
                    id="coverImage" 
                    name="coverImage" 
                    type="file" 
                    accept="image/*"
                    onChange={handleChange}
                    className="sr-only" 
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
          {formData.coverImage && (
            <p className="mt-2 text-sm text-gray-500">
              Selected file: {formData.coverImage.name}
            </p>
          )}
        </div>
        
        {/* SEO Fields */}
        <div className="pt-6 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-red-700 mb-4">SEO Settings</h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700">
                Meta Description
              </label>
              <textarea
                id="metaDescription"
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Brief description for search engines"
              ></textarea>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="metaKeywords" className="block text-sm font-medium text-gray-700">
                Meta Keywords
              </label>
              <input
                type="text"
                id="metaKeywords"
                name="metaKeywords"
                value={formData.metaKeywords}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Comma-separated keywords"
              />
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="pt-4">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 size={20} className="animate-spin mr-2" />
                Submitting...
              </span>
            ) : (
              'Create Blog Post'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
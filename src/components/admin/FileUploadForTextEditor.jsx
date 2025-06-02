"use client"

import React, { useState } from 'react';
import { Upload, X, File } from 'lucide-react';

const FileUploadForTextEditor = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  // Simulate file upload to backend
  const handleFileUpload = async (file) => {
    setIsUploading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate backend response with file URL
    const mockFileUrl = `${process.env.NEXT_PUBLIC_META_BASE_URL}/files/${file.name.replace(/\s+/g, '-').toLowerCase()}`;
    
    const newFile = {
      id: Date.now(), // Simple ID generation
      name: file.name,
      url: mockFileUrl,
      size: file.size
    };
    
    setUploadedFiles(prev => [...prev, newFile]);
    setIsUploading(false);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
    // Reset input value to allow selecting the same file again
    event.target.value = '';
  };

  const handleDelete = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">File Upload</h2>
      
      {/* Upload Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors mb-4">
        <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
        <label htmlFor="file-input" className="cursor-pointer">
          <span className="text-sm font-medium text-gray-700">
            Click to upload file
          </span>
          <input
            id="file-input"
            type="file"
            className="hidden"
            onChange={handleFileSelect}
            disabled={isUploading}
          />
        </label>
      </div>

      {/* Loading State */}
      {isUploading && (
        <div className="text-center py-4 mb-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mx-auto mb-2"></div>
          <p className="text-sm text-gray-600">Uploading...</p>
        </div>
      )}

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">Uploaded Files ({uploadedFiles.length})</h3>
          {uploadedFiles.map((file) => (
            <div key={file.id} className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <File className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">{file.name}</p>
                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(file.id)}
                  className="p-1 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <div className="p-2 bg-white rounded border">
                <p className="text-xs text-gray-500 mb-1">URL:</p>
                <p className="text-xs text-blue-600 break-all font-mono">
                  {file.url}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {uploadedFiles.length === 0 && !isUploading && (
        <p className="text-center text-sm text-gray-500">No files uploaded yet</p>
      )}
    </div>
  );
};

export default FileUploadForTextEditor;
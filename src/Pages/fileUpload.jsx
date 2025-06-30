import { createClient } from '@supabase/supabase-js';
import React, { useState } from 'react';

// Initialize Supabase client
const supabase = createClient(
  'https://viuyqowdcojuzxnsmeal.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpdXlxb3dkY29qdXp4bnNtZWFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NzgxMDQsImV4cCI6MjA2NDM1NDEwNH0.RuFpIAql2NHMrlcpXm2IxIIdBqE3Xfhi3sGYtqaGL9Y'
);

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [imageURL, setImageURL] = useState(''); // 🔧 this will hold the public image URL

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage('');
    setImageURL('');
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `images/${fileName}`;

    const { data, error } = await supabase.storage
      .from('images') // Make sure this is your bucket name
      .upload(filePath, file);
console.log(data)
    setUploading(false);

    if (error) {
      console.error('Upload error:', error.message);
      setMessage('Upload failed.');
    } else {
      const publicURL = `https://viuyqowdcojuzxnsmeal.supabase.co/storage/v1/object/public/images/${filePath}`;
      setImageURL(publicURL); // ✅ Save it in state for display/use
      setMessage('Upload successful!');
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-xl shadow-md w-full max-w-md mx-auto">
      <input
        type="file"
        onChange={handleFileChange}
        className="file-input file-input-bordered w-full"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow"
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {message && <p className="text-sm text-center text-gray-700">{message}</p>}

      {imageURL && (
        <div className="text-center">
          <p className="text-green-600 font-medium">Image URL:</p>
          <a href={imageURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {imageURL}
          </a>
          <img src={imageURL} alt="Uploaded" className="mt-2 max-h-60 object-contain" />
        </div>
      )}
    </div>
  );
};

export default FileUpload;

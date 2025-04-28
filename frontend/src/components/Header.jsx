import Logo from '../assets/images/aiplanetLogo.png';
import pdfIcon from '../assets/images/pdfIcon.png';
import upload from '../assets/images/upload.png';
import '../index.css';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Header(){
  const [file, setFile] = useState(null);

  const handleFileChange = async(e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      toast.error('Only PDF files are allowed!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://askme-ai-o3jk.onrender.com/upload_pdf/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.detail || 'Something went wrong during upload.');
    }
  };

    return(
      <header className="sticky top-0 flex flex-row justify-between items-center p-4 bg-white shadow-md text-white">
      <div>
      <img src={Logo} alt="Logo" className="h-auto w-auto" />
      </div>
      <div className="flex flex-row items-center ml-8">
      <div className="flex flex-row items-center">
      <button onClick={() => document.getElementById('fileInput').click()} >
      <img src={pdfIcon} alt="PDF Icon" className="h-8 w-8  mr-2" />
      </button>
      <h1 className="text-sm w-24 truncate overflow-hidden text-green-400 font-xl font-bold "> 
      { file ?`${file.name}` :'select pdf'}</h1>
      </div>
      <div className="flex ml-2 space-x-4">
      
      <button 
      onClick={async() => {
      if (!file) {
        toast.error('Please select a file first!');
        return;
      }
      await  handleUpload();
      }}
      className="bg-white font-bold flex items-center text-gray-800 px-2 py-2 sm:px-8 sm:py-2 border border-black-2px rounded-lg hover:cursor-pointer hover:border-gray-400"
      >
      <img src={upload} alt="+" className="h-4 w-4 inline" />
      <span className='hidden sm:inline ml-2'>Upload PDF</span>
      </button>
      <input 
      id="fileInput" 
      type="file" 
      onChange={handleFileChange} 
      style={{ display: 'none' }} 
      />
      </div>
      </div>
      </header>
    )
}
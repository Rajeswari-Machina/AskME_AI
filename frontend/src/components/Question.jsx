import sendIcon from '../assets/images/sendIcon.png';
import '../index.css';
import {useState} from 'react';
import toast from 'react-toastify';
import axios from 'axios';
export default  function Question(){
  const [question, setQuestion] = useState('');
  const saveResponseToLocalStorage = (response) => {
    const existingResponses = JSON.parse(localStorage.getItem('responses')) || [];
    existingResponses.push(response);
    localStorage.setItem('responses', JSON.stringify(existingResponses));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (question.trim() === '') {
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/ask/', null, {
        params: { question: question }, 
        headers: {
            'Content-Type': 'application/json',
        },
    });
      console.log(response);
      saveResponseToLocalStorage(response.result);
        
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.detail || 'Something went wrong during upload.');
    }
    setQuestion('');
  }
    return(
          <div className="flex flex-row items-center bg-white shadow-md focus:border border-gray-500 ml-10 mr-10 mb-6 mt-8">
            <input
              type="text"
              value={question}
              onChange={ (e) => setQuestion(e.target.value)}
              className="flex-grow px-4 py-2 focus:outline-none rounded-l "
              placeholder="Send a Message..."
            />
            <button
              onClick={handleSubmit}
              className=" text-black px-4 py-2 rounded-r hover:text-green-600 flex items-center">
              <img src={sendIcon} alt="Send" className="h-auto w-auto inline mr-2" />
              </button>
          </div>
    )
}
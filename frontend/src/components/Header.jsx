import Logo from '../assets/images/aiplanetLogo.png';
import pdfIcon from '../assets/images/pdfIcon.png';
import upload from '../assets/images/upload.png';
import '../index.css';
export default function Header(){
    return(
      <header className="flex flex-row justify-between items-center p-4 bg-white shadow-md text-white">
      <div>
      <img src={Logo} alt="Logo" className="h-auto w-auto" />
      </div>
      <div className="flex flex-row items-center ml-8">
        <div className="flex flex-row items-center">
        <img src={pdfIcon} alt="PDF Icon" className="h-8 w-8 mr-2" />
        <h1 className="text-sm text-green-400 font-bold ">name.pdf</h1>
        </div>
        <div className="flex ml-8 space-x-4">
        <button className="bg-white font-bold flex items-center text-gray-800 px-2 py-2 sm:px-8 sm:py-2 border border-black-2px rounded-lg hover:cursor-pointer hover:border-gray-400">
        <img src={upload} alt="+" className="h-4 w-4 inline" />
        <span className='hidden sm:inline ml-2'>Upload PDF</span>
        </button>
        </div>
      </div>
      </header>
    )
}
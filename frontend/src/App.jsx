import Header from './components/Header';
import ConversationBox from './components/ConversationBox';
import Question from './components/Question';
import { ToastContainer } from 'react-toastify';
import './index.css';
function App() {
  return (
    <>
      <Header />
      <div className="content p-4">
        <ConversationBox />
      </div>
      <div className=" fixed bottom-0 w-full ">
        <Question />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </>
  )
}

export default App

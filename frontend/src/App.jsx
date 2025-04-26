import Header from './components/Header';
import ConversationBox from './components/ConversationBox';
import Question from './components/Question';
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
    </>
  )
}

export default App

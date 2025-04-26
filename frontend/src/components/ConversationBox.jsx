import miniaiLogo from '../assets/images/miniaiLogo.png';
// import user from '../assets/images/user.png';
import '../index.css';
export default function ConversationBox() {
  return (
    <div className="flex flex-row bg-white items-start justify-center p-4">
      <img src={miniaiLogo} alt="Logo" className="h-auto w-auto mr-4" />
      <div className="text-lg flex flex-wrap text-gray-800  leading-relaxed">
        Our own Large Language Model (LLM) is a type of AI that can learn from data. We have trained it on 7 billion parameters, which makes it better than other LLMs. 
        We are featured on aiplanet.com and work with leading enterprises to help them use AI securely and privately. We have a Generative AI Stack that helps reduce hallucinations in LLMs and allows enterprises to use AI in their applications.
      </div>
    </div>
  );
}
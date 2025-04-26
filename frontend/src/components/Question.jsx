import sendIcom from '../assets/images/sendIcon.png';
export default  function Question(){
    return(
          <form className="flex flex-row items-center bg-white shadow-md focus:border border-gray-500 ml-10 mr-10 mb-6 mt-8">
            <input
              type="text"
              className="flex-grow px-4 py-2 focus:outline-none rounded-l "
              placeholder="Send a Message..."
            />
            <button
              type="submit"
              className=" text-black px-4 py-2 rounded-r hover:text-green-600 flex items-center">
              <img src={sendIcom} alt="Send" className="h-auto w-auto inline mr-2" />
              </button>
          </form>
    )
}
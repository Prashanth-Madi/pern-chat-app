import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import Conversation from '../sidebar/Conversation';



const Messages = () => {
    const {loading,messages}=useGetMessages();


  return (
    <div className='px-4 flex-1 overflow-auto '>
      {
        loading&&(<MessageSkeleton/>)
      }
      {
         messages.length? messages.map((message)=>(
          <Message key={message.id} message={message}/>
        )):(<p className="text-center text-black flex flex-col items-center justify-center">Send a Message to start a Conversation</p>)
      }
      
      
    </div>
  )
}

export default Messages

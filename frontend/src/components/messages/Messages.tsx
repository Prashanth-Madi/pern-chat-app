import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

import useListenMessages from "../../hooks/useListenMessages";
import useChatScroll from "../../hooks/useChatScroll";



const Messages = () => {
    const {loading,messages}=useGetMessages();
    useListenMessages();

const ref=useChatScroll(messages) as React.MutableRefObject<HTMLDivElement>;
  return (
    <div className='px-4 flex-1  overflow-auto' ref={ref}>
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

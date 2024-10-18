import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation"


const Conversation = ({conversation,emoji}:{conversation:ConversationType,emoji:string}) => {
  const {selectedConversation,setSelectedConversation}=useConversation();
  const isSelected=selectedConversation?.id===conversation.id;
  // const isOnline=false;
  const {onlineUsers}=useSocketContext();
  const isOnline=onlineUsers.includes(conversation.id);
  // console.log(onlineUsers)
  // console.log(isOnline)
  
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-0.5 cursor-pointer ${isSelected?'bg-sky-500':''}`} onClick={()=>{setSelectedConversation(conversation)}}>
        <div className={`avatar ${isOnline?'online':''}`}>
            <div className='w-12 rounded-full'>
            <img src={conversation.profilePic} alt='user avatar'/>
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-black'>{conversation.fullName}</p>
                <span className='text-xl'>{emoji}</span>

            </div>

        </div>
    </div>

    <div className='divider divider-neutral m-0 py-0'>

    </div>
    
    </>
  )
}
 
export default Conversation

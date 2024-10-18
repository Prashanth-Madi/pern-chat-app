import { useAuthContext } from "../../context/AuthContext";
import extractTime from "../../utils/extractTime";
import useConversation, { MessageType } from "../../zustand/useConversation";


const Message = ({message}:{message?:MessageType}) => {
    const {authUser}=useAuthContext();
    const {selectedConversation}=useConversation();

    const fromMe=message?.senderId===authUser?.id;
    const chatClass=fromMe?"chat-end":"chat-start";
    const img=fromMe?authUser?.profilePic:selectedConversation?.profilePic;
    const bubbleBg=fromMe?"bg-blue-500":"";
    const shakeClass=message?.shouldShake?"shake":"";
  return (
        <div>
            <div className={`chat ${chatClass} `}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={img} />
                    </div>
                </div>
            <div className={`chat-bubble ${bubbleBg} ${shakeClass} text-black`}>
            {message?.body}
            {/* <time className="chat-footer text-xs opacity-50 text-black ml-1 "></time> */}
            </div>
           
            <div className="chat-footer text-black opacity-50">{extractTime(message?.createAt)}</div>
        </div>
    </div>
  )
}

export default Message;


// import { useAuthContext } from "../../context/AuthContext";
// import useConversation, { MessageType } from "../../zustand/useConversation";


// const Message = ({message}:{message?:MessageType}) => {
//     const fromMe=message?.senderId===authUser?.id;
//     const chatClass=fromMe?"chat-end":"chat-start";
//     const {authUser}=useAuthContext();
//     const {selectedConversation}=useConversation();
//     const img=fromMe?authUser?.profilePic:selectedConversation?.profilePic;
//     const bubbleBg=fromMe?"bg-blue-500":"";
//   return (
//         <div>
//             <div className={`chat ${chatClass} `}>
//                 <div className="chat-image avatar">
//                     <div className="w-10 rounded-full">
//                     <img alt="Tailwind CSS chat bubble component" src={img} />
//                     </div>
//                 </div>
//             <div className="chat-header text-black">
//             Obi-Wan Kenobi   
//             <time className="text-xs opacity-50 text-black ml-1">   12:45</time>
//             </div>
//             <div className="chat-bubble">You were the Chosen One!</div>
//             <div className="chat-footer opacity-50">Delivered</div>
//         </div>
//         <div className="chat chat-end">
//             <div className="chat-image avatar">
//             <div className="w-10 rounded-full">
//                 <img
//                 alt="Tailwind CSS chat bubble component"
//                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//             </div>
//             </div>
//             <div className="chat-header">
//             Anakin
//             <time className="text-xs opacity-50">12:46</time>
//             </div>
//             <div className="chat-bubble">I hate you!</div>
//             <div className="chat-footer opacity-50 text-black">Seen at 12:46</div>
//         </div>
//     </div>
//   )
// }

// export default Message

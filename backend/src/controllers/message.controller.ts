import { Request,Response } from "express"
import prisma from "../db/prisma.js";
import { error } from 'console';


export const sendMessage=async(req:Request,res:Response)=>{
    try{
        const {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user.id;

        let conversation=await prisma.conversation.findFirst({
            where:{
                participantIds:{
                    hasEvery:[senderId,receiverId]
                }
            }
        })

        if(!conversation){
            conversation=await prisma.conversation.create({
                data:{
                    participantIds:{
                        set:[senderId,receiverId]}
                }

            })
        }

        const newMessage=await prisma.message.create({
            data:{
                senderId,
                body:message,
                conversationId:conversation.id
            }
        })

        if (newMessage){
            conversation=await prisma.conversation.update({
                where:{
                    id:conversation.id
                },
                data:{
                    messages:{
                        connect:{
                            id:newMessage.id
                        }
                    }
                }

            })
        }

        //sockekt io will be added here later
        res.status(201).json(newMessage);
    }
    catch(error:any){
        console.log("Error in message",error.message);
        res.status(500).json({error:"Internal Server Error "})
    }
}

export const getMessages= async(req:Request,res:Response)=>{
    try{
        const {id:userToChatId}=req.params;
        const senderId=req.user.id;

        let conversation=await prisma.conversation.findFirst({
            where:{
                participantIds:{
                    hasEvery:[senderId,userToChatId]
                }
                },
                include:{
                    messages:{
                        orderBy:{
                            createAt:"asc"
                        }
                    }
                }
            },
            
        )
        if(!conversation){
            return res.status(200).json({})
        }
        res.status(200).json(conversation.messages)

    }
    catch(error:any){
        console.log("Error is getMessage Controller",error.message);
        res.status(500).json({error:"Internal Server Error"})

    }

}

export const getUsersForSideBar=async(req:Request,res:Response)=>{
    try{
        // console.log("inside sidebar controller")
        const authUserId=req.user.id;
        const users=await prisma.user.findMany({
            where:{
                id:{
                    not:authUserId,
                },
            },
            select:{
                id:true,
                fullName:true,
                profilePic:true
            }
        });
        res.status(200).json(users);
    }
    catch(error:any){
        console.log("Error in getUsersForSideBar Controller",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}
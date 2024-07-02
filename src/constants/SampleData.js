import { Construction } from "@mui/icons-material";

export const sampleChats=[

{
    avatar:["https://picsum.photos/200/300"],
    name:"riddhi",
    _id:"2",
    groupChat:"true",
    members:["1","2"],


},{
    avatar:["https://picsum.photos/200/300"],
    name:"sahil",
    _id:"1",
    groupChat:"false",
    members:["1","2"],


},
];
export const sampleUsers=[
    {
        avatar:["https://picsum.photos/200/300"],
        name:"sahil",
        _id:"1",
        
    },
    {
        avatar:["https://picsum.photos/200/300"],
        name:"riddhi",
        _id:"2",
        
    },
];
export const sampleNotifications=[
    {
        sender:{
            avatar:["https://picsum.photos/200/300"],
        name:"sahil",
        },
        
        _id:"1",
        
    },
    {
        sender:{
            avatar:["https://picsum.photos/200/300"],
            name:"riddhi",
        },
       
        _id:"2",
        
    },
];
const currentTime = new Date();
export const sampleMessage=[
{
    attachments:[
        {
        publicId:"sjjs",
        url:"https://www.w3schools.com/howto/img_avatar.png",
        },
    ],
    content:"",
    _id:"abc",
    sender:{
        _id:"user._id",
        name:"vishal",
    },
    chat:"chatId",
    createdAt:{currentTime},
},
{
    attachments:[
       
    ],
    content:"hey this is sahil",
    _id:"abcd",
    sender:{
        _id:"sjhjass",
        name:"sahil",
    },
    chat:"chatId",
    createdAt:{currentTime},
},
];

export const dashboardData={
    users:[
        {
            name:"sahil",
            avatar:"https://picsum.photos/200/300",
            _id:"1",
            username:"ydv_s",
            friends:"20",
            groups:5,

        },
        {
            name:"riddhi",
            avatar:"https://picsum.photos/200/300",
            _id:"2",
            username:"ridz",
            friends:"11",
            groups:10,

        }
    ]
}
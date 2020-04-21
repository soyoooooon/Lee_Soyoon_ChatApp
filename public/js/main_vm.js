const socket = io();

let app = new Vue
({

    
    el:'#app',

    data:{
        newMessage:null,
        messages: [],
        typing: false,
        urName: "",
        ready: false,
     
    },
    watch:{
        newMessage(value){

            value ? socket.emit('typing'):socket.emit('stopTyping')

        }


    },

    methods:{

        dispatchMessage(){
            this.messages.push({message: this.newMessage, type : 0 })
            socket.emit('chatMessage', this.newMessage)
            
             this.newMessage = null
           

            
        },

        addName(){
            this.ready = true
            
            socket.emit('joined',this.urName)
           
            
        }
    },
    created(){

        socket.emit('Created', 'Soyoon')
        socket.on('Created', (data) =>{
            console.log(data);
        })

        socket.on('chatMessage', (data)=>{
            this.messages.push({message: data, type : 1 })

        })

        socket.on('typing',()=>{
            this.typing = true;
        })

        socket.on('stopTyping',()=>{
            this.stopTyping = false;
        })

        socket.on('urName',()=>{
            this.urName.push({message: data })
        })
        
    }

    

})

<template>
  <div class="container" style="background-color: white; padding: 2%; margin-top: 4%; border-radius: 5px;">
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
    <div class="row fill-height pb-14 align-items-end">
      <div class="col">
        <div class="chat-container" ref="chatContainer">
          <div v-for="(item, index) in chat" :key="index" 
            :class="['d-flex flex-row align-items-center my-2', item.from == 'user' ? 'justify-content-end': null]">
              
            <span v-if="item.from == 'user'" class="mr-3">{{ item.msg }}</span>
            <!-- <div v-else class="avatar-container image-container">
              <img  src="../assets/logo_chad4.png" alt="User Logo" class="avatar-image" >
            </div> -->
            <div class="avatar" :class="{'bg-primary': item.from == 'user', 'bg-white': item.from != 'user'} ">
              <!-- <span class="white--text">{{ item.from[0] }}</span> -->
              <img v-if="item.from !='user'" src="../assets/logo_chad4.png" alt="User Logo" >
              <!-- <span v-else class="" style="border: 10px;"> {{ item.from[0] }}</span> -->
              <!-- <img v-else src="path/to/your/other-logo.png" alt="Other Logo"> -->
              <!-- <img src="../assets/logo_chad4.png" alt="Logo" > -->
            </div>
            <span v-if="item.from != 'user' && !item.loading" class="black--text ml-3">{{ item.msg }}</span>
            <span v-else-if="item.from != 'user' && item.loading" class="black--text loading">{{ item.msg }} </span>
          </div>
        </div>  
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="d-flex flex-row align-items-center">
          <input type="text" class="form-control mr-4" placeholder="Ask Something" v-model="msg" @keypress.enter="send">
          <button class="btn btn-primary" @click="send"><i class="bi bi-send"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <template>
<section style="background-color: #eee;">
  <div class="container-fluid py-5">

    <div class="row d-flex justify-content-center">
      <div class="col-md-12 col-lg-12 col-xl-12">

        <div class="card" id="chat1" style="border-radius: 15px;">
          <div
            class="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
            style="border-top-left-radius: 15px; border-top-right-radius: 15px;">
            <i class="fas fa-angle-left"></i>
            <p class="mb-0 fw-bold">Live chat</p>
            <i class="fas fa-times"></i>
          </div>
          <div class="card-body">

            <div class="chat-container" ref="chatContainer">
              <div v-for="(item, index) in chat" :key="index" 
                :class="['d-flex flex-row align-center my-2', item.from == 'user' ? 'justify-end': null]">

                <span v-if="item.from == 'user'" class=" mr-3">{{ item.msg }}</span>
              </div>
            </div>

            <div class="d-flex flex-row justify-content-start mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
              <div class="p-3 ms-3" style="border-radius: 15px; background-color: rgba(57, 192, 237,.2);">
                <p class="small mb-0">Hello and thank you for visiting MDBootstrap. Please click the video
                  below.</p>
              </div>
            </div> -->

            <!-- <div class="d-flex flex-row justify-content-end mb-4">
              <div class="p-3 me-3 border" style="border-radius: 15px; background-color: #fbfbfb;">
                <p class="small mb-0">Thank you, I really like your product.</p>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
            </div> -->

            <!-- <div class="d-flex flex-row justify-content-start mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
              <div class="ms-3" style="border-radius: 15px;">
                <div class="bg-image">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp"
                    style="border-radius: 15px;" alt="video">
                  <a href="#!">
                    <div class="mask"></div>
                  </a>
                </div>
              </div>
            </div> -->

            <!-- <div class="d-flex flex-row justify-content-start mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
              <div class="p-3 ms-3" style="border-radius: 15px; background-color: rgba(57, 192, 237,.2);">
                <p class="small mb-0">...</p>
              </div>
            </div> -->

            
            <!-- <div class="form-outline">
              <div class="row">
                <div class="col-md-10 col-lg-10 col-xl-10">
                  <textarea class="form-control" id="textAreaExample" rows="1.5"></textarea>
                  <label class="form-label" for="textAreaExample">Type your message</label>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <button class="btn btn-primary" @click="send">
                    <i class="bi bi-send"></i>
                  </button>
                  </div>
              </div>
              
            </div>

          </div>
        </div>

      </div>
    </div>

  </div> -->
<!-- </section> -->
<!-- </template> -->

<style scoped>

.chat-container {
  height: 550px; /* set a fixed height */
  overflow-y: auto; /* make the container scrollable */
  scrollbar-width: thin; /* set the width of the scrollbar */
  scrollbar-color: #573067 #1c8980; /* set the color of the scrollbar */
  padding-right: 5%;
  }
.chat-container::-webkit-scrollbar {
  width: 8px; /* set the width of the scrollbar */
}

.chat-container::-webkit-scrollbar-thumb {
  background-color: #cfe2ff; /* set the color of the thumb */
  border-radius: 6px; /* round the edges of the thumb */
}

.chat-container::-webkit-scrollbar-track {
  background-color: #eee; /* set the color of the track */
}


.ml-3 {
  padding: 8px;
  border-radius: 8px;
  background-color: #cfe2ff; /* set the background color */
  max-width: 80%; /*set a maximum width for the message */
  margin-bottom: 12px;
  font-family: 'Roboto', sans-serif;
  overflow-wrap: break-word;
}

.mr-3 {
  padding: 8px;
  border-radius: 8px;
  /* background-color: #f2f2f2;  */
  max-width: 75%; /*set a maximum width for the message */
  margin-bottom: 12px;
  color:#404864;
  font-family: 'Roboto', sans-serif;
  background-color: rgb(238, 226, 248);
}

.chat-message {
  
  padding: 8px;
  border-radius: 8px;
  background-color: #cfe2ff; /* set the background color */
  max-width: 60%; /* set a maximum width for the message */
  margin-bottom: 10px; /* add some margin between messages */
}

.chat-message.user {
  background-color: #f2f2f2; /* set a different background color for user messages */
}


.loading {
  padding: 8px;
  /* margin-bottom: 12px; */
  background-color: #cfe2ff;
  width:50%;                                        
  margin-left:2.5%;
  border-radius: 8px;
  
}

.loading:after {
  overflow: hidden;
  display: inline-block;
  /* vertical-align: bottom; */
  animation: ellipsis steps(5,end) 1200ms infinite;
  content: "\2026"; /* ascii code for the ellipsis character */
  width: 0px;
  color: #0b0923; /* set the color to red */
}

@keyframes ellipsis {
  to {
    width: 1.5em; /* increase the width to make it bigger */
  }
}

.image-container img{
  max-width: 50px; /* set the maximum width to 50 pixels */
  max-height: 50px; /* set the maximum height to 50 pixels */
}

.avatar img {
  width: 50px;
  height: 50px;
}
/* 
#chat1 .form-outline .form-control~.form-notch div {
  pointer-events: none;
  border: 1px solid;
  border-color: #eee;
  box-sizing: border-box;
  background: transparent;
  }
  
  #chat1 .form-outline .form-control~.form-notch .form-notch-leading {
  left: 0;
  top: 0;
  height: 100%;
  border-right: none;
  border-radius: .65rem 0 0 .65rem;
  }
  
  #chat1 .form-outline .form-control~.form-notch .form-notch-middle {
  flex: 0 0 auto;
  max-width: calc(100% - 1rem);
  height: 100%;
  border-right: none;
  border-left: none;
  }
  
  #chat1 .form-outline .form-control~.form-notch .form-notch-trailing {
  flex-grow: 1;
  height: 100%;
  border-left: none;
  border-radius: 0 .65rem .65rem 0;
  }
  
  #chat1 .form-outline .form-control:focus~.form-notch .form-notch-leading {
  border-top: 0.125rem solid #39c0ed;
  border-bottom: 0.125rem solid #39c0ed;
  border-left: 0.125rem solid #39c0ed;
  }
  
  #chat1 .form-outline .form-control:focus~.form-notch .form-notch-leading,
  #chat1 .form-outline .form-control.active~.form-notch .form-notch-leading {
  border-right: none;
  transition: all 0.2s linear;
  }
  
  #chat1 .form-outline .form-control:focus~.form-notch .form-notch-middle {
  border-bottom: 0.125rem solid;
  border-color: #39c0ed;
  }
  
  #chat1 .form-outline .form-control:focus~.form-notch .form-notch-middle,
  #chat1 .form-outline .form-control.active~.form-notch .form-notch-middle {
  border-top: none;
  border-right: none;
  border-left: none;
  transition: all 0.2s linear;
  }
  
  #chat1 .form-outline .form-control:focus~.form-notch .form-notch-trailing {
  border-top: 0.125rem solid #39c0ed;
  border-bottom: 0.125rem solid #39c0ed;
  border-right: 0.125rem solid #39c0ed;
  }
  
  #chat1 .form-outline .form-control:focus~.form-notch .form-notch-trailing,
  #chat1 .form-outline .form-control.active~.form-notch .form-notch-trailing {
  border-left: none;
  transition: all 0.2s linear;
  }
  
  #chat1 .form-outline .form-control:focus~.form-label {
  color: #39c0ed;
  }
  
  #chat1 .form-outline .form-control~.form-label {
  color: #bfbfbf;
  } */
</style>




<script>
// import UserService from '../services/user.service';
import axios from 'axios'
export default {
  props:["id"],
  // el: '#app',
  // name: 'Chad',
  // vuetify: new Vuetify(),
  data() {

    return{
    chat: [{
                        from: "chad",
                        msg: 'Hi, Is there anything that i can help you with?',
                        loading: false
                      }],
    msg: null,
    loading:false
   }
  },
  methods: {
    
    send: function(){
      this.chat.push({
                        from: "user",
                        msg: this.msg,
                        loading:false
                      })
      console.log("IDS")
      // console.log(this.id)
      // console.log("Lenght:",this.id.length)

      this.chat.push({
                        from: "chad",
                        msg: "let me see ",
                        loading:true
                      })
      // this.pushLoadingMessage()

      // if(this.id.length==0){
      //   this.deleteLoadingMessage();
      //   this.addReply("I'm sorry about that, it looks like you haven't chosen a document yet. Can you please select a document that you'd like me to help you with?")
      // } 
     
      // else{
      var req ={
          // "documentIds": this.id.toString(),
          "question": this.msg
        }
      console.log("REQuest : ");
      console.log(req)
      axios
        .post("http://a19b558aa03d34eedb852f1cb1afcc78-1787080680.ap-southeast-1.elb.amazonaws.com:8000/askQuestion", req)
        .then((response) => {
          // const pathString = response.data.document_list
          // const paths = pathString.split(", "); 
          // let newPathString = ""; 
          // for (let i = 0; i < paths.length; i++) {
          //    newPathString += "[" + (i+1) + "]" + paths[i]; 
          //    if (i !== paths.length - 1) { newPathString += ", \n"; } 
          //   } 
          // console.log(newPathString); 
          console.log("BERJAYA ");
          console.log(response);
          this.deleteLoadingMessage();
          if(response.data.answer == " I don't know.") {
            // this.addReply("Sorry, I can't find any answer related to that inside the documents.")
            this.addReply("Sorry, I can't find any answer related to that, but you can refer to the list of documents provided.")
            // this.addReply(newPathString)
          } 
          else{
            this.addReply(response.data.answer)
            // this.addReply("You can refer to document "+response.data.doc_id_refs)
            // this.addReply("Here is the list of reference documents:")
            // console.log("Reference Documents", newPathString)
            // this.addReply("Here is the list of reference documents: \n \n \n" + newPathString)
          } 
        })
        .catch((error) => {
          console.log("TAK JADI",error);
          this.deleteLoadingMessage();
          this.addReply("I'm very sorry, it seems that I need to fix something. Can you please try again?")
        });
      this.msg = null
    // }
  },
    addReply(answer){
      console.log("try")
      console.log(answer)
      
      this.chat.push({
                        from: "chad",
                        msg: answer,
                        loading: false
                      })
      this.$nextTick(() => {
          this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight; // scroll to bottom
        });                
    },
    deleteLoadingMessage() {
      this.chat.pop();
      // this.loading = false
    },
    pushLoadingMessage(){
      // this.loading = true
    }
  }
}
</script>




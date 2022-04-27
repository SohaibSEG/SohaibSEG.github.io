const data = {
    "currentUser": {
      "image": { 
        "png": "./images/avatars/image-juliusomo.png",
        "webp": "./images/avatars/image-juliusomo.webp"
      },
      "username": "juliusomo"
    },
    "comments": [
      {
        "id": 1,
        "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        "createdAt": "1 month ago",
        "score": 12,
        "user": {
          "image": { 
            "png": "./images/avatars/image-amyrobson.png",
            "webp": "./images/avatars/image-amyrobson.webp"
          },
          "username": "amyrobson"
        },
        "replies": []
      },
      {
        "id": 2,
        "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        "createdAt": "2 weeks ago",
        "score": 5,
        "user": {
          "image": { 
            "png": "./images/avatars/image-maxblagun.png",
            "webp": "./images/avatars/image-maxblagun.webp"
          },
          "username": "maxblagun"
        },
        "replies": [
          {
            "id": 3,
            "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            "createdAt": "1 week ago",
            "score": 4,
            "replyingTo": "maxblagun",
            "user": {
              "image": { 
                "png": "./images/avatars/image-ramsesmiron.png",
                "webp": "./images/avatars/image-ramsesmiron.webp"
              },
              "username": "ramsesmiron"
            }
          },
          {
            "id": 4,
            "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            "createdAt": "2 days ago",
            "score": 2,
            "replyingTo": "ramsesmiron",
            "user": {
              "image": { 
                "png": "./images/avatars/image-juliusomo.png",
                "webp": "./images/avatars/image-juliusomo.webp"
              },
              "username": "juliusomo"
            }
          }
        ]
      }
    ]
  }

  const createCommentNode = (commentObject) => {
      const commentTemplate = document.querySelector(".comment-template");
      var commentNode = commentTemplate.content.cloneNode(true);
      commentNode.querySelector(".usr-name").textContent = commentObject.user.username; 
      commentNode.querySelector(".usr-img").src = commentObject.user.image.webp ; 
      commentNode.querySelector(".score-number").textContent = commentObject.score ; 
      commentNode.querySelector(".cmnt-at").textContent = commentObject.createdAt ; 
      commentNode.querySelector(".c-body").textContent = commentObject.content ; 
      commentNode.querySelector(".reply-to").textContent = commentObject.replyingTo ;
      
      if(commentObject.user.username == data.currentUser.username){
          commentNode.querySelector(".comment").classList.add("this-user")
      }

      return commentNode;
  }

  const appendComment = (parentNode,commentNode) =>{
    //console.log("from append:" + parentNode);   
    parentNode.appendChild(commentNode);
        
  }

  function initComments(commentList,parent){
      commentList.forEach(element => {
          const comment_node = createCommentNode(element);
          if(element.replies)
          {   
              comment_node.querySelector(".replies").style= "display:flex;";
              initComments(element.replies , comment_node.querySelector(".replies"))
                  
        }
          appendComment(parent,comment_node);
      });
  }

  initComments(data.comments,document.querySelector(".comments-wrp"));
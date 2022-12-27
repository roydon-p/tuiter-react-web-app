const PostItem = (post) => {
    return(`
      <li class="list-group-item">
          <div class="row">
               <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                     <img class="rounded-circle" src=${post.profilepic} height="50px" width="50px">
               </div>
               <div class="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11">
                   <div class="fw-bolder text-white ps-2">
                         ${post.userName}
                         <i class="fas fa-check-circle"></i>
                         <span class="text-secondary fw-lighter"> ${post.handle} - ${post.time}</span>
                   </div>
                   <div class="fw-light text-white ps-2">
                         ${post.title}
                   </div>
                   <div class="border border-dark rounded-2">
                         <img class="rounded-top border-bottom border-dark" src="${post.image}" width="100%">
                         <div class="fw-light ps-2 pt-2">
                             ${post.imgtitle}
                         </div>
                         <div class="text-secondary fw-light ps-2">
                             ${post.imgdesc}
                         </div>
                   </div>
                   <ul class="list-group list-group-horizontal justify-content-evenly">
                        <li class="list-group-item border-0">
                            <i class="far fa-comment pe-2"></i>${post.comments}
                        </li>
                        <li class="list-group-item border-0">
                            <i class="fas fa-retweet"></i>${post.retweets}
                        </li>
                        <li class="list-group-item border-0">
                            <i class="far fa-heart"></i>${post.likes}
                        </li>
                        <li class="list-group-item border-0">
                            <i class="fas fa-upload"></i>
                        </li>
                   </ul>
               </div>
          </div>
      </li>
   `);
}
export default PostItem;
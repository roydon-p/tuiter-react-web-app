const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i>
     </a>
     <a href="../home.html" class="list-group-item list-group-item-action">
         <div>
             <span><i class="fas fa-home float-start pt-1"></i></span>
             <span class="d-none d-xl-block ps-4">Home</span>
         </div>
     </a>
     <a href="../index.html" class="list-group-item list-group-item-action active">
         <div>
             <span><i class="fas fa-hashtag float-start pt-1"></i></span>
             <span class="d-none d-xl-block ps-4">Explore</span>
         </div>
     </a>
     <a href="../notifications.html" class="list-group-item list-group-item-action">
         <div>
             <span><i class="fas fa-bell float-start pt-1"></i></span>
             <span class="d-none d-xl-block ps-4">Notifications</span>
         </div>
     </a>
     <a href="../messages.html" class="list-group-item list-group-item-action">
         <div>
             <span><i class="fas fa-envelope float-start pt-1"></i></span>
             <span class="d-none d-xl-block ps-4">Messages</span>
         </div>
     </a>
     <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
         <div>
             <span><i class="fas fa-bookmark float-start pt-1"></i></span>
             <span class="d-none d-xl-block ps-4">Bookmarks</span>
         </div>
     </a>
     <a href="../lists.html" class="list-group-item list-group-item-action">
         <div>
             <span><i class="fas fa-list-ul float-start pt-1"></i></span>
             <span class="d-none d-xl-block ps-4">Lists</span>
         </div>
     </a>
     <a href="../profile.html" class="list-group-item list-group-item-action">
         <div>
             <span><i class="fas fa-user float-start pt-1"></i></span>
             <span class="d-none d-xl-block ps-4">Profile</span>
         </div>
     </a>
     <a href="../more.html" class="list-group-item list-group-item-action">
         <div>
             <span class="fa-stack-more float-start pt-1">
                 <i class="fas fa-circle fa-stack-1x"></i>
                 <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
             </span>
             <span class="d-none d-xl-block ps-4">More</span>
         </div>
     </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tuit.html" class="btn btn-primary btn-block rounded-pill">Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;
const WhoToFollowListItem = (who) => {
    return(`
      <li class="list-group-item">
        <div class="row">
           <div class="col-2 col-xl-2 col-xxl-2">
               <img class="rounded-circle" src=${who.avatarIcon} height="50px">
           </div>
           <div class="col-7 col-xl-7 col-xxl-7">
               <div>
                   <span class="fw-bolder">${who.userName}</span>
                   <i class="fas fa-check-circle"></i>
               </div>
               <div class="text-secondary">
                   ${who.handle}
               </div>
           </div>
           <div class="col-3 col-xl-3 col-xxl-3 d-flex justify-content-center">
               <button class="btn btn-primary rounded-pill">
                   Follow
               </button>
           </div>
        </div>
      </li>
   `);
}
export default WhoToFollowListItem;
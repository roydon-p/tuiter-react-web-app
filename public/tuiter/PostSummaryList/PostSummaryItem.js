const PostSummaryItem = (post) => {
    return(`
      <li class="list-group-item">
        <div class="row">
            <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                <div class="text-secondary">
                    ${post.topic}
                </div>
                <div class="fw-bolder">
                    ${post.userName}
                    <i class="fas fa-check-circle"></i>
                    <span class="text-secondary fw-lighter">- ${post.time}</span>
                </div>
                <div class="fw-bold">
                    ${post.title}
                </div>
                <div class="text-secondary">
                    ${post.tweets}
                </div>
            </div>
            <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <img class="float-end rounded-3 d-none d-lg-block" src=${post.image} height="100px">
                <img class="float-end rounded-3 d-none d-md-block d-lg-none" src=${post.image} height="80px">
                <img class="float-end rounded-3 d-none d-sm-block d-md-none" src=${post.image} height="70px">
            </div>
        </div>
      </li>
   `);
}
export default PostSummaryItem;
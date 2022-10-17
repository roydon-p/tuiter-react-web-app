import PostSummaryList from "../PostSummaryList.js";

const ExploreComponent = () => {
    return(`
           <div class="row">
                <div class="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11">
                    <div class="position-relative">
                        <i class="fas fa-search position-absolute wd-search-tuiter"></i>
                        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                    </div>
                </div>
                <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 ps-0">
                    <i class="fa fa-cog fa-2x pt-1" style="color: dodgerblue"></i>
                </div> 
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item d-none d-sm-block">
                    <a class="nav-link active" href="for-you.html">
                        For you
                    </a>
                </li>
                <li class="nav-item d-none d-sm-block">
                    <a class="nav-link" href="trending.html">
                        Trending
                    </a>
                </li>
                <li class="nav-item d-none d-sm-block">
                    <a class="nav-link" href="news.html">
                        News
                    </a>
                </li>
                <li class="nav-item d-none d-sm-block">
                    <a class="nav-link" href="sports.html" tabindex="-1">
                        Sports
                    </a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html" tabindex="-1">
                        Entertainment
                    </a>
                </li>
           </ul>
           <div class="position-relative">
                <img src="../images/starship.webp" width="100%"/>
                <h2 class="position-absolute bottom-0 left-3 m-0 ps-2 text-white">SpaceX's Starship</h2>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

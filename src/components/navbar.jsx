import title from '../assets/flipkartlogo.png';

function Navigationbar() {
  return (
       <nav id="navbar" class="navbar navbar-expand-xxxl  ">
     <div class="container-fluid">
        <div class="navbar_headline me-6">
           <a class="navbar-brand" href="#"> <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
</svg></i> haribal`s_cloths</a>
         </div>
    <div class="navbar_image justify-content-center">
        <img src={title} alt="flipkartlogo" height="60px"/>
    </div>
    <button class="navbar justify-content-end navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
     aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <div class="searchbar">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Electronics</a>
        <a class="nav-link" href="#">laptops</a>
        <a class="nav-link " href="#">mobiles</a>
      </div>
    </div>
    </div>
</nav>
  );
}

export default Navigationbar;

import shoes from '../assets/shoes.jpeg';
import mobile from '../assets/mobile.webp';
import watch from '../assets/watch.jpeg';
import raincote from '../assets/raincote.jpeg';
import Bodyposter from '../assets/banner.jpeg';
import tshert from '../assets/T-sert.jpeg';
import shert from '../assets/shert.jpeg';
import pants from '../assets/gens.jpeg';
import sarees from '../assets/sarees.jpeg';
import hoodies from '../assets/hoodies.jpeg';
import glass from '../assets/coolingglass.jpeg'
import oil from '../assets/oil.jpeg'

function Homepage(){
    return(
           <div class="body">
    <div class="body-poster">
        <div class="conteiner m-2 p-2">
            <div class="poster">
                <img width="100%" src={Bodyposter} alt="Ecommerce-poster"/>
            </div>
        </div>
    </div>
    <div class="container-body ">
        <div class="col">
            <div class="row justify-content-center">
                <div class="col">
                    <div class="card border shadow rounded-4 mt-3 ">
                        <img src={tshert} class="card-img-top" alt="T-shert"/>
                        <div class="card-body">
                        <h5 class="card-title">Walcano T-shert</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                         <a href="#" class="btn btn-primary">BUY</a>
                        </div>
                    </div>
                </div>
                <div class='col'>    
                     <div class="card border shadow rounded-4 mt-3">
                        <img src={shert} class="card-img-top" alt="shert"/>
                        <div class="card-body">
                        <h5 class="card-title">walcano shert</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                         <a href="#" class="btn btn-primary">BUY</a>
                        </div>
                    </div>
                </div>
                 <div class="col">
                    <div class="card border shadow rounded-4 mt-3 ">
                        <img src={hoodies} class="card-img-top" alt="T-shert"/>
                        <div class="card-body">
                        <h5 class="card-title">Walcano hoodies</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                         <a href="#" class="btn btn-primary">BUY</a>
                        </div>
                    </div>
                </div>
                 <div class="col">
                    <div class="card border shadow rounded-4 mt-3 ">
                        <img src={sarees} class="card-img-top" alt="T-shert"/>
                        <div class="card-body">
                        <h5 class="card-title">Walcano sarees</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                         <a href="#" class="btn btn-primary">BUY</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border shadow rounded-4 mt-3 ">
                        <img src={watch} class="card-img-top" alt="Walcano Watch"/>
                        <div class="card-body">
                        <h5 class="card-title">Walcano Watch</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                         <a href="#" class="btn btn-primary">BUY</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border shadow rounded-4 mt-3 ">
                        <img src={pants} class="card-img-top" alt="Walcano Gens"/>
                        <div class="card-body">
                        <h5 class="card-title">Walcano Gens</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                         <a href="#" class="btn btn-primary">BUY</a>
                        </div>
                    </div>
                </div>
                 <div class="col">
                    <div class="card border shadow rounded-4 mt-3 ">
                        <img src={raincote} class="card-img-top" alt="Walcano Raincote"/>
                        <div class="card-body">
                        <h5 class="card-title">Walcano Raincote</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                         <a href="#" class="btn btn-primary">BUY</a>
                        </div>
                    </div>
                </div>
                    <div class="col">
                    <div class="card border shadow rounded-4 mt-3 ">
                        <img src={shoes} class="card-img-top" alt="Walcano Shoes"/>
                        <div class="card-body">
                        <h5 class="card-title">Walcano Shoes</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                         <a href="#" class="btn btn-primary">BUY</a>
                        </div>
                    </div>
                </div>
                 <div class="col">
                    <div class="card border shadow rounded-4 mt-3 ">
                        <img src={glass} class="card-img-top" alt="Walcano Glass"/>
                        <div class="card-body">
                        <h5 class="card-title">Walcano Glass</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                         <a href="#" class="btn btn-primary">BUY</a>
                        </div>
                    </div>
                </div>
                 <div class="col">
                    <div class="card border shadow rounded-4 mt-3 ">
                        <img src={oil} class="card-img-top" alt="Walcano Oil"/>
                        <div class="card-body">
                        <h5 class="card-title">Walcano Oil</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                         <a href="#" class="btn btn-primary">BUY</a>
                        </div>
                    </div>
                </div>
                 <div class="col">
                    <div class="card border shadow rounded-4 mt-3 ">
                        <img src={mobile} class="card-img-top" alt="Walcano mobile"/>
                        <div class="card-body">
                        <h5 class="card-title">Walcano mobile</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                         <a href="#" class="btn btn-primary ">BUY</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                <div class="card border shadow rounded-4 mt-3" aria-hidden="true">
                    <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                    </p>
                    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                    </div>
                    <button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                    <span role="status">Loading...</span>
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Homepage;
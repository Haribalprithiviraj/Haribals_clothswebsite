import logo from '../assets/Apple.jpeg';
import Bodyposter from '../assets/ecomerce_poster.jpeg';
import './Homepage.css';
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
                    <div id='card' class="card border shadow rounded-4 mt-3 ">
                        <div class="card-body">
                            <img src={logo} alt="An Apple" width="100px"/>
                            <div class="card-title">Apple</div>
                            <div class="card-text">An Apple to take everyday </div>
                            <button class="btn btn-primary">Buy</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div id='card' class="card border shadow rounded-4 mt-3 " >
                        <div class="card-body">
                            <img src={logo} alt="An Apple" width="100px"/>
                            <div class="card-title">Apple</div>
                            <div class="card-text">An Apple to take everyday </div>
                            <button class="btn btn-primary">Buy</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border shadow rounded-4 mt-3 " id='card'>
                        <div class="card-body">
                            <img src={logo}  alt="An Apple" width="100px"/>
                            <div class="card-title">Apple</div>
                            <div class="card-text">An Apple to take everyday </div>
                            <button class="btn btn-primary">Buy</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border shadow rounded-4 mt-3 " id='card'>
                        <div class="card-body">
                            <img src={logo}  alt="An Apple" width="100px"/>
                            <div class="card-title">Apple</div>
                            <div class="card-text">An Apple to take everyday </div>
                            <button class="btn btn-primary">Buy</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border shadow rounded-4 mt-3 " id='card'>
                        <div class="card-body">
                            <img src={logo}  alt="An Apple" width="100px"/>
                            <div class="card-title">Apple</div>
                            <div class="card-text">An Apple to take everyday </div>
                            <button class="btn btn-primary">Buy</button>
                        </div>
                    </div>
                </div>
                  <div class="col">
                    <div class="card border shadow rounded-4 mt-3 " id='card'>
                        <div class="card-body">
                            <img src={logo}  alt="An Apple" width="100px"/>
                            <div class="card-title">Apple</div>
                            <div class="card-text">An Apple to take everyday </div>
                            <button class="btn btn-primary">Buy</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border shadow rounded-4 mt-3 " id='card'>
                        <div class="card-body">
                            <img src={logo}  alt="An Apple" width="100px"/>
                            <div class="card-title">Apple</div>
                            <div class="card-text">An Apple to take everyday </div>
                            <button class="btn btn-primary">Buy</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border shadow rounded-4 mt-3 " id='card'>
                        <div class="card-body">
                            <img src={logo}  alt="An Apple" width="100px"/>
                            <div class="card-title">Apple</div>
                            <div class="card-text">An Apple to take everyday </div>
                            <button class="btn btn-primary">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Homepage;
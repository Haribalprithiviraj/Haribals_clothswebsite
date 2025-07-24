import Footer from "./components/footer";
import Headers from "./components/Header";
import Navigationbar from "./components/navbar";
import Homepage from "./pages/home";
function App()
{
    return(
        <>
        <Headers/>
        <Navigationbar/>
        <Homepage/>
        <Footer/>
        </>
    );
}

export default App;
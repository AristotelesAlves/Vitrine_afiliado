import { useParams } from "react-router";
import Body from "../components/Body";
import { Else } from "../components/Else";
import Header from "../components/Header";
import SliderBar from "../components/SliderBar";


function Home(){

    const {slug} = useParams<{slug:string;}>();
    const newSlug = slug?.toString();

    // capturando slug via react router dom
    return(
        <div className="h-screen">
            <Header/>
            <main className="h-full pt-[60px] flex">
                <SliderBar active={`${slug}`}/>
                {slug ? <Body categoriaSlug={slug}/> : <Else/>}
                {/* Enviando slug via props pelo componente Body */}
            </main>
        </div>
    )
}
export default Home;1
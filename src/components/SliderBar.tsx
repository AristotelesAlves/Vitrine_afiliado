import casa from '../assets/casa.svg';
import clip from '../assets/clip.svg';
import cozinha from '../assets/cosinha.svg';
import cpu from '../assets/cpu 3.svg';
import frame from '../assets/Frame.svg';
import makeup from '../assets/makeup_cosmetic_beauty_lipstick_mascara_icon_186720 3.svg';
import insta from '../assets/insta.svg';
import face from '../assets/face.svg';
import shopee from '../assets/shopee-seeklogo.com.svg';
import aliexpress from '../assets/aliexpress_logo_icon_167892.svg';
import amazon from '../assets/amazon_icon-icons.com_62714.svg';
import { Link } from 'react-router-dom';



interface GetProdutosQueryResponse {
    mercadorias: {
        id: string
        link: string
        name: string
        preco: string
        loja: string
        categoria: string
        img:{
          url : string
        }
      }[]
    }



interface slug {
    active: string
}

function SliderBar(props: slug){

    const active = props.active 

    return(
        <aside className="bg-customBlue-200 flex flex-col w-96 p-5 h-full shadow-inner  ">

            {/* categorias */}
            <div className="text-white mt-3">
                <h1 className="text-2xl font-bold">
                    Categorias
                </h1>
                <div className="ml-5 mt-3 gap-2 flex flex-col">
                    <li>
                        <Link to="/categoria/todos" className={`flex items-center gap-2 ${active == 'todos' ? 'border-b w-fit' : ' '}`}>
                            <img src={frame} alt="" className="h-[20px]"/>
                            Todos
                        </Link>
                    </li>
                    <li>
                        <Link to="/categoria/eletronicos" className={`flex items-center gap-2 ${active == 'eletronicos' ? 'border-b w-fit' : ' '}`}>
                            <img src={cpu} alt="" className="h-[20px]"/>
                            Eletrônicos
                        </Link>
                    </li>
                    <li>
                        <Link to="/categoria/casa-e-decoracao" className={`flex items-center gap-2 ${active == 'casa-e-decoracao' ? 'border-b w-fit' : ' '}`}>
                            <img src={casa} alt="" className="h-[20px]"/>
                            Casa e Decoração
                        </Link>
                    </li>
                    <li>
                        <Link to="/categoria/papelaria-e-escritorio" className={`flex items-center gap-2 ${active == 'papelaria-e-escritorio' ? 'border-b w-fit' : ' '}`}>
                            <img src={clip} alt="" className="h-[20px]"/>
                            Papelaria e Escritório
                        </Link>
                    </li>
                    <li>
                        <Link to="/categoria/beleza-e-cuidados-pessoais" className={`flex items-center gap-2 ${active == 'beleza-e-cuidados-pessoais' ? 'border-b w-fit' : ' '}`}>
                            <img src={makeup} alt="" className="h-[20px]"/>
                            Beleza e Cuidados Pessoais
                        </Link>
                    </li>
                    <li>
                        <Link to="/categoria/cozinha" className={`flex items-center gap-2 ${active == 'cozinha' ? 'border-b w-fit' : ' '}`}>
                            <img src={cozinha} alt="" className="h-[20px]"/>
                            Cozinha
                        </Link>
                    </li>
                    <li>
                        <Link to="/categoria/aliexpress" className={`flex items-center gap-2 ${active == 'aliexpress' ? 'border-b w-fit' : ' '}`}>
                            <img src={aliexpress} alt="" className="h-[20px]"/>
                            Aliexpress
                        </Link>
                    </li>
                    <li>
                        <Link to="/categoria/shopee" className={`flex items-center gap-2 ${active == 'shopee' ? 'border-b w-fit' : ' '}`}>
                            <img src={shopee} alt="" className="h-[20px]"/>
                            Shopee
                        </Link>
                    </li>
                    <li>
                        <Link to="/categoria/amazon" className={`flex items-center gap-2 ${active == 'amazon' ? 'border-b w-fit' : ' '}`}>
                            <img src={amazon} alt="" className="h-[20px]"/>
                            Amazon
                        </Link>
                    </li>
                </div>
            </div>

            {/* contatos */}
            <div className="text-white mt-5">
                <h1 className="text-2xl font-bold">
                    Redes sociais
                </h1>
                <div className="ml-5 mt-3 gap-2 flex flex-col">
                    <li>
                        <a className="flex items-center gap-2">
                            <img src={insta} alt="" className="h-[20px]"/>
                            Instagram do site
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-2">
                            <img src={insta} alt="" className="h-[20px]"/>
                            Instagram pessoal
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-2">
                            <img src={face} alt="" className="h-[20px]"/>
                            Facebook do site
                        </a>
                    </li>
                </div>
            </div>

        </aside>
    )
};
export default SliderBar;
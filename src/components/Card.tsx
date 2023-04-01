import { Logo } from './Logo';

interface propsGadgets{
    titulo: string;
    img: string;
    preco: string;
    site: string;
    logo: string;
}

export function Card(props: propsGadgets){

    const logo = props.logo == "shopee" ? <Logo logo='shopee' loja='Shopee'/> : props.logo == "aliexpress" ? <Logo logo='aliexpress' loja='aliexpress' /> : props.logo == "amazon" ? <Logo logo='amazon' loja='Amazon'/> : "erro!"
    

    return(
        <div className="w-[250px] h-[340px] flex flex-col justify-between bg-slate-400 rounded-md overflow-hidden shadow-slate-900 shadow-md">
            <div className="p-3">
                <figure className="flex justify-center">
                    <img className="h-[200px] w-[180px] z-0" src={props.img} alt={props.logo}/>
                    {logo}
                </figure>
            </div>
            <div className="text-white bg-customBlue-200 p-3 ">
                <h2 className="w-full h-14 overflow-hidden">
                    {props.titulo}
                </h2>
            
                <div className="flex justify-between mt-3">
                    <p className="font-medium text-gray-200">
                        R${props.preco}
                    </p>
                    <a className="px-3 py-1 bg-customBlue-100 rounded-xl"
                        href={props.site}>
                        Comprar
                    </a>
                </div>
            </div>
        </div>
    )
}
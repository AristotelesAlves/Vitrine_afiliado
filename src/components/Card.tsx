interface propsGadgets{
    titulo: string;
    img: string;
    preco: string;
    site: string;
    logo: string;
}

export function Card(props: propsGadgets){

    return(
        <div className="w-[250px] h-[340px] flex flex-col justify-between bg-slate-400 rounded-md overflow-hidden shadow-slate-900 shadow-md">
            <div className="p-3">
                <figure className="flex justify-center w-full">
                    <img className="h-[200px] w-[180px] " src={props.img} alt={props.logo}/>
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
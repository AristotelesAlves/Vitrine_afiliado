import shopee from '../assets/shopee-seeklogo.com.svg';
import aliexpress from '../assets/aliexpress_logo_icon_167892.svg';
import amazon from '../assets/amazon_icon-icons.com_62714.svg';

interface propsLogo{
    logo: string
    loja: string
}

export function Logo(props: propsLogo){

    const logo = props.logo == "shopee" ? shopee : props.logo == "aliexpress" ? aliexpress : props.logo == "amazon" ? amazon : "erro!"

    return(
        <figure>
            <img
                className="h-[25px] w-full z-10"
                src={logo}
                alt={props.loja}/> 
        </figure>
    )
}
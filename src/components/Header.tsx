import { MagnifyingGlass } from 'phosphor-react';
import IMG from '../assets/gedgets.png';

function Header(){
    return(
        <header className="bg-customBlue-100 h-[60px] w-full flex items-center absolute justify-center shadow-md drop-shadow-md ">
            <div className="ml-5 font-bold text-3xl text-white">
                <h1>Vitrine de Afiliados</h1>
            </div>
        </header>
    )
};
export default Header;
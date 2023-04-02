import { Warning } from 'phosphor-react'
export function Else(){
    return( 
        <section className="w-full flex flex-wrap overflow-auto gap-5 justify-center items-center  bg-gradient-to-br from-customBlue-100 to-customBlue-200 px-2 py-4">
            <div className="flex flex-col justify-center items-center">
                <figure>
                    <Warning size={100} />
                </figure>
                <h1 className="font-bold text-3xl">
                    Selecione uma categoria!
                </h1>
            </div>
        </section>
    )
}
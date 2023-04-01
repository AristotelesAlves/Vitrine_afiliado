import { gql, useQuery } from "@apollo/client";
import { Card } from './Card';
import Filter from './Filter';
import FilterStore from "./FilterStore";

const GET_PRODUTOS_QUERY_ALL = gql `
  query cardQuery($slug: String) {
    mercadorias(where: {categoria: $slug}) {
      link
      name
      preco
      loja
      categoria
      img {
        url
      }
    }
  }
`


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
interface categoriaSlug{
  categoriaSlug: string;
}

function Body(props:categoriaSlug){
    const { data } = useQuery<GetProdutosQueryResponse>(GET_PRODUTOS_QUERY_ALL,{
      variables:{
        slug:props.categoriaSlug
      }
    })
    const all = props.categoriaSlug === 'todos' ? <Filter/> : ' '
    const store = props.categoriaSlug === 'aliexpress' ? <FilterStore store="aliexpress" /> : props.categoriaSlug === 'shopee' ? <FilterStore store="shopee" /> : props.categoriaSlug === 'amazon' ? <FilterStore store="amazon" /> : ' '

    return(
        <section className="w-full flex flex-wrap overflow-auto gap-5 justify-center items-center  bg-gradient-to-br from-customBlue-100 to-customBlue-200 px-2 py-4">
            {data?.mercadorias.map((card) => {
                return <Card key={card.id} titulo={card.name} img={card.img.url} preco={card.preco} site={card.link} logo={card.loja} />
            })}
            {all}
            {store}
        </section>
    )
}
export default Body;
import { gql, useQuery } from "@apollo/client";
import { Card } from './Card';

const GET_PRODUTOS_QUERY_ALL = gql `
  query cardQuery($slug: String) {
    mercadorias(where: {loja: $slug}) {
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

interface propsinterface{
    store: string
}

function FilterStore(props: propsinterface){

    const { data } = useQuery<GetProdutosQueryResponse>(GET_PRODUTOS_QUERY_ALL,{
        variables:{slug:props.store}})
    return (
        <>
            {data?.mercadorias.map((card) => {
                return <Card key={card.id} titulo={card.name} img={card.img.url} preco={card.preco} site={card.link} logo={card.loja} />
            })}
        </>
    )
}
export default FilterStore; 
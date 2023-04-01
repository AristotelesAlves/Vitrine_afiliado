import { gql, useQuery } from "@apollo/client";
import { Card } from './Card';

const GET_PRODUTOS_QUERY_ALL = gql `
  query cardQuery {
    mercadorias {
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

function filter(){
    const { data } = useQuery<GetProdutosQueryResponse>(GET_PRODUTOS_QUERY_ALL)
    return(
        <>
          {data?.mercadorias.map((card) => {
                return <Card key={card.id} titulo={card.name} img={card.img.url} preco={card.preco} site={card.link} logo={card.loja}/>
            })} 
        </>
    )
}
export default filter;
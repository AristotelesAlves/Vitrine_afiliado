interface IPaginacao{
    lmit: number;
    total: number;
    offset: number;
}

export function Paginacao (props: IPaginacao){

    const MAX_BUTTONS = 9;
    const MAX_BUTTONS_LEFT = (MAX_BUTTONS - 1) / 2;
    const current = props.offset ? (props.offset / props.lmit) + 1 : 1;
    const pages = Math.ceil(props.total / props.lmit); //Pega o resto
    const first = Math.max(current - MAX_BUTTONS_LEFT, 1); // no minimo vai ser um

    return(
        <ul>
            {Array.from({length: MAX_BUTTONS}).map((_, index) => index + first)}
        </ul>
    )
}
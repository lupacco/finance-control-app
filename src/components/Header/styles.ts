import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;  //centralizar

    padding: 2rem 1rem 10rem; //responsividade ao diminuir a tela
    display: flex; //disposição em sequencia dos elementos do header(logo e botão)
    align-items: center; //alinhamento da disposição dos elementos
    justify-content: space-between; //espaçãmento entre a logo e o botão(vulgo todos os itens dentro de content)

    button{
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem; //equivalente a 4 px no desktop
        height: 3rem;

        transition: filter 0.2s; //deixa a transição do brightness mais leve

        &:hover{
            filter: brightness(0.9); //vai levemente escurecer a cor do botao qdo passarmos o mouse por cima sem a necessidade de ficarmos procurando uma cor que case com a interação que queremos criar
        }
    }
`

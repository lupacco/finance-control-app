import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); //basicamente diz: quero 3 colunas de tamanhos iguais -> 1o parametro repita x vezes o 2o parametro. seria a mesma coisa que colocar 1fr 1fr 1fr
    gap: 2rem; //espaçamento entre cada item do grid
    margin-top: -10rem;

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;

        }
        &.highlight-background{
            background: var(--green);
            color: #fff;
        }
    }
`
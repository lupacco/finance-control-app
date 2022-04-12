import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
    const { transactions } = useContext(TransactionsContext)

    const totalDeposits = transactions.reduce((acumulator, transaction) => {
        if (transaction.type === 'deposit') {
            return acumulator + transaction.amount
        }
        return acumulator
    }, 0)

    const totalWithdraws = transactions.reduce((acumulator, transaction) => {
        if (transaction.type === 'withdraw') {
            return acumulator + transaction.amount
        }
        return acumulator
    }, 0)

    const totalBalance = totalDeposits - totalWithdraws

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalDeposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalWithdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalBalance)}
                </strong>
            </div>
        </Container>
    )
}
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: 'deposit' | 'withdraw',
  category: string,
  createdAt: string,
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(({data}) => setTransactions(data.transactions));
  }, [])


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>


        <tbody>
          {
            transactions.map((transaction) => (
              <tr key={ transaction.id }>
                <td>{ transaction.type }</td>
                <td className={ transaction.type }>
                  {
                    Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(transaction.amount) 
                  }
                </td>
                <td>{ transaction.category }</td>
                <td>
                  {
                    Intl.DateTimeFormat('pt-BR').format(
                      new Date(transaction.createdAt)
                    )
                  }
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </Container>
  );
}

import React from 'react'
import styles from './Invoice.module.css'

const Invoice = ({ invoices, user }) => {

  invoices = invoices.filter(i => i.buyerName === user)

  return (
    <div className={styles.InvoiceContainer}>
      <span> Invoices </span>
        <table>
          <tbody>
            <tr>
              <th> Buyer </th>
              <th> Date </th>
              <th> In total </th>
            </tr>
            {invoices.map(i =>
            <tr key={i.id}>
              <td> {i.buyerName} </td>
              <td> {i.date} </td>
              <td> {i.totalSum}€ </td>
            </tr>
            )}
          </tbody>
        </table>
        <span style={{marginBottom: "15px"}}> </span>
    </div>  
  )
}

export default Invoice

export default {
    name: 'cardTransactions',
    data() {
        return {
            transactionList: [
                {
                    icon: 'file',
                    t_name: 'Hamleys',
                    t_amount: '+ S$ 150',
                    t_date: '20 May 2020',
                    t_type_of_transaction: 'credit'
                },
                {
                    icon: 'flights',
                    t_name: 'Hamleys',
                    t_amount: '- S$ 150',
                    t_date: '20 May 2020',
                    t_type_of_transaction: 'debit'
                },
                {
                    icon: 'megaphone',
                    t_name: 'Hamleys',
                    t_amount: '- S$ 150',
                    t_date: '20 May 2020',
                    t_type_of_transaction: 'debit'
                },{
                    icon: 'file',
                    t_name: 'Hamleys',
                    t_amount: '- S$ 150',
                    t_date: '20 May 2020',
                    t_type_of_transaction: 'debit'
                }
            ]
        }
    }
}
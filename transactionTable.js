import { Table, Tag, Space } from 'antd';
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    TransactionID: '1',
    SecuritySymbol: 'MSFT',
    SecurityName : 'Microsoft Corp',
    TransactionDate: 'jan 2,2019, midnight',
    Quantity: '20',
    Price: '140',
    Action: 'Sell',
    HoldingQTY : '20'

  },
  {
    key: '2',
    TransactionID: '2',
    SecuritySymbol: 'AAPL',
    SecurityName : 'Apple Inc',
    TransactionDate: 'jan 3,2019, midnight',
    Quantity: '40',
    Price: '49',
    Action: 'Sell',
    HoldingQTY : '60'

  },
  {
    key: '3',
    TransactionID: '3',
    SecuritySymbol: 'AMZN',
    SecurityName : 'Amazoncom Inc',
    TransactionDate: 'jan 3,2019, midnight',
    Quantity: '75',
    Price: '700',
    Action: 'Buy',
    HoldingQTY : '50'

  },
  {
    key: '4',
    TransactionID: '4',
    SecuritySymbol: 'GOOG',
    SecurityName : 'Alphabet Inc Class C',
    TransactionDate: 'jan 4,2019, midnight',
    Quantity: '80',
    Price: '560',
    Action: 'Buy',
    HoldingQTY : '100'

  },
  {
    key: '5',
    TransactionID: '5',
    SecuritySymbol: 'FB',
    SecurityName : 'Facebook Inc',
    TransactionDate: 'jan 5,2019, midnight',
    Quantity: '90',
    Price: '550',
    Action: 'Sell',
    HoldingQTY : '150'

  }
];

export default class ExampleTransactionTable extends PureComponent {
    
    render() {
        return (
            <Table dataSource={data}>
           <Table width={3400} height={100} data={data}>
            <Column title="TransactionID" dataIndex="TransactionID" key="TransactionID" />
            <Column title="SecuritySymbol" dataIndex="SecuritySymbol" key=" SecuritySymbol" />
            <Column title="SecurityName" dataIndex="SecurityName" key="SecurityName" />
            <Column title="TransactionDate" dataIndex="TransactionDate" key="TransactionDate" />
            <Column title="Quantity" dataIndex="Quantity" key="Quantity" />
            <Column title="Price" dataIndex="Price" key="Price" />
            <Column title="Action" dataIndex="Action" key="Action" />
            <Column title="HoldingQTY" dataIndex="HoldingQTY" key="HoldingQTY" />
    
    
    
  </Table>
          </Table>
        );
      }
}
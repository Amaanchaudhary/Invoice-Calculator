import './App.css';
import React, { useState } from 'react'

function App() {

  const [data, setData] = useState({ quantity: '', price: '', margin: '', discount: '', tax: '' });
  const [data2, setData2] = useState([]);

  console.log(data, "data")
  console.log(data2, "data2")
  // console.log(data2[0]?.quantity, "one")

  function handleSubmit(event) {
    event.preventDefault();
    if (data.quantity && data.price && data.margin && data.discount && data.tax) {
      setData2([...data2, data])
      setData({ quantity: '', price: '', margin: '', discount: '', tax: '' })
    } else {
      alert("All fields are mandatory")
    }
  }

  function handleSubmit2(event) {
    event.preventDefault();
    // if (data.quantity && data.price && data.margin && data.discount && data.tax) {
    setData2([...data2, data])
    setData({ quantity: '', price: '', margin: '', discount: '', tax: '' })
    // } else {
    // alert("All fields are mandatory")
    // }
  }

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  function handleChange2(event) {
    setData({ ...data, [event.target.name]: event.target.value })
    // handleSubmit2(event)
  }

  return (
    <div className="App">
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <h1 className="Heading">Invoice Calculator</h1>
          <label>Quantity</label><br />
          <input type='number' name='quantity' onChange={handleChange} value={data.quantity} /><br />
          <label>Cost Price</label><br />
          <input type='number' name='price' onChange={handleChange} value={data.price} /><br />
          <label>Margin %</label><br />
          <input type='number' name='margin' onChange={handleChange} value={data.margin} /><br />
          <label>Discount %</label><br />
          <input type='number' name='discount' onChange={handleChange} value={data.discount} /><br />
          <label>Tax %</label><br />
          <input type='number' name='tax' onChange={handleChange} value={data.tax} /><br /><br />
          <input type='submit' value='Calculate' /><br />
        </form>
      </div>

      <div className='display'>
        <table>
          <tr>
            <th>Quantity</th>
            <th>Cost Price</th>
            <th>Margin %</th>
            <th>Margin</th>
            <th>Sales Price</th>
            <th>Total Sales Price</th>
            <th>Discount %</th>
            <th>Discount</th>
            <th>Tax %</th>
            <th>Tax</th>
            <th>Final sales price</th>
          </tr>

          {data2?.map((item, i) => (
            <tr key={i}>
              <td><input type='number' name='quantity2' value={item.quantity} onChange={handleChange2} /></td>
              <td><input type='number' name='price2' value={item.price} onChange={handleChange2}/></td>
              <td><input type='number' name='margin2' value={item.margin} onChange={handleChange2} /></td>
              <td>{item.price * item.quantity * (item.margin / 100)}</td>
              <td>{parseInt(item.price) + parseInt(item.price * item.quantity * (item.margin / 100))}</td>
              <td>{parseInt(item.quantity) * (parseInt(item.price) + parseInt(item.price * item.quantity * (item.margin / 100)))}</td>
              <td><input type='number' name='discount2' value={item.discount} onChange={handleChange2} /></td>
              <td>{(parseInt(item.quantity) * (parseInt(item.price) + parseInt(item.price * item.quantity * (item.margin / 100)))) * item.discount/100}</td>
              <td><input type='number' name='tax2' value={item.tax} onChange={handleChange2} /></td>
              <td>{(parseInt(item.quantity) * (parseInt(item.price) + parseInt(item.price * item.quantity * (item.margin / 100)))) * (item.tax/100)}</td>
              <td>{(parseInt(item.quantity) * (parseInt(item.price) + parseInt(item.price * item.quantity * (item.margin / 100)))) - ((parseInt(item.quantity) * (parseInt(item.price) + parseInt(item.price * item.quantity * (item.margin / 100)))) * item.discount/100) + ((parseInt(item.quantity) * (parseInt(item.price) + parseInt(item.price * item.quantity * (item.margin / 100)))) * (item.tax/100))}/-</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}


export default App;

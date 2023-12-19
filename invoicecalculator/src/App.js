import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState({ quantity: '', price: '', margin: '', discount: '', tax: '' });
  // const [data3, setData3] = useState({ quantity2: '', price2: '', margin2: '', discount2: '', tax2: '' });
  const [data2, setData2] = useState([]);

  console.log(data, "data")
  console.log(data2, "data2")
  // console.log(data3, "data3")

  function handleSubmit(event) {
    event.preventDefault();
    if (data.quantity && data.price && data.margin && data.discount && data.tax) {
      setData2([...data2, data])
      setData({ quantity: '', price: '', margin: '', discount: '', tax: '' })
    } else {
      alert("All fields are mandatory")
    }
  }


  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  function handleChange2( i , event){
    // console.log(i, "index")
    const updatedData = [...data2];  
    // console.log(updatedData, "updated")
    const { name, value } = event.target;
    // console.log(value , "name")
    updatedData[i][name] = value;
    // console.log(updatedData[i][name] , 'a')
    setData2(updatedData);
  }

  useEffect(() => {
    
  },[data2])

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
    {data2?.length ? 
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
              <td><input type='number' name='quantity' value={item.quantity} onChange={(event) => handleChange2(i , event)} /></td>
              <td><input type='number' name='price' value={item.price} onChange={(event) => handleChange2(i , event)}/></td>
              <td><input type='number' name='margin' value={item.margin} onChange={(event) => handleChange2(i , event)} /></td>
              <td>{item.price * item.quantity * (item.margin / 100)}</td>
              <td>{parseInt(item.price) + parseInt(item.price * item.quantity * (item.margin / 100))}</td>
              <td>{parseInt(item.quantity) * (parseInt(item.price) + parseInt(item.price * item.quantity * (item.margin / 100)))}</td>
              <td><input type='number' name='discount' value={item.discount} onChange={(event) => handleChange2(i , event)} /></td>
              <td>{(parseInt(item.quantity) * (parseInt(item.price) + parseInt(item.price * item.quantity * (item.margin / 100)))) * item.discount/100}</td>
              <td><input type='number' name='tax' value={item.tax} onChange={(event) => handleChange2(i , event)} /></td>
              <td>{(parseInt(item.quantity) * (parseInt(item.price) + parseInt(item.price * item.quantity * (item.margin / 100)))) * (item.tax/100)}</td>
              <td>{(parseInt(item.quantity) * (parseInt(item.price) + parseInt(item.price * item.quantity * (item.margin / 100)))) - ((parseInt(item.quantity) * (parseInt(item.price) + parseInt(item.price * item.quantity * (item.margin / 100)))) * item.discount/100) + ((parseInt(item.quantity) * (parseInt(item.price) + parseInt(item.price * item.quantity * (item.margin / 100)))) * (item.tax/100))}/-</td>
            </tr>
          ))}
        </table>
      </div> : <div><h2>No Records</h2></div>
}
    </div>
  );
}


export default App;

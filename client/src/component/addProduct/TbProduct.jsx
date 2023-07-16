import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const TbProduct = ({user}) => {
    const [product, setProduct] = useState([]);
const userid = user
console.log("useidTableau",userid);

  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/product/getOne/${userid}`);
        setProduct(res.data);

      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProduct();
    

  }, [userid]);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/product/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='tbb'>
        <table className="table table-bordered table-dark">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Cover</th>
      <th scope="col">Price</th>
      <th scope="col">delete Product</th>
      <th scope="col">Update Product</th>


    </tr>
  </thead>
  <tbody>
    {product.map((elem)=>(

    <tr key={elem.id}>
      <th scope="row">{elem.name}</th>
      <td>{elem.description}</td>
      <td>

      <img src={elem.imageUrl} alt=""style={{height:"90px"}} />
      </td>
      <td>{elem.price}</td>
    <td>

<button  type="button" className="btnn btn-success  ">
  <Link to={`/update/${elem.id}`}>Update</Link>
  </button>
    </td>
<td>
    <button type="button" className="btnn btn-danger"  onClick={() => handleDelete(elem.id)}>Delete</button>

</td>

    </tr>
    ))}

    
  </tbody>
</table>
    </div>
  )
}

export default TbProduct
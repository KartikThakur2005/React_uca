import { useEffect, useState } from "react";

function Product()
{
 var [productList ,setProduct] = useState([]);
 
 setTimeout(()=>{
  setProduct([
    {name:"Apple", price: "20"},
    {name:"Mango", price: "30"},
    {name:"Banana", price: "40"},
    {name:"PineApple", price: "50"},
  ])

 },1000);
 


  
     return <div>
        <table style={{border:"2px solid black"}}>
            <thead>
            <th>Product Name</th>
            <th>Product Price</th>
           
            </thead>
            <tbody>
              {
                   productList.map((item, ind)=>{
                    return(
                       <tr key={ind}>
                         <td>{item.name}</td>
                         <td>{item.price}</td>
                       </tr>
                    )
                     
                   })
              }
            </tbody>
            
        </table>
     </div>
}
export default Product;
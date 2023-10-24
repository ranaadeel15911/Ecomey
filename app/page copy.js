'use client'
import { useEffect, useState } from 'react'
export default function Home() {
  const [getProduct,setGetProduct ] = useState([])
  // const [loader,setLoader] = useState(false)
  const [loader,setLoader] = useState(true)
  const fetchproducts = async()=>{
    setLoader(true)
/* || */  /* And this loader for when we fetch document from button we can comment it because we are getting it from useEffect */   /* || */    
    const products =  await fetch('https://fakestoreapi.com/products')
    const newProducts = await products.json()
    setGetProduct(newProducts)
    setLoader(false)
/* || */   /* A focusfull thing to note here is that normally we take false as loader in initial level but when we used useEffect than we will 
    take loader at initial level true  */   /* || */
  }
  const handleProduct = ()=>{
    fetchproducts()
  }
  useEffect(()=>{
    console.log('Fetching Products')
    fetchproducts()

  },[])
  return (
    <>
    
    {/* We will use fakestoreapi.com */}
    <button style={{fontSize:30}} onClick={handleProduct}>Fetch Products</button> <br /><br />
    {/* {loader && <h1> Loaidng...</h1>} */}
    {!loader 
    ?
    <table style={{border:'2px solid black'}}>
    {getProduct.map((abc)=>{
return (
  <>
    <tr style={{border:'2px solid black'}}>
      <td style={{border:'2px solid black'}}>{abc.id}</td>
      <td style={{border:'2px solid black'}}>{abc.title}</td>
      <td style={{border:'2px solid black'}}>{abc.price}</td>
      <td style={{border:'2px solid black'}}>{abc.category}</td>
      <td style={{border:'2px solid black'}}>{abc.description.slice(0,20)}.....</td>
      <td style={{border:'2px solid black'}}> <img src={abc.image} width={30} alt="" /></td>
    </tr>
  </>
)
})}
</table> 
:
<h2>Loading....</h2>
      
    }
    
    </>
     )
}

/* We can see page copy.js file but it is client side rendering */
/* By this seo will be zero so we are converting it into server side but here is another challange that how can we call api through server */
/* So we firstly took out this function which will take time and we made async to the main function Home() as we will request it firstly 
enter to home page than will gether products by fetchproducts and will store in getProducnt variable and than after getting it.it will
load Home().But the drawback to do this or to render this html on server we will see white screen untill HOme page will load. */

/* It also provide three fucntionality fetch,catch and revalidation */
/* Here fetch is not the fetch of react it is next js fetch which have fucntionality to memeorize data means it will only one time call
to api than it will store in catch and will render same data */
/* But by this if we add or delete any data than it will give same data which stored in catch so Next js managed it beautifully by 
revalidation */

/* Revalidate means if we validate or make changing in data than it will be re render according to these two functionality 
(1) By time  can see on line 17
(2) On demand can see on line 18*/
const fetchproducts = async()=>{
  const products =  await fetch('https://fakestoreapi.com/products', { next: { revalidate: 3600 } })
  // const products =  await fetch('https://fakestoreapi.com/products', { next: { tags: ['collection'] } })
  /* It means we can give information that if add to cart anyone than revalidate to cart data or if new order placed than again re render  */
  const newProducts = await products.json()
  return newProducts
} 
export default async function Home() {
  const loader = false
  const getProduct =await fetchproducts()
  return (
    <> 
    {/* <button style={{fontSize:30}} onClick={handleProduct}>Fetch Products</button> <br /><br /> */}
    <h1>Products</h1>
    {/* {loader 
    ? */}
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
{/* :
<h2>Loading....</h2>
      
    } */}
    
    </>
     )
}

import React, { useEffect,useState } from 'react'
import axios from "axios"
import "./Pagination.css"
import Loader1 from './Loader1';
import { debounce } from 'lodash';

export default function Pagination() {

    const [productData,setProductData] = useState([]);
    const [total,setTotal] = useState(0);
    const [skip,setSkip] = useState(1);
    const [search,setSearch] = useState("");
    const [loading,setLoading] = useState(true);

    var skipper
    if(skip>=0 && skip<=10){
      skipper = 10*skip-10;
    }

    const fetchProducts = async()=>{
      try {
	        const {data} = await axios.get(`https://dummyjson.com/products?limit=10&skip=${skipper}`)
	        setProductData(data.products)
          setTotal(data.total)
          setLoading(false)
          } catch (error) {
            console.log("Error is:",error)
          };
    }
    const arr = Array.from({length:total/10},(val,i)=>i+1);

    const handleClick=(val)=>{
      setSkip(val)
    }

    const handleChange= debounce((e)=>{
      setSearch(e.target.value)
    },1000)


    useEffect(() => {
      // calling function
      fetchProducts()
    }, [skipper])

    if(loading){
      return(
        <Loader1/>
      )
    }

  if(productData.length>0 && loading===false){
  return (
    <div className='container'>
      <div className="search__bar">
        <input type="search" id="search" onChange={handleChange}/>
      </div>
      <div className="grid">
        {
          productData.length===0 && <div>No items to show</div>
        }
        {
          productData?.filter((val,i,arr)=>
             !search || val.title.toLowerCase().includes(search.toLowerCase())
          ).map((val,ind)=>{
            return(
            <div className="product_container" key={ind}>
              <div className="image">
                <img src={val.thumbnail} alt="products" />
              </div>
              <div className="product_data">
                <div className="prod_title">{val.title.length > 15 ? `${val.title.slice(0,15)}...`:val.title}</div>
                <div className="prod_price">${val.price}</div>
              </div>
            </div>
            )
          })
        }
      </div>
      <div className="paginations">
        <div className={skip===1?"disable":"prev btn"} onClick={()=>handleClick(skip - 1)}>Prev</div>
        {
          arr.map((val,id)=>{
            return (
              <div className={skip===val?"number hover":"number"} onClick={()=>handleClick(val)} key={val}>
                {val}
              </div>
            )
          })
        }
        <div className={skip===10?"disable":"next btn"} onClick={()=>handleClick(skip+1)}>Next</div>
      </div>
    </div>
  )
  }
}

import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const Get = () => {
  const[columns,setColumns]=useState([])
  const [records, setRecords] = useState([])
  // const navigate = useNavigate()
  
  const fetchData = () => {
    axios.get('http://localhost:3030/users')
      .then(res => {
        const firstRecord = res.data[0];
        const newColumns = firstRecord
          ? ['#', ...Object.keys(firstRecord).filter(key => key !== 'id')]
          : [];
          setColumns(newColumns);
      setRecords(res.data)
  })
  }
  useEffect(() => {
    fetchData()
  }, [])
  const handleSubmit = (id) => {
    const conf = window.confirm("DO you want to delete");
    if (conf) {
      axios.delete(`http://localhost:3030/users/` + id)
        .then(res => {
          alert('record deleted');
            fetchData(); 
      }).catch(err=>console.log(err))
    }
  }
  return (
    <>
      <section className="show__data">
      <Link to='/create'><button className="btn create__btn"> Create +</button></Link>

          <div className="wrapper">
          <ul className="table__head" style={{paddingInlineStart:"120px"}} >
              {columns.map((c, i) => (
                <li key={i} >{c}</li>
              ))}
              <li className="action">Action</li>
          </ul>
          {
              records.map((d, i) => (
                <ul className="table__body" style={{paddingInlineStart:"120px"}} key={i}>
                  <li>{ d.id}</li>
                  <li>{ d.name}</li>
                  <li>{d.email}</li>
                  <li className="btn__parent">
                    <Link to={`/update/${d.id}`}><button className="btn btn__green">Update</button></Link>
                  <button onClick={()=>handleSubmit(d.id)} className="btn btn__red">Delete</button>
                  </li>
                </ul>
              ))
            }
            </div>
         
    </section>
    
    </>
    )
}

export default Get
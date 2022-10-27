import {Helmet} from 'react-helmet'
import './homePageStyle.css'
import {useState, useEffect} from 'react';

export default function Search() {
    const [scholarships, setScholarships] = useState([]);
    const [search, setSearch] = useState("")


    const getDefault = async()=>{
        const data = await fetch ("http://localhost:5000/default")
        const res = await data.json();
        setScholarships(res);
    }
    useEffect(() =>{
        getDefault()
    },[])

    const searchScholar = async() => {
      if (search === ''){
        alert("Please enter an input")
      }
      else{
        const data = await fetch('http://localhost:5000/getScholarShips', {
          method:"POST",
          headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            credentials: 'include', // Don't forget to specify this if you need cookies
            body:JSON.stringify({keyWord: search})
      })
      const response = await data.json();
      setScholarships(response);
      console.log(response)
      }
    }

    return(
    <div>
      <Helmet>
        <title>ScholarX</title>
      </Helmet>

      <header class = "container flex"> 
        <div>
         <h1 class = "nounderline"><a href = "/" class = "headLink">ScholarX</a></h1>
        </div>

        <div>
          <nav>
            <ul  class = "ulFlex">
              <li><a href = "/" class = "noDec">Home</a></li>
              <li><a href = "/" class = "noDec">About</a></li>
              <li><a href = "/" class = "noDec">Service</a></li>
            </ul>
          </nav>
        </div>




      </header>

      <main class = "scholarMain">
        <h1 class = "scholarText">Our Scholarships</h1>
        <div class = "inputField">
          <input type = "text" placeholder='interest, catergory, or name!' onChange = {(e) => setSearch(e.target.value)} value = {search}></input>
          <button style = {{"marginLeft":"5px"}} onClick = {()=> searchScholar()}>Search</button>
        </div>
        <div class = "scholarshipHolder">
          
          {scholarships.length === 0 ? <h2 style={{"textAlign":"center"}}>We are sorry! We could not find any scholarships that matched with the given information </h2> : scholarships.map((elem) => {
            return(
              <div class = "scholarCard">
                <div>
                  <h2>{elem.name}</h2>
                  <p>{elem.price}</p>
                </div>
                <p>{elem.description}</p>
                <a href = {elem.link}><button>Visit</button></a>
              </div>
            )

          })}
        
        </div>
      </main>
    </div>
  )
}

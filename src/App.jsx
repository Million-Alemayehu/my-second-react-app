import { useEffect, useState } from 'react'
import './index.css';


const Card =({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title}" has been ${hasLiked ? "liked" : "unliked"}.`);
  }, [hasLiked, title]);


  return (
    <div className="card" onClick={()=>setCount(count+ 1)}>
      <h2>{title}<br/>{count || null}</h2>

      <button onClick = {() => setHasLiked(!hasLiked)}>
        {hasLiked ? "🧡" : "🤍"}
      </button>
    </div>  
  )
}


const App = () => {
  

  return (
    <div classname= "card-container">
      <Card title="Star Wars" rating= {5} isCool={true} />
      <Card title="Avater" />
      <Card title="The Lion King" />
    </div>
    
  )
}

export default App

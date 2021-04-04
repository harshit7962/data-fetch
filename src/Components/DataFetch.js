import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
<script src="https://kit.fontawesome.com/e3f169f2ea.js" crossorigin="anonymous"></script>

function DataFetch() {

    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    const [idfrombuttonclick, setIdfrombuttonclick] = useState(1)
    const inputRef = useRef(null)

    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        inputRef.current.focus()
    },[idfrombuttonclick])

    return (
        <div>
            <h2>Enter the index of post to be fetched</h2>
            <div><input ref={inputRef} value={id} onChange={e => setId(e.target.value)} className="input"/></div>
            <button onClick={() => setIdfrombuttonclick(id)} className="btn">Get Text</button>

            <h3>The obtained text is:</h3>
            <span className='span'><h2>"{posts.title}"</h2></span>            
        </div>
    )
}

export default DataFetch
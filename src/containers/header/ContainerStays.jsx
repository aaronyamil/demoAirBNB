import React, {useState, useEffect} from 'react'
import ListStay from '../../components/ListStay'

function ContainerStays() {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState("");

    useEffect(() => {
        console.log("--- flag");
         setCount(12);
         setTitle("Stays in Finland")
      }, []);

    return (
        <div>
            <ListStay title={title} count={count}/>
        </div>
    )
}

export default ContainerStays

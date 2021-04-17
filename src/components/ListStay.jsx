import React, {useState, useEffect} from 'react'
import { staysData } from '../utils/FakeApi'
import Stay from './Stay'
import '../styles/lists.css'

function ListStay(props) {

    const [list, setList] = useState([])

    useEffect(() => {
        setList(staysData);
     },[]);

    return (
        <div>
            <div className="contentList">
                <div className="rowsList">
                <div className="titleStays">{props.title}</div>
                <div className="count">{props.count}+ stays</div>
                </div>
               
                <div className="rowsList">
                    {
                        list.map((data, key)=>{
                            return(
                                <Stay key={key} list={data} />
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default ListStay

import {React, useState, useEffect} from 'react'

const About = () => {
    //data on lista objekteja (eli json)
    const [data, setData] = useState([
        {}
    ]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => setData(json))
    }, [])

    return (
        <div>
            <ul>
                {
                    data.map((item, i) => <li key={item.id} >{item.title}</li>)
                }
            </ul>
        </div>
    )
}

export default About

import './MyComponent.css';
import { Fragment, useState } from "react"

const MyComponent = () => {
    const counter = 0;
    const [myCounter, setMyCounter] = useState(3)

    const handButtonClick = (param) => {
        console.log('Молодец', myCounter)
        if (param == 'increment') {
            setMyCounter(myCounter + 1)
        }

        if(param == 'decrement') {
            setMyCounter(myCounter - 1)
        }
    }
    return (
        <Fragment>
            <div className='my-div'>900</div>
            <div>{myCounter}</div>
            <button onClick={()=> handButtonClick('increment')}>Click me</button>
        </Fragment>
    )
}

export default MyComponent;
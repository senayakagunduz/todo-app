import React,{useState,useEffect} from 'react'
import "./footer.css";

function Footer() {

// const [footer,setFooter]=useEffect(false);

// useEffect(()=>{
//     setFooter()
// })
// addFooter(setFooter);
// if(!footer){
//     setFooter(true);
// }
    return (
        <div >
            <footer >
                <div className='footer'>
                    <div >
                        <p className='todo-count ml-1'>items left</p>
                    </div>

                    <div >
                        <ul className='listButton'>
                            <li className='ml-3'>all</li>
                            <li className='ml-3'>active</li>
                            <li className='ml-3'>complated</li>
                        </ul>
                    </div>

                    <div  >
                        <span className='span ml-3 mr-1'>completed</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
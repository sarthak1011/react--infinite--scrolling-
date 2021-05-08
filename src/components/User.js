import React,{useEffect} from 'react'

const User = (props) => {
 
  return (
      // <>
    <div className="col-12">
    <ul className="list-group">
    <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <div className="flex-column">
          {props.name.first} {props.name.last}
          </div>
          <div style={{maxWidth:40}}>
              <img src={props.picture.thumbnail} className="img-fluid" alt="quixote"/>
          </div>
        </a>
    {/* <li class="list-group-item">{props.name.first} {props.name.last} </li> */}
  </ul>
     
    </div>
   
  // </>
  )
}

export default User

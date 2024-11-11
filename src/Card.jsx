import mypic from './assets/download.png'
function Card(props){
    return (
        <div className="card">
            <img src={mypic} alt="my-image" />
          <h2>Name:{props.name}</h2>
          <p>Age:{props.age}</p>
          <p>Enrolled:{props.isEnrolled?"Yes":"No"}</p>
        </div>
    );}
    Card.defaultProps={
        name:"Guest",
        age:0,
        istudent:false,
    }


export default Card
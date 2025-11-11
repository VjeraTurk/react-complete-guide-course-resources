import './CoreConcept.css'
//export default function CoreConcept(props) {
export default function CoreConcept({image, title, description}) {
        return (
          <li>
            {/* <img src={props.image} alt={props.title}></img>*/}
            <img src={image} alt={title}></img>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        );
      }
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png'
const reactDescriptions  = ['Fundamental', 'Crucial', 'Core']
import { CORE_CONCEPTS } from './data.js';

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// function CoreConcept(props) {
function CoreConcept({image, title, description}) {
  return (
    <li>
      {/* <img src={props.image} alt={props.title}></img>*/}
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Header() {

  const description = reactDescriptions[genRandomInt(reactDescriptions.length - 1)]
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description ="The core UI building block."
              image={componentsImg}
            ></CoreConcept>
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description ={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>

        </ul>
        </section>
      </main>
    </div>
  );
}
// must be exported - index.js imports it
export default App;

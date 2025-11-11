import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';

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

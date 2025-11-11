// React hooks
import { useState } from 'react';

import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

  // 2 important things about calling React hooks
  // 1, they must not be called outside of React component function
  // 2. they must not be called in nested code statements ( e.g. inside of an if-statement, a loop)

  //    current state value, state updating function  initial state value
  const [selectedTopic, setSelectedTopic] = useState("Please click a button!"); // revalueate the state

  let tabContent = "Please click a button!"

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic) keep in mind this is an old topic!
  }

  // by default it executes only once
  console.log('APP COMPONENT EXECUTING')
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => handleSelect('Components')}>
              {/* this here is children, the content of the component */}
                Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('States')}>States</TabButton>
          </menu>
         {selectedTopic}
        </section>
      </main>
    </div>
  );
}
// must be exported - index.js imports it
export default App;

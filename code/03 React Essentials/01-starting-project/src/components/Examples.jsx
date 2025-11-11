import { useState } from 'react';
import { EXAMPLES } from '../data-with-examples.js'
import TabButton from './TabButton.jsx'

export default function Examples(){
     // 2 important things about calling React hooks
  // 1, they must not be called outside of React component function
  // 2. they must not be called in nested code statements ( e.g. inside of an if-statement, a loop)

  //    current state value, state updating function  initial state value
  const [selectedTopic, setSelectedTopic] = useState(); // re-evaluate the state

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic) keep in mind this is an old topic!
  }


  let tabContent = <p>Please select a topic.</p>;
  if(selectedTopic) {
    tabContent =  <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
    </div>;
  }
    return (
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
            isSelected = {selectedTopic == 'components'}
              onSelect={() => handleSelect('components')}>
              {/* this here is children, the content of the component */}
                Components
            </TabButton>
            <TabButton isSelected = {selectedTopic == 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic == 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected = {selectedTopic == 'state'} onSelect={() => handleSelect('state')}>States</TabButton>
          </menu>
          {tabContent}
        </section>
    );
}
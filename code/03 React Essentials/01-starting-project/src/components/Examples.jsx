import { useState } from 'react';

import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

import { EXAMPLES } from '../data-with-examples.js';

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
        <Section id="examples">
          <h2>Examples</h2>
          <Tabs
          // buttonsContainer="menu"
            buttons={
              <>
                <TabButton isSelected = {selectedTopic == 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected = {selectedTopic == 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected = {selectedTopic == 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected = {selectedTopic == 'state'} onClick={() => handleSelect('state')}>States</TabButton>
              </>
            }
          >
          {/* this here is children, the content of the component */}
          {tabContent}
          </Tabs>

        </Section>
    );
}
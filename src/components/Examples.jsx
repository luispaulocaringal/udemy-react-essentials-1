import { useState } from "react";

import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";

import { EXAMPLES } from "../data.js";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("")

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton isActive={selectedTopic === "components"} onClick={() => handleSelect("components")}>Components</TabButton>
        <TabButton isActive={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}>JSX</TabButton>
        <TabButton isActive={selectedTopic === "props"} onClick={() => handleSelect("props")}>Props</TabButton>
        <TabButton isActive={selectedTopic === "state"} onClick={() => handleSelect("state")}>State</TabButton>
      </menu>
      <div id="tab-content">
        {selectedTopic ? (
          <>
            <h3>{ EXAMPLES[selectedTopic].title }</h3>
            <p>{ EXAMPLES[selectedTopic].description }</p>
            <pre>
              <code>
                { EXAMPLES[selectedTopic].code }
              </code>
            </pre>
          </>
        ) : (
          <p>Please select a topic</p>
        )}
      </div>
    </Section>
  )
}

export default Examples;
import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import TabButton from "../TabButton/TabButton.jsx";
import Section from "../Section/Section.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
          label={"Components"}
        />
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
          label={"JSX"}
        />
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
          label={"Props"}
        />
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
          label={"State"}
        />
      </menu>
      {tabContent}
    </Section>
  );
}

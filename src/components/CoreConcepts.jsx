import CoreConcept from "./CoreConcept.jsx";

import { CORE_CONCEPTS } from "../data.js"

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul>{ CORE_CONCEPTS.map((item, i) => <CoreConcept {...item} key={i}/>) }</ul>
    </section>
  )
}

export default CoreConcepts;
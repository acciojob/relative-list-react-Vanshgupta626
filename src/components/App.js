import React from "react";
import './../styles/App.css';

const App = () => {

  const relatives = [
    "Mama",
    "Chacha",
    "Bua",
    "Dada",
    "Nani"
  ];

  return (
    <div>
      {/* Do not remove the main div */}

      <ol key="relativeList">
        {relatives.map((name, index) => (
          <li key={`relativeListItem${index + 1}`}>
            {name}
          </li>
        ))}
      </ol>

    </div>
  );
}

export default App;

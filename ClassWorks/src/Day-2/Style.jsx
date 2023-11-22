import React from "react";

const Style = () => {
  return (
    <div
      style={{
        backgroundColor: "lightBlue",
        padding: "10px",
        border: "1px solid blue",
        borderRadius: "5px",
      }}
    >
      <h1 style={{ color: "green" }}>
        <center>"Inline Style in JSX Example"</center>
      </h1>
      <p
        style={{
          color: "darkblue",
          fontsize: "16px",
        }}
        
      >
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
        molestiae, doloribus iusto omnis, soluta delectus odio accusamus impedit
        facere itaque laudantium officia quis recusandae dicta hic et. Itaque,
        vero est?"
      </p>
    </div>
  );
};
export default Style;

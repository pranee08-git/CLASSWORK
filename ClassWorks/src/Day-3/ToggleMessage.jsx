import { useState } from "react";
const ToggleMessage = () => {
  const [isVisible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!isVisible);
  };
  return (
    <div>
      <button onClick={handleClick}>Show Message</button>
      {isVisible === true ? <p>Hi Everyone</p> : null}
    </div>
  );
};

export default ToggleMessage;
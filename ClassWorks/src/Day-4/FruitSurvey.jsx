import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
const fruits = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];
function FruitSurvey() {
  const [name, setName] = useState("");
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [greetingMessage, setGreetingMessage] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleFruitChange = (_, value) => {
    setSelectedFruit(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setGreetingMessage(
      `Hello, ${name}! Your favorite fruit is ${selectedFruit}.`
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        data-testid="name"
        value={name}
        onChange={handleNameChange}
        fullWidth
        margin="normal"
      />
      <Autocomplete
        options={fruits}
        value={selectedFruit}
        onChange={handleFruitChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a fruit"
            data-testid="autocomplete"
            fullWidth
          />
        )}
        fullWidth
        margin="normal"
      />
      <br></br>
      <center>
        <Button type="submit" variant="contained" data-testid="button">
          Submit
        </Button>
      </center>
      {greetingMessage && <p>{greetingMessage}</p>}
    </form>
  );
}
export default FruitSurvey;
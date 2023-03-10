import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButtons() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="female"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Male"
        />
      </RadioGroup>
    </FormControl>
  );
}

import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface SelectProps {
  dogStatus: (active: string) => void
}

const SelectField = ({ dogStatus }: SelectProps) => {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
    dogStatus(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'available'}>available</MenuItem>
          <MenuItem value={'sold'}>sold</MenuItem>
          <MenuItem value={'pending'}>pending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectField

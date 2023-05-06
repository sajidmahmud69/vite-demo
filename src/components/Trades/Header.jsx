import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useState } from 'react';

const Header = () => {
    const [dateType, setDateType] = useState ('Trade Date Entry')
  return (
    <Box>
        <InputLabel id="demo-simple-select-label">Date Type</InputLabel>
        <Box sx={{ 
            minWidth: 120,
            color: 'text.primary'
        }}
        >
            <FormControl fullWidth>
                <break />
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dateType}
                label="Date Type"
                onChange={e => setDateType(e.target.value)}
                style = {{
                    backgroundColor: 'white'
                    }}
                    >
                <MenuItem value={'Trade Entry Date'}>Trade Entry Date</MenuItem>
                <MenuItem value={'Trade Closing Date'}>Trade Closing Date</MenuItem>
                <MenuItem value={'Settlement Date'}>Settlement Date</MenuItem>
                </Select>
            </FormControl>
        </Box>
    </Box>
  )
}

export default Header
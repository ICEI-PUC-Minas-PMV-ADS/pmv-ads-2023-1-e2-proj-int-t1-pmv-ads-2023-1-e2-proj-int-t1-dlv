import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

import SearchBarStyle from './style';

const SearchBar = () => {

    const filter = createFilterOptions();

    const [value, setValue] = useState(null);

    const orders = [{}, {}]


    return(
        <SearchBarStyle>
            <div className='search-bar'>
                <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                        if (typeof newValue === 'string') {
                        setValue({
                            title: newValue,
                        });
                        } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setValue({
                            title: newValue.inputValue,
                        });
                        } else {
                        setValue(newValue);
                        }
                    }}
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        const { inputValue } = params;
                        // Suggest the creation of a new value
                        const isExisting = options.some((option) => inputValue === option.title);
                        if (inputValue !== '' && !isExisting) {
                            filtered.push({
                            inputValue,
                            title: `não encontrado "${inputValue}"`,
                            });
                        }
                        return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="free-solo-with-text-demo"
                    options={orders}
                    getOptionLabel={(option) => {
                        // Value selected with enter, right from the input
                        if (typeof option === 'string') {
                        return option;
                        }
                        // Add "xxx" option created dynamically
                        if (option.inputValue) {
                        return option.inputValue;
                        }
                        // Regular option
                        return option.title;
                    }}
                    renderOption={(props, option) => <li {...props}>{option.title}</li>}
                    sx={{ width: 300}}
                    freeSolo
                    renderInput={(params) => (
                        <TextField 
                            {...params} label="Pesquisa"
                            sx={{color:'white'}} 

                        />
                    )}
                />
            </div>
        </SearchBarStyle>
    )
};

export default SearchBar;
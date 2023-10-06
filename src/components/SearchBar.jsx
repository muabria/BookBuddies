import { TextField, Button, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react"

const SearchBar = ({onSubmit}) => {
    const [searchText, setSearchText] = useState("");
    return (
        <>
{/*-----------------------------------------TEXT FIELD--------------------------------------- */}
            <TextField
                type='text'
                label="Search Book"
                size='small'
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                sx={{
                    backgroundColor: 'white',
                }}/>
{/*-----------------------------------------SUBMIT BUTTON--------------------------------------- */}
            <Button
                variant="contained"
                onClick={() => onSubmit(searchText)}
                sx={{ ml: 2 }}>
                <SearchIcon />
            </Button>
        </>
    )
}
export default SearchBar
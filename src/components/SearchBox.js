import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border: "10px solid #FBF8BE",
  borderWidth: "2px 4px",
  borderRadius: "50px",
  // borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  backgroundColor: "#fff",
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  cursor: "pointer",
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: '100%',
  justifyContent: 'flex-start',
  // [theme.breakpoints.only('xs')]: {
  //  display:"none"
  // },
  [theme.breakpoints.between('sm', 'md')]: {
    marginLeft: theme.spacing(5),
    width: 'auto',
  },
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(15),
    width: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    marginRight: theme.spacing(15),
    width: 'auto',
  },
  [theme.breakpoints.up('xl')]: {
    marginRight: theme.spacing(15),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: "pointer",
  color: "#37474f"



}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: 'inherit',
  color: "#37474f",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
    [theme.breakpoints.up('lg')]: {
      width: '65ch',
    },
    [theme.breakpoints.up('xl')]: {
      width: '95ch',
    },
  },
}));


export default function SearchBox() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/name/${name}`);
  };
  return (

    <form onSubmit={submitHandler} >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for Products,brands and more..."
          inputProps={{ "aria-label": "search" }} onChange={(e) => setName(e.target.value)}
        />
      </Search>
    </form>
  );
}

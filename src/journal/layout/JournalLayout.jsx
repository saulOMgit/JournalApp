import { Box } from "@mui/system"
import { NavBar,Sidebar } from "../components/";
import { Toolbar } from "@mui/material";

const drawerWidth=240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        <NavBar drawerWidth={drawerWidth}/>

        <Sidebar drawerWidth={drawerWidth}/>

        <Box
            component='main'
            sx={{flexGrow:1,p:3}}
        >
            <Toolbar/>
            {children}

        </Box>
    </Box>
  )
}

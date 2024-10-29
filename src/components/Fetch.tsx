import { IconButton, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Fetch = () => {
    interface Post {
        userId: number;
        id: number;
        title: string;
        body: string;
      }
      
    const [data, setData] = useState<Post[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentId, setCurrentId] = useState(0);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
      setAnchorEl(event.currentTarget);
      setCurrentId(id);
    };
    const handleClose = () => {
      console.log("on close", currentId);
      setAnchorEl(null);
    };
  
    useEffect(() => {
      const fetchDataForPosts = async () => {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=8`
          );
          if (!response.ok) {
            throw new Error(`HTTP error: Status ${response.status}`);
          }
          let postsData = await response.json();
          setData(postsData);
          setError("");
        } catch (err) {
          if(err instanceof Error){
              setError(err.message);
          }
          setData(null);
        } finally {
          setLoading(false);
        }
      };
  
      fetchDataForPosts();
    }, []);
    return ( 
        <>
            {loading && (
            <div className="text-xl font-medium">Loading posts...</div>
            )}
            {error && <div className="text-red-700">{error}</div>}
            {
                data && (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>User Id</TableCell>
                                <TableCell>Id</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Body</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.map((row) => (
                                <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell>{row.userId}</TableCell>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.body}</TableCell>
                                <TableCell>
                                    <IconButton
                                        id="long-button"
                                        onClick={(event) => handleClick(event, row.id)}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>

                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Edit</MenuItem>
                            <MenuItem onClick={handleClose}>Action</MenuItem>
                            <MenuItem onClick={handleClose}>Remove</MenuItem>
                        </Menu>
                    </TableContainer>
                )
            }
        </>
     );
}
 
export default Fetch;
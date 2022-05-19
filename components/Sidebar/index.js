import { Typography, Paper, Divider, MenuList, MenuItem, ListItemText } from "@mui/material";
import Link from 'next/link'
const Sidebar = (props) => {
  console.log(props.tags[0].name);

  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <Typography textAlign="center" variant="h4">Categories</Typography>
      <Divider />
      <MenuList>
        {props.tags.map((tag, idx) => (
          <div key={idx}><MenuItem >


            <Link href={`/blog/category/${tag.slug}`}>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>

                {tag.name}
              </a>
            </Link>
          </MenuItem><Divider /></div>

        ))}





      </MenuList>
    </Paper>
  );
}
export default Sidebar;
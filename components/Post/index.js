import { Container, Grid, Badge, Divider, Typography, Button, Stack, Paper, Toolbar, Card, CardHeader, CardMedia, CardContent, CardActions } from '@mui/material'
import Link from 'next/link'
import { StyledBadge } from './Style'
import moment from 'moment'
const Post = (props) => {
  const date = moment(props.publishedAt).format('MM/DD/YYYY')
  return (
    <Card  >
      <CardHeader


        title={props.title}
        subheader={<>{date} By {props.author} <br></br><StyledBadge color="secondary">
          {props.category}
        </StyledBadge ></>}

      ></CardHeader>
      <CardContent>

        <Grid container spacing={2} >
          <Grid item xs={12} md={4}  >
            <CardMedia
              component="img"
              sx={{
                Height: "200px"
              }}
              image={`${props.imageUrl}`}

            />
          </Grid>
          <Grid item xs={12} md={8} >
            <p>{props.description}</p>
          </Grid>

        </Grid>



      </CardContent>
      <CardActions disableSpacing>
        <Link href={`/blog/post/${props.slug}`}>
          <Button>Read Post</Button>
        </Link>


      </CardActions>

    </Card>
  )

}
export default Post;
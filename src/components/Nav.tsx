import * as React from 'react'
import { makeStyles } from '@mui/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Typography, Container } from '@material-ui/core'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

const useStyles = makeStyles({
  root: {
    '& .css-hip9hq-MuiPaper-root-MuiAppBar-root': {
      backgroundColor: '#422ED4',
      justifyContent: 'center',
      minHeight: '59px',
      marginBottom: '50px',
    },
    '& .css-10ltm04-MuiToolbar-root': {
      padding: 0,
    },
    '& .css-1wlk0hk-MuiAvatar-root': {
      width: '43px',
      height: '43px',
    },

  },
});

export const Nav = (): JSX.Element => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar variant="dense">
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Chuck Norris"
                src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
              />
            </Stack>
            <Typography
              variant="subtitle2"
              color="inherit"
            >
              <Box sx={{ fontWeight: '800', ml: 1 }}>Chuck Norris</Box>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

// function Item(props) {
//   return <li>{props.message}</li>
// }

// function TodoList() {
//   const todos = ['закончить документацию', 'отправить пулреквест', 'снова напомнить Дэну про ревью']
//   return (
//     <ul>
//       {todos.map((message) => <Item key={message} message={message} />)}
//     </ul>
//   )
// }

import { Container, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { Categories } from './components/Categories'
import { Nav } from './components/Nav'
import { useRoutes } from './routes'
import './App.css'

export const App = (): ReactElement => {
  const routes = useRoutes()
  return (
    <div>
      <Nav />
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          color="inherit"
          align="center"
          component="div"
          paragraph
        >
          Categories
        </Typography>
        <Categories />
        {routes}
      </Container>
    </div>
  )
}

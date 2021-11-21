import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { categoriesArray, categoriesString } from '../initState'
import { findAction } from '../toolkit'

export const Categories = (): JSX.Element => {
  const dispatch = useDispatch()
  // const items = 'https://api.chucknorris.io/jokes/categories'
  const onButtonClick = (el: string): any => (node: Node): any => {
    if (categoriesArray && el) {
      const t = categoriesArray.find((categ) => categ.categories === el)
      if (t) {
        dispatch(findAction(t))
      }
    }
  }
  const item = categoriesString.map((el) => (
    <Button
      variant="outlined"
      size="medium"
      key={el}
      component={NavLink}
      to={`/categories/${el}`}
      onClick={onButtonClick(el)}
    >
      { el }
    </Button>
  ))

  return (
    <Box sx={{
      '& > div': {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '90px',
      },
      '& a': {
        m: 1,
        fontFamily: 'Raleway',
        fontWeight: '800',
        borderRadius: '20px',
        border: '2px solid rgba(66,46,212, 0)',
        textTransform: 'lowercase',
        color: '#1C1C39',
        boxShadow: '0px 31px 80px 0px rgb(72 70 106 / 13%)',
        '&: hover': {
          border: '2px solid rgba(66,46,212, 1)',
        },
        '&: active': {
          color: '#ffffff',
          backgroundColor: '#422ED4',
        },
      },
    }}
    >
      <div>
        { item }
      </div>
    </Box>
  )
}

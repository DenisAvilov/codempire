/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Switch, Route, useRouteMatch, Redirect,
} from 'react-router-dom'
import { TextChuck } from './components/TextChuck'
import { categoriesString, categoriesArray } from './initState'
import { randomAction } from './toolkit'

export const useRoutes = (): any => {
  const dispatch = useDispatch()
  const randomValio = useSelector((state: any) => state.randomQuote)
  const categoriSelect = useSelector((state: any) => state.categoriesAll)
  // Сервер в процесе выполнения тех. задания перестал отвечать, поэтому вместо запросов Rest API. сделаны запросы локально
  // const random = useCallback(async () => {
  //   try {
  //     const res = await superagent.get('https://api.chucknorris.io/jokes/random');
  //     if (res.ok) {
  //       dispatch(randomAction(res.body))
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getRandom = useCallback((m: number, max: number): any => {
    const min = Math.ceil(m)
    const ranNum = Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min
    const res = categoriesArray[ranNum]
    return res
  }, [])
  const match = useRouteMatch('/categories/:slug')
  useEffect(() => {
    if (!match) {
      dispatch(randomAction(getRandom(1, Object.keys(categoriesString).length)))
    }
  }, [getRandom, match])
  return (
    <Switch>
      <Route path="/" exact>
        <TextChuck queryString={randomValio} />
      </Route>
      <Route path="/categories/:slug">
        <TextChuck queryString={categoriSelect[0]} />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

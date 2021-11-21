import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './toolkit'
import { App } from './App'
import reportWebVitals from './reportWebVitals'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Raleway',
    ].join(','),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()

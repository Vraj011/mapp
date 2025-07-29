import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './Component/Dynamic/Table/store.ts'
// import { store } from './redux/store.ts'
// import { store } from './ReduxProduct/store.ts'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>,
)

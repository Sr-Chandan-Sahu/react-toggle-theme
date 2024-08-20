import { useEffect, useState } from 'react'
import './App.css'
import Article from './components/Article';
import {articles} from './components/data'

const getTheme = () =>{
  let theme= 'light-theme';
  if(localStorage.getItem('theme')){
    theme=localStorage.getItem('theme')
  }
  return theme;
}

function App() {
  const [theme, setTheme]= useState(getTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(()=>{
    document.documentElement.className=theme
    localStorage.setItem('theme',theme)

  },[theme])

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Articles</h1>
          <button className='btn' onClick={toggleTheme}>toggle</button>
        </div>
      </nav>
      <section className='articles'>
          {
            articles.map((item)=>{
              return <Article key={item.id} {...item}/>
            })
          }
      </section>
    </main>
  )
}

export default App

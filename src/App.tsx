
import './App.css'
import Layout from './Layout/Layout';
import useAppStore from './store';
import { useEffect} from 'react';

function App() {
const {toggleLanguage} = useAppStore();
const params = new URLSearchParams(window.location.search);
const lang = params.get('lang');

useEffect(()=>{
  if(lang=== "ar") {
    const rtl = document.body.getAttribute("dir");
     if(rtl!== "rtl"){
      document.body.setAttribute('dir',"rtl");
      toggleLanguage()
     }
  }else if(lang === 'en'){
    const rtl = document.body.getAttribute("dir");
    if(rtl==="rtl"){
      document.body.setAttribute('dir','ltr');
      toggleLanguage()
    }
  }
}, [])
  return (
    <>

        <Layout/>

    </>
  );
}

export default App

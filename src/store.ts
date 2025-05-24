import { create } from "zustand";

export interface PagesStructure {
  mainPage:number
}
 export const initialCurrentPageState = {
  mainPage:0
 };
interface AppStore{
    menuOpen:boolean;
    menuPressedAtLeastOnce: boolean;
    rtlLanguage:boolean;
    currentPage:PagesStructure;
    toggleMenu: ()=> void;
    toggleLanguage:()=> void;
    changePage: (currentPage: PagesStructure) => void;

}

const useAppStore = create<AppStore>((set)=>({
  rtlLanguage:false,
  menuOpen:false,
  currentPage:initialCurrentPageState,
  menuPressedAtLeastOnce: false,
  toggleMenu: () =>
    set((store) => ({
      menuOpen: !store.menuOpen,
      menuPressedAtLeastOnce: true,
    })),
    toggleLanguage:()=>{
      const rtl = document.body.getAttribute("dir");
      if(rtl !== "rtl") document.body.setAttribute("dir","rtl");
      else document.body.setAttribute("dir","ltr");
      set((store)=>({rtlLanguage:!store.rtlLanguage}));
    },
    changePage: (currentPage) =>{
      window.scrollTo({top:0,left:0,behavior:'smooth'});
      set(()=>({currentPage}));
    }
  
}))

export default useAppStore;
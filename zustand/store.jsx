import { create } from "zustand";


const useStore = create((set,get) => ({
    sidebar:'closed',
    sidebarWidth:50,
    width:'58',
    // user:'Account',
    
    // log_in_to_user:(name)=>{
    //     set(state=>({
    //         user:state.user=name
    //     }))
    // },
    // log_out_from_user:()=>{
    //     set(state=>({
    //         user:state.user='Account'
    //     }))
    // },
    setSideBarWidth:(y)=>set({sidebarWidth:y}),
    set_width:(x)=>{
      set(state=>({
        width:state.width=x
      }))
    },
    open_sidebar:()=>{
      set(state=>({
        sidebar:state.sidebar='opened'
      }))
      set(state=>({
        width:state.width='58'
      }))
    },
    close_sidebar:()=>{
      set(state=>({
        sidebar:state.sidebar='closed'
      }))
      set(state=>({
        width:state.width='72'
      }))
    },
    

    // fetch:async () =>{
   
    //     const url = new URL('https://65b1e88a9bfb12f6eafc5897.mockapi.io/platesShop');

    //     // let x = console.log(get().category)
    //     url.searchParams.append('category',get().category); 
    //     url.searchParams.append('page', get().page);
    //     url.searchParams.append('limit', 9);
        
    //     fetch(url, {
    //     method: 'GET',
    //     headers: {'content-type':'application/json'},
    //     }).then(res => {
    //     if (res.ok) {
    //         return res.json();
    //     }
    //     // handle error
    //     }).then(tasks => {
    //     // mockapi returns first 10 tasks that are not completed
    //         set((state) => ({ shopItems: tasks }));
            
    //     }).catch(error => {
    //     // handle error
    //     })
    // } ,
    // fetchWhole:async () =>{
   
    //     const url = new URL('https://65b1e88a9bfb12f6eafc5897.mockapi.io/platesShop');

    //     fetch(url, {
    //     method: 'GET',
    //     headers: {'content-type':'application/json'},
    //     }).then(res => {
    //     if (res.ok) {
    //         return res.json();
    //     }
    //     // handle error
    //     }).then(tasks => {
    //     // mockapi returns first 10 tasks that are not completed
    //         set((state) => ({ wholeItems: tasks }));
            
    //     }).catch(error => {
    //     // handle error
    //     })
    // } 
}))
export default useStore;


import { create } from "zustand";

const useStore = create((set,get) => ({
    dataSource:[],
    sidebar:'closed',
    sidebarWidth:'50px',
    width:'72%',
    left:'70px',
    user:'Admin',
    login_status:'no',
    sliderItems:'3',
    set_sliderItems:(x)=>{
      set(state=>({
        sliderItems:state.sliderItems=x
      }))
    },
    set_login_status:(s)=>{
      set(state=>({
        login_status:state.login_status=s
      }))
    },
    set_width:(x)=>{
      set(state=>({
        width:state.width=x
      }))
    },
    set_left:(x)=>{
      set(state=>({
        left:state.left=x
      }))
    },
    
    log_in_to_user:(name)=>{
        set(state=>({
            user:state.user=name
        }))
    },
    log_out_from_user:()=>{
        set(state=>({
            user:state.user='Account'
        }))
    },

    open_sidebar:()=>{
      set(state=>({
        sidebar:state.sidebar='opened'
      }))
      set(state=>({
        sidebarWidth:state.sidebarWidth='220px'
      }))
      set(state=>({
        width:state.width='62%'
      }))
      set(state=>({
        left:state.left='220px'
      }))
    },
    close_sidebar:()=>{
      set(state=>({
        sidebar:state.sidebar='closed'
      }))
      set(state=>({
        sidebarWidth:state.sidebarWidth='50px'
      }))
      set(state=>({
        width:state.width='72%'
      }))
      set(state=>({
        left:state.left='70px'
      }))
    },

    fetching: (data) => {
      console.log(data);
      set((state) => ({
        dataSource: data
      }));
      
    }

}))

export default useStore;



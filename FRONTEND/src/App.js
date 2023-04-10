import {useDispatch,useSelector } from "react-redux"
import {Route,Routes} from "react-router"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Notes from "./components/notes/Notes"
import AddNote from "./components/notes/AddNote"
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Editor from "./components/notes/Editor"
import EditNote from "./components/notes/EditNote"
import DeleteNote from "./components/notes/DeleteNote"
import Note from "./components/notes/Note"
import UploadImage from "./components/notes/UploadImage"


const App = () => {

  const dispatch = useDispatch()

  const setAuth = ()=>{
    const auth = JSON.parse(localStorage.getItem('auth'))
    if(auth){
      dispatch({
        type:"SET_AUTH",
        payload:auth
      })
    }
  }

  useEffect(() => {
    setAuth()
  }, [])

  return (
    <div>
      <Navbar/>
      <div><Toaster/></div>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/notes" element={<Notes/>} />
        <Route path="/notes/add" element={<AddNote/>}/>
        <Route path="/note/edit/:id" element={<EditNote/>}  />
        <Route path="/note/delete/:id" element={<DeleteNote/>}  />
        <Route path="/note/:id" element={<Note/>}  />
        <Route path="/notes/uploadImg" element={<UploadImage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
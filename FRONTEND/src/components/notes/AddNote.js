import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Notes from "./Notes"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Editor from "./Editor";
import axios from "axios";
import toast from "react-hot-toast";



const AddNote = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [editor, setEditor] = useState(null);


    const [title,setTitle] = useState("")
    const [color,setColor] = useState("")
    const [content,setContent] = useState("")

  

    const { token } = useSelector(state => state.auth)

    useEffect(() => {
        if (!token) {
          navigate("/login");
        }
      }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            e.preventDefault();
      
            const response = await axios.post("http://localhost:8080/notes/add", {
              title,
              content:editor.current.value,
              color,
            },{
              headers:{
                auth:token
              }
            });
            const {
              data: { success, message,data },
            } = response;
            if (success) {
              navigate('/notes');
              return toast.success(message);
            } else {
              return toast.error(message);
            }
          } catch (error) {
            console.log(error);
            return toast.error(error.message);
          }
        };

    

    return (
        <div className="h-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full py-6 px-4">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white shadow rounded lg:w-2/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        New Note
                    </p>
                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">+</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <lable className="text-md font-medium leading-none text-gray-800">Title</lable>
                            <input onChange={(e)=> setTitle(e.target.value)} aria-label="enter title" role="input" type="text" className="bg-gray-200 border rounded focus:outline-none text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </div>
                        <div className="mt-6  w-full">
                            <lable className="text-md font-medium leading-none text-gray-800">Color</lable>
                            <input style={{height:"50px"}} onChange={(e)=>setColor(e.target.value)} aria-label="enter color" role="input" type="color" className="bg-gray-200 border rounded focus:outline-none text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </div>
                        <div className="mt-6  w-full">
                            <lable className="text-sm font-medium leading-none text-gray-800">Content</lable>
                            <div className="relative flex items-center justify-center">
                                <Editor setEditor={setEditor}/>
                                
                            </div>
                        </div>
                        <div className="mt-8">
                            <button type="submit" role="button" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 text-sm font-semibold leading-none text-white focus:outline-none bg-purple-700 border rounded hover:bg-purple-600 py-4 w-full">
                                Add Note
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddNote
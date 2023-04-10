import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

const DeleteNote = ({}) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const { token } = useSelector((state) => state.auth);

  
    useEffect(() => {
      if (!token) {
        navigate("/login");
      }
    }, [token]);
  
    const handleSubmit = async () => {

       try {
        const response = await axios.delete(`http://localhost:8080/notes/delete/${id}`,{
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
    handleSubmit();
  
  };
export default DeleteNote;
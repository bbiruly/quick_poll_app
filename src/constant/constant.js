import { MdOutlineAnalytics } from "react-icons/md";
import { TbUserSquare } from "react-icons/tb";

//backend link 
export const api = "http://localhost:4000/api"
// export const api = "https://dashbord-backend.onrender.com/api"
export const baseUrl = "https://dashbord-alpha.vercel.app/analytics";

export const links = [
    { label: "Poll", href: "/home", icon: MdOutlineAnalytics },
    { label: "Profile", href: "/profile", icon: TbUserSquare },
  ];
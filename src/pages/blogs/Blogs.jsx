import { useContext } from "react";
import { ContextApp } from "../../contexts/ContextApp";

const Blogs = () => {
  const {blog , setBlog} = useContext(ContextApp)
  

  return (
    <div>
 <div>
  {blog.map((data)=>(
 <img src={data.image} alt="" />
  ))}
 </div>
    </div>
  );
};
export default Blogs;

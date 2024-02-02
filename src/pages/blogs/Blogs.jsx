import { useContext } from "react";
import { ContextApp } from "../../contexts/ContextApp";

const Blogs = () => {
  const {blog , setBlog} = useContext(ContextApp)
  

  return (
    <div>
 <div>
  {blog.map((data)=>(
    <h2>{data.title}</h2>
  ))}
 </div>
    </div>
  );
};
export default Blogs;

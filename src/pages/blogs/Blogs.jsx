import { useContext } from "react";
import { ContextApp } from "../../contexts/ContextApp";

const Blogs = () => {
  const {blog , setBlog} = useContext(ContextApp)
  console.log(blog);
  return (
  
    <div>
      <h2> </h2>
    </div>
  );
};
export default Blogs;

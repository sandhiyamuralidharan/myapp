import { memo } from "react";
function Todo ({todo}){
    console.log("todo render");
    return(
<div>
  <p>{todo}</p>
</div>
    )
};
export default memo(Todo);



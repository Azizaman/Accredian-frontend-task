
import {Link} from "react-router-dom";
export function Header1(){
    return(
        <div className={"bg-blue-100  py-3 flex justify-center"}>
            <div >
                Navigate your ideal career path with tailored expert advice
            </div>
            <Link to={"/"} className={"px-6 text-blue-600"}>Contact Expert</Link>

        </div>


    )
}

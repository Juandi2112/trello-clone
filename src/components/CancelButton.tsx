import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function({onClick}:{onClick:()=>void}){
    return(
        <button
        className="mt-4 gap-2 items-center w-full flex justify-center uppercase text-sm text-gray-400"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faClose} />
        Cancel edit
      </button>
    )
}
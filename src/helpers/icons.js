import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSquareMinus,
  faRightToBracket,
  faSpinner,
  faPlusCircle,
  faSquareEnvelope,
  faSquarePhone,
  faMapLocationDot,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

import {
  faEmpire,
  faGalacticRepublic,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(faTrash, faSignOutAlt, faEdit, faSquareMinus, faRightToBracket, faSpinner, faPlusCircle, faEmpire, faGalacticRepublic, faSquareEnvelope, faSquarePhone, faMapLocationDot, faLinkedin,
    faEnvelope, faLock);
}


export default Icons;
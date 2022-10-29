import { CreateForm } from "../Form/Form";
import {ChangeImage} from '../Form/ChangeImage';
import {Link} from 'react-router-dom';
import Arrow from '../Images/arrow_back_ios_FILL1_wght400_GRAD0_opsz48.svg' ; 

export const Settings = ()=>{
  
 //just use yup and react-hook form
 return(
 <>
  <Link to='/' className="BackBtn">
  <span class="material-symbols-outlined arrow" >
arrow_back_ios</span>
    Back
  </Link>
   <div className="Card CardChange">
     <h1 className="GetInfo">
      Change Info
     </h1>
     <p>
      Changes will be reflected to our services
     </p>
     <br />
      <ChangeImage />
     <br />
    <CreateForm />
  </div>
 </>
 );
}
import {Link} from 'react-router-dom';
import testImages from '../Images/istockphoto-1309328823-170667a.jpg' ; 

export const Card = ()=>{
  let checkCase ; 
  const ArrayInfo = ['Photo' , 'Name' , 'Bio' , 'Phone' , 'Email' , 'Password'] ; 
  const regExp = /.+\w+/gi
  let Password = ''
  const HidePassword = (arg)=>{
    for(let i = 0 ; i<arg.length ;i++  ){
           Password += arg.replace(regExp , '*')
    } 
    return Password ; 
  }

 return(
  <>
   <div className='TitleHolder'>
       <h1 className='GetInfo'>
         Personal Info
       </h1>
       <p>
        Basic info, like your name and photo
       </p>
     </div>
   <div className="Card CardEditing">
     <div className="editSection">
      <div className="left ">
        <h2 className="Color text-3xl bold">
         Profile
        </h2>
        <p>
         Some info can be visible to others 
        </p>
      </div>
      <div className="right">
        <Link to='/ChangeSettings' className='Btn'>Edit</Link>
      </div>
     </div>
     <hr />
     {
      ArrayInfo.map((elem)=>{
        switch(elem){
          case 'Password' : checkCase = 0
                          break ; 
          case 'Photo' : checkCase = 1
                          break ; 
          default : checkCase = 2 ; 
        }
          return (<>
            <div className="Info">
            <div className="leftInfo ">
            <p>
               {elem}
             </p>
            </div>
            <div className="rightInfo ">
             {checkCase === 2 ? (<p className="InfoData">
               Data
             </p>) : checkCase === 0 ? (<p className="InfoData">
              {HidePassword(elem)}
             </p>) : checkCase === 1 ? (<img src={testImages} alt='' height={100} width={80} />) :(<p className="InfoData">
               Data
             </p>) }
            </div>
          </div>
          <hr />
           </>)}
        )  
     }
   </div>
  </>
 );
}
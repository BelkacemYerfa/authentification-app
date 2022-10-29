import testImages from '../Images/istockphoto-1309328823-170667a.jpg' ;

export const ChangeImage = ()=>{
 const HandleImage = (e)=>{
  let selectedFile = e.target.files[0];
  let reader = new FileReader();
  const ImgUserProfile = document.getElementById('ImgUserProfile') ; 
  ImgUserProfile.title = selectedFile.name;
  reader.onload = (e) => {
   ImgUserProfile.src = e.target.result;
  };
  reader.readAsDataURL(selectedFile);
 }
 return(
   <div className="Image">
     <img id="ImgUserProfile" src={testImages} height={100} width={150} alt="" />
      <input type="file" id='file' className="LoadingImages" onChange={HandleImage} />
   </div>
 );
}
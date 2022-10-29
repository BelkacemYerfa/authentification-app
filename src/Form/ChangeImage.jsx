
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
     <img id="ImgUserProfile" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&psig=AOvVaw1m3SHA52UKNnzQ1tIL2McR&ust=1667040632892000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJC2ysDggvsCFQAAAAAdAAAAABAD" height={100} width={150} alt="" />
      <input type="file" id='file' className="LoadingImages" onChange={HandleImage} />
   </div>
 );
}
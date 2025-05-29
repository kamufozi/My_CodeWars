async function findDog() {
    try{
        const dogName=document.getElementById('dogName').value.toLowerCase();
        const response=await fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)  ;
        if(!response.ok){
            throw new Error("Ihanane ntayou ndikubona iyo mbwa ushaka");
            
        }
        const data=await response.json(); 
        const foto=data.message;
        console.log(data);
        let imgE=document.getElementById('dogoImage');
        imgE.src=foto;
        imgE.style.display='block';

    }    
    
    catch(err){
        console.error(err.message);
    }

}
async function findDog() {
    try {
        const dogInput = document.getElementById('dogName');
        const breed = dogInput.value.toLowerCase().trim(); // just to be safe
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        
        if (!response.ok) {
            throw new Error("Ihanane ntayou ndikubona iyo mbwa ushaka");
        }

        const data = await response.json();
        const foto = data.message;

        console.log(data);

        let imgE = document.getElementById('dogoImage');
        imgE.src = foto;
        imgE.style.display = 'block';
        
    } catch (err) {
        console.log(err.message); // now it actually logs the error
    }
}

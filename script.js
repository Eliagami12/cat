let datosDeImagen=""
let imagenAleatoria=""
let img = ""
const recorrerPersonajes = async() =>{
    try {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        datosDeImagen=await fetch(`https://api.thecatapi.com/v1/images/search?limit=20`, requestOptions)
        imagenAleatoria=await datosDeImagen.json()
       
        let app = document.getElementById("app")

        imagenAleatoria.map(imagen => {
           
            const {url} = imagen

            img = img + `
            
            <div>
            <img class="rounded-lg w-full" src="${url}">
            </div>
            
            ` 
        })
        app.innerHTML=img


    } catch (error) {
        console.log("error ", error)
    }
}
recorrerPersonajes()
export const TiposBasicos =()=>{
    //implemenacion de logica
    // let nombre: string | number="Jahir";
    // nombre=123;
    // let nombre : string ="Jahir";
    const nombre : string ="Jahir";
    const edad: number = 18;
   const donanteOrganos: boolean = true;
   //arreglos
   const poderes: string[] =["velocidad","volar","invisible"];
   //añadir elementos
   poderes.push('fuerza');
       return(
        <div>
            <h3>Tipos Basicos</h3>
            {nombre},{edad},{donanteOrganos ? "donante":"no donante"}
            <br />
            {poderes.join(',')}
        </div>
    )
}

// export default TiposBasicos;


export const TiposBasicos = () => {
   
   const nombre: string = 'Santiago Seisdedos';
   const edad: number = 26;
   const estaActivo: boolean = true;

   const poderes: (string | number)[] = ['Velocidad', 'Volar', 'Respiracion acuatica']
    poderes.push(999)

    return (
        <>
            <h3>Tipos basicos</h3>   
            { nombre }, { edad }, { (estaActivo) ? 'Activo' : 'Inactivo' };
            <br />
            { poderes.join(', ') }
        </>
    )
}


interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
}

interface Direccion {
        pais: string,
        casaNo: number,
}


export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Santiago Seisdedos',
        edad: 26,
        direccion: {
            pais: 'Argentina',
            casaNo: 219
        }
    }

    const {direccion, edad,} = persona;
    const {pais, casaNo} = direccion;

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify( persona, null, 2)}
                </pre>
            </code>
        </>
    )
}

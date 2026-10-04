import { useState } from "react"

function FormularioPostulaciones({agregarPostulaciones}) {
    const [empresa, setEmpresa] = useState("");
    const [cargo, setCargo] = useState("");
    const [estado, setEstado] = useState("");
    const [fecha, setFecha] = useState("");

function manejarEnvio(e) {
    e.preventDefault();
    agregarPostulaciones({id: Date.now(), empresa, cargo, estado, fecha});
}
    
    return (
    
    <form onSubmit={manejarEnvio}>
        <input
            placeholder = "empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
        />

        <input    
            placeholder = "cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
        />

        <input
            placeholder = "estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
        />

        <input
            type="date"
            placeholder = "fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
        />

        <button type="submit">Agregar</button>
    </form>
    )
}

export default FormularioPostulaciones;
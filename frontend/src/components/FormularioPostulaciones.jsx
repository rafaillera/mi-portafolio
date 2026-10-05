import { useState } from "react"

function FormularioPostulaciones({agregarPostulaciones}) {
    const [empresa, setEmpresa] = useState("");
    const [cargo, setCargo] = useState("");
    const [estado, setEstado] = useState("");
    const [fecha, setFecha] = useState("");
    const [contacto, setContacto] = useState("");

function manejarEnvio(e) {
    e.preventDefault();
    agregarPostulaciones({id: Date.now(), empresa, cargo, estado, fecha, contacto});
    setEmpresa("");
    setCargo("");
    setEstado("");
    setFecha("");
    setContacto("");
}
    
    return (
    
    <form onSubmit={manejarEnvio}>
        <input
            placeholder = "Empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
        />

        <input    
            placeholder = "Cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
        />

        <input
            placeholder = "Estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
        />

        <input
            type="date"
            placeholder = "Fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
        />

        <input
            placeholder="Contacto"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
        />

        <button type="submit">Agregar</button>
    </form>
    )
}

export default FormularioPostulaciones;
function TablaPostulaciones ({postulaciones}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Empresa</th>
                    <th>Cargo</th>
                    <th>Estado</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                {postulaciones.map((p) => (
                    <tr key={p.id}>
                        <td>{p.empresa}</td>
                        <td>{p.cargo}</td>
                        <td>{p.estado}</td>
                        <td>{p.fecha}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TablaPostulaciones;
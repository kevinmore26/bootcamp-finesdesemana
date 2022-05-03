import {useRef} from "react"

export default function FormProducto({
    value, 
    actualizarInput,
    manejarSubmit,
    manejarImagen
}) {
    //useRef es como un Id internet de React
    const inputFile = useRef()

    return (
        <div>
            <form onSubmit={(e)=>{manejarSubmit(e)}}>
                <div className="mb-3">
                    <label className="form-label">
                        Nombre Producto
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="prod_nombre"
                        value={value.prod_nombre}
                        onChange={(e) => {actualizarInput(e)}}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Descripción Producto
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="prod_descripcion"
                        value={value.prod_descripcion}
                        onChange={(e) => {actualizarInput(e)}}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Precio Producto
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        name="prod_precio"
                        value={value.prod_precio}
                        onChange={(e) => {actualizarInput(e)}}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Stock Producto
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        name="prod_stock"
                        value={value.prod_stock}
                        onChange={(e) => {actualizarInput(e)}}
                    />
                </div>

                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="prod_oferta"
                        checked={value.prod_oferta}
                        onChange={(e) => {actualizarInput(e)}}
                    />
                    <label className="form-check-label">
                        Ofertar Producto
                    </label>
                </div>

                <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input 
                        type="file"
                        className="form-control"
                        ref={inputFile}
                        onChange={(e) => {manejarImagen(e)}}
                    />
                </div>

                <div className="d-grid">
                    <button className="btn btn-primary btn-lg" type="submit">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    )
}

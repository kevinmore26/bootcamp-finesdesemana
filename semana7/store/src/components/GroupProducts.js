import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function GroupProducts({ productos }) {
    console.log(productos)

    return (
        <div>
            <div className='container'>
                <div className='row mt-3'>

                    {productos.map((prod, i) => (
                        <div className='col-6 col-lg-3' key={i}>
                            <Link className='card mb-4' to={`/detalle/${prod.prod_id}`}>
                                <div>
                                    <img src={prod.prod_imagen}
                                        alt={prod.prod_imagen}
                                        className="card-img-top" />
                                </div>
                            </Link>
                            <div className='card-body'>
                                <h6 className='card-title'>
                                    {prod.prod_nombre}
                                </h6>
                                <span className='fw-bold'>
                                    $ {prod.prod_precio}
                                </span>

                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
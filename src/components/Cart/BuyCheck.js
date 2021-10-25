import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, getDoc, doc, Timestamp, writeBatch } from 'firebase/firestore'
import { db } from "../../services/firebase/firebase";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import './Check.css';
import Swal from 'sweetalert2';




const BuyCheck = () => {

    const { carrito, precioTotal, clearCart, cantidadElementosDelCarrito } = useContext(CartContext);

    const [procesandoOrden, setProcesandoOrden] = useState(false);

    const [comprador, setComprador] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        ciudad: '',
        postal: ''
    });

    const nuevaOrden = {
        buyer: comprador,
        items: carrito,
        total: precioTotal(),
        date: Timestamp.fromDate(new Date())

    }


    const confirmarOrden = () => {

        setProcesandoOrden(true);

        const batch = writeBatch(db);

        const outOfStock = [];

        nuevaOrden.items.forEach((prod, i) => {
            getDoc(doc(db, 'products', prod.id)).then(productDocument => {
                if (productDocument.data().stock >= nuevaOrden.items[i].quantity) {
                    batch.update(doc(db, 'products', productDocument.id), {
                        stock: productDocument.data().stock - nuevaOrden.items[i].quantity
                    })
                } else {
                    outOfStock.push({ ...productDocument.data(), id: productDocument.id })
                }

            })
        })

        if (outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), nuevaOrden)
                .then((res) => {
                    batch.commit()
                        .then(() => {

                            Swal.fire({
                                icon: 'success',
                                title: `¡Feliciades! ${nuevaOrden.buyer.nombre} ${nuevaOrden.buyer.apellido} `,
                                text: 'Tu orden se genero con exito.',
                                html:
                                    '<h3>Usted compro: </h3> ' +
                                    `<h4>${nuevaOrden.items[0].nombre}</h4>` +
                                    `<b>Total: $${nuevaOrden.total}</b>` +
                                    `<p>Su orden de compra es <b>${res._key.path.segments[1]}</b></p>`,
                            })
                        })


                }).catch((error) => {

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ha surgido un error inesperado, por favor intente nuevamente',
                    })

                    console.log('error', 'Error al ejecutar la orden')

                }).finally(() => {
                    setProcesandoOrden(false)
                    clearCart()
                    precioTotal(0)
                })
        }
    }

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setComprador({
            ...comprador,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
    }



    const CarritoVacio = () => {

        return (

            <div className="cart">
                <h2 className="cart-titulo">Carrito Vacio</h2>
                <hr />
                <p className="cart-titulo">¿Porque no visitas nuestra tienda?</p>
                <Link to={'/tienda'}>
                    <Button className="contenedor-btn" label="Ir a Tienda" />
                </Link>

            </div>

        )
    }


    return (
        <>
            {(cantidadElementosDelCarrito() === 0) ? <CarritoVacio /> :
                <div className="check-section">
                    <div className="check">
                        <h1 className="check-titulo">Datos del comprador</h1>
                        <hr />
                    </div>
                    <div className="check-formulario">
                        <div className="check-fondo">

                        </div>
                        <form className="formulario" onSubmit={enviarDatos}>
                            <div className="inputField">
                                <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre" required></input>
                            </div>
                            <div className="inputField">
                                <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido" required></input>
                            </div>
                            <div className="inputField">
                                <input type="text" placeholder="Telefono" className="form-control" onChange={handleInputChange} name="telefono" required></input>
                            </div>
                            <div className="inputField">
                                <input type="text" placeholder="E-mail" className="form-control" onChange={handleInputChange} name="email" required></input>
                            </div>
                            <div className="inputField">
                                <input type="text" placeholder="Ingrese su ciudad" className="form-control" onChange={handleInputChange} name="ciudad" required></input>
                            </div>
                            <div className="inputField">
                                <input type="text" placeholder="Codigo Postal" className="form-control" onChange={handleInputChange} name="postal" required></input>
                            </div>

                            <div className="btn-contenedor">
                                <button type="submit" className="btn-enviar delete" function={clearCart}>CancelarCompra</button>
                                <button type="submit" className="btn-enviar" onClick={confirmarOrden}>Confirmar compra</button>

                            </div>

                        </form>
                    </div>


                </div>}
        </>
    )

}

export default BuyCheck
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemContainer/ItemList';
import ImgRunning2 from '../../assets/img/running2.jpg';
import '../ItemContainer/Styles/ItemListContainer.css';
import Loading from '../Loading/Loading';

export const products = [

    {
        id: '0',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-adidas-running-run-it-space-race-nasa-azul-100020gp5804001-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-adidas-running-run-it-space-race-nasa-azul-100020gp5804001-2.jpg',
        nombre: 'Camiseta Azul',
        descripcion: `Una remera de running que forma parte de la colección space race.
      La gravedad es el amigo y enemigo de cada corredor.
      Esta remera forma parte de la colección Space Race que celebra la colaboración de ADIDAS con la NASA.
      El tejido absorbente aeroready te mantiene seco mientras acumulás kilómetros a diario.
      Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.
      Logo ADIDAS y detalles en estampado reflectivo.`,
        material: '65% Poliéster Reciclado, 35% Algodón',
        alt: 'Camiseta Azul',
        precio: 4399,
        sexo: 'hombre',
        categoria: 'camiseta',
        stock: 11
    },
    {
        id: '1',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-puma-running-favourite-roja-640020521810011-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-puma-running-favourite-roja-640020521810011-2.jpg',
        nombre: 'Camiseta Roja',
        descripcion: `El mejor equipamiento de running es cómodo, ligero y transpirable.
       La remera de running de manga corta Favourite para hombre sigue el ritmo de tu entrenamiento más extenuante y aun así se ve perfecta y elegante después de un lavado.
       Incluye reflectividad en 360 grados y la tecnología dryCELL característica de PUMA.
       DryCELL tiene propiedades repelentes de la humedad que ayudan a que la piel permanezca seca y cómoda.
       Los elementos reflectantes 360 REFLECTIVITY mejoran la visibilidad a 360 grados en condiciones de poca luz.
       Logo PUMA estampado reflectivo`,
        material: '100% Poliéster',
        alt: 'Camiseta  Roja',
        sexo: 'hombre',
        categoria: 'camiseta',
        precio: 4299,
        stock: 4
    },
    {
        id: '2',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-puma-runnin-favourite-mujer-rosa-640020520181025-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/r/e/remera-puma-runnin-favourite-mujer-rosa-640020520181025-2.jpg',
        nombre: 'Camiseta Femenina',
        descripcion: `La vida en la pista rápida es solo performance.
      Por esto, la remera de running de manga corta para mujer Favourite rinde al máximo con su tela liviana y respirable.
      Gracias a los detalles con reflectividad en 360 grados, todos te verán, y tu piel se mantendrá seca con la tecnología dryCELL característica de PUMA.
      Corte regular.
      Logo PUMA estampado en material reflectivo.`,
        material: '100% Poliéster',
        alt: 'Camiseta Femenina',
        sexo: 'mujer',
        categoria: 'camiseta',
        precio: 4399,
        stock: 23
    },
    {
        id: '3',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-con-calza-nike-running-stride-7-pulgadas-negro-510020cj5471010-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-con-calza-nike-running-stride-7-pulgadas-negro-510020cj5471010-2.jpg',
        nombre: 'Short Deportivo M',
        descripcion: `El short NIKE Flex Stride se actualiza con un nuevo tejido Woven y transpirabilidad mejorada en las zonas de mayor sudoración.
      Su diseño 2 en 1 cuenta con un forro suave para brindar soporte.
      En la parte posterior, la ventilación mejorada te mantiene fresco donde más lo necesitas.
      La tela NIKE Flex se estira con el cuerpo.
      La tecnología Dri-FIT mantiene la transpirabilidad y la comodidad.
      Cintura elastizada con cordón de ajuste.
      Bolsillos laterales.
      Pequeño bolsillo trasero con cierre.
      Calza corta interna.
      Logo NIKE y detalles en estampado reflectivos.`,
        material: '94% Poliéster, 6% Elastano',
        alt: 'Short Deportivo Masculino',
        sexo: 'hombre',
        categoria: 'short',
        precio: 3499,
        stock: 9
    },
    {
        id: '4',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-topper-running-2-mujer-negro-800020164201001-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-topper-running-2-mujer-negro-800020164201001-3.jpg',
        nombre: 'Short Deportivo F',
        descripcion: `El Short TOPPER RNG 2 para mujer es el equilibrio perfecto de comodidad y estilo.
      La tecnología Dry Cool te mantiene seca y fresca.
      Cintura elástica con cordón de ajuste interno.
      Tiras reflectivas
      Cuenta con suspensor.
      Logo TOPPER estampado.`,
        material: '100% Poliéster',
        alt: 'Short deportivo femenino',
        sexo: 'mujer',
        categoria: 'short',
        precio: 3199,
        stock: 5
    },
    {
        id: '5',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-rompeviento-nike-running-windrunner-celeste-510020cz9070451-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/c/a/campera-rompeviento-nike-running-windrunner-celeste-510020cz9070451-2.jpg',
        nombre: 'Chaqueta Rompe Viento M',
        descripcion: `La campera NIKE Windrunner se actualiza con materiales Repelentes al agua y un diseño plegable.
      Los detalles de ventilación en la parte posterior y en el diseño de chevrón te mantienen fresco cuando aumenta la intensidad de la carrera.
      El elástico añadido te ayuda a moverte libremente en cada pisada.
      El icónico diseño de chevrón también sirve como sistema para aumentar la ventilación.
      Las costuras en el diseño de chevrón y las mangas te ayudan a moverte sin distracciones.
      Se puede guardar en el bolsillo del panel trasero cuando ya no necesites usarla.
      La correa para el hombro te permite cargar la prenda fácilmente cuando estás en movimiento.
      Proteccion contra rayos UV UPF 40+.
      Cuello alto con capucha y cordón de ajuste.
      Puños elastizados.
      Bolsillos laterales con cierre.
      Pequeño bolsillo interno.
      Logo NIKE y detalles en estampado reflectivo.`,
        material: 'Material: 93% Poliéster, 7% Elastano',
        alt: 'Chaqueta rompe viento masculina',
        sexo: 'hombre',
        categoria: 'chaqueta',
        precio: 15000,
        stock: 12
    },
    {
        id: '6',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/pantalon-361-entrenamiento-gris-361020y2104m02b-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/p/a/pantalon-361-entrenamiento-gris-361020y2104m02b-2.jpg',
        nombre: 'Pantalon Running M',
        descripcion: `El pantalón de entrenamiento 361° destaca por su comodidad y diseño clásico, para que puedas hacer tus rutinas sin limitaciones y con mucho estilo.
      Cintura elástica con cordón de ajuste interno.
      Bolsillos laterales.
      Botamanga recta con cierre.
      Sin friza.
      Logo 361° estampado.`,
        materia: '100% Poliéster',
        alt: 'Pantalon running masculino',
        sexo: 'hombre',
        categoria: 'pantalon',
        precio: 7000,
        stock: 7
    },
    {
        id: '7',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/calza-corta-reebok-entrenamiento-myt-q3-mujer-negra-111020fu2431001-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/c/a/calza-corta-reebok-entrenamiento-myt-q3-mujer-negra-111020fu2431001-2.jpg',
        nombre: 'Calza Running F',
        descripcion: `Entrená sin restricciones con REEBOK, sentite cómoda y a la moda en todo momento.
      La tecnología SpeedWick dispersa el calor y el sudor proporcionando mayor ventilación.
      Logo REEBOK estampado.
      Cintura elastica.
      `,
        material: '91% Poliéster, 9% Spandex',
        alt: 'Calza running femenino',
        sexo: 'mujer',
        categoria: 'calza',
        precio: 3799,
        stock: 19
    },
    {
        id: '8',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-rompeviento-running-nike-essential-mujer-rosa-510020cu3217630-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/c/a/campera-rompeviento-running-nike-essential-mujer-rosa-510020cu3217630-2.jpg',
        nombre: 'Chaqueta Rompe Viento F',
        descripcion: `El Rompeviento NIKE Essential te ayuda a seguir corriendo cuando llega la temporada de lluvias.
      La tela Repelente al agua se combina con la cobertura de la capucha para mantenerte seca mientras corrés.
      Un bolsillo posterior ofrece almacenamiento para los guantes, el gorro o una barra de proteínas.
      Los bolsillos delanteros dobles con cierre ofrecen abrigo para las manos y almacenamiento para objetos pequeños.
      Los puños con cierre por contacto permiten regular el ajuste.
      La capucha brinda protección contra el mal tiempo.
      Cuello alto con capucha con cordón de ajuste.
      Puños con velcro.
      Bolsillos laterales con cierre.
      Logo NIKE con estampado reflectivo.`,
        material: '100% Poliéster',
        alt: 'Chaqueta rompe vientos femenina',
        sexo: 'mujer',
        categoria: 'chaqueta',
        precio: 16000,
        stock: 10
    },
    {
        id: '9',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-adidas-running-own-the-run-mujer-lila-100020h30042001-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/r/e/remera-adidas-running-own-the-run-mujer-lila-100020h30042001-2.jpg',
        nombre: 'Remera Adidas F',
        descripcion: `La vida es complicada y siempre tenés cosas que hacer.
    Hay días en que sentís que no tenés ni el tiempo ni la energía para salir a correr.
    Regresá a lo básico con esta remera ADIDAS Own the Run.
    Es suave, cómoda y se seca rápidamente.
    El tejido AEROREADY absorbe el sudor para mantener tu piel fresca y seca en todo momento.
    Además, está hecha en materiales reciclados y forma parte de nuestra lucha por un futuro más sostenible.
    Así podrás sentirte bien sobre la remera que llevás puesta mientras acumulás más y más kilómetros.
    Logo ADIDAS y detalles en estampado reflectivo.`,
        material: '100% Poliéster Reciclado',
        alt: 'Remera Adidas femenina',
        sexo: 'mujer',
        categoria: 'camiseta',
        precio: 4699,
        stock: 13
    },
    {
        id: '10',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/calza-7-8-adidas-entrenamiento-designed-to-move-mujer-negra-100020gl4040001-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/c/a/calza-7-8-adidas-entrenamiento-designed-to-move-mujer-negra-100020gl4040001-2.jpg',
        nombre: 'Calza 7/8 F',
        descripcion: `Enfrentate a cada entrenamiento con comodidad con estas calzas deportivas ADIDAS.
    Sin importar si estás en una sesión de kickboxing o de yoga, la tecnología de absorción AEROREADY se encarga de mantener tu piel seca y tu cuerpo cómodo.
    Guardá tu teléfono en el bolsillo interior para mantener la música sonando del primer al último minuto de cada entrenamiento.
    La cintura de tiro alto te permite combinarlas con tus demás prendas y crear looks únicos.
    Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.
    Logo ADIDAS estampado.
    Cintura elastica.
    Botamanga ajustada.`,
        material: '89% Poliéster Reciclado, 11% Spandex',
        alt: 'Calza 7/8 femenina',
        sexo: 'mujer',
        categoria: 'calza',
        precio: 5399,
        stock: 5
    },
    {
        id: '11',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/pantalon-reebok-classics-linear-mujer-azul-111020fj3307001-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/p/a/pantalon-reebok-classics-linear-mujer-azul-111020fj3307001-2.jpg',
        nombre: 'Pantalon Classic F',
        descripcion: `Estilo universitario que nunca falla.
    Este pantalón para mujer cuenta con un panel ancho con un diseño de logos Vector a lo largo de las piernas que le infunde un look retro.
    Está confeccionado en tejido polar cálido y suave.
    Logo REEBOK estampado.
    Cintura elastizada con cordón de ajuste interno, bolsillos laterales y botamanga con puño elástico.
    Con friza.
    `,
        material: '80% Algodón Orgánico, 20% Poliéster',
        alt: 'Pantalon classic femenina',
        sexo: 'mujer',
        categoria: 'pantalon',
        precio: 6799,
        stock: 9
    },
    {
        id: '12',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/pantalon-under-armour-entrenamiento-rival-lockertag-negro-700021361625001-1_2.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/p/a/pantalon-under-armour-entrenamiento-rival-lockertag-negro-700021361625001-2_2.jpg',
        nombre: 'Short Entramiento M',
        descripcion: `Se convertirá en tu nuevo Short favorito, para calentar o para todo lo que quieras: es ligero, cómodo y su interior es de lo más suave.
    Tejido Fleece de mezcla de algodón ligero y ultracómodo.
    Suave capa interior que mantiene la calidez y la comodidad.
    Cintura elástica con revestimiento y cordón ajustable exterior.
    Bolsillos laterales y trasero con cierre.
    Cintura eslatizada con cordón de ajuste visible.
    Con friza.
    Logo UNDER ARMOUR estampado.`,
        material: '80% Algodón, 20% Poliéster',
        alt: 'Short entrenamiento masculino',
        sexo: 'hombre',
        categoria: 'short',
        precio: 16000,
        stock: 10
    },
    {
        id: '13',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-rompeviento-flash-entrenamiento-greystone-gris-270020w21greygr-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/c/a/campera-rompeviento-flash-entrenamiento-greystone-gris-270020w21greygr-2.jpg',
        nombre: 'Chaqueta Rompe Viento M',
        descripcion: `campera FLASH con capucha, diseñada para darlo todo en tus entrenamientos.
    Cordón de ajuste visible.
    Bolsillo de frente con cierre.
    Bolsillos laterales con botones.
    Cintura y puños elásticos.`,
        material: '100% Poliéster',
        alt: 'Chaqueta rompe vientos femenina',
        sexo: 'hombre',
        categoria: 'chaqueta',
        precio: 17000,
        stock: 14
    },
    {
        id: '14',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-adidas-running-own-the-run-gris-100020gc7869001-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/r/e/remera-adidas-running-own-the-run-gris-100020gc7869001-2.jpg',
        nombre: 'Camiseta Entrenamiento M',
        descripcion: `Tenés el cajón lleno de remeras que no te sirven.
    Demasiado gruesas o finas.
    Muy ajustadas o excesivamente holgadas.
    Olvidate de esas incomodidades y ponete la remera ADIDAS Own the Run.
    Se ha confeccionado con materiales reciclados Primegreen como parte de nuestro compromiso con la sostenibilidad y para ofrecerte la máxima comodidad de principio a fin de la carrera.
    No te conformes con menos.
    El tejido transpirable AEROREADY mantiene la piel fresca y seca.
    Los detalles reflectantes te permiten correr con seguridad al amanecer o al atardecer.
    Logo ADIDAS y detalles en estampado reflectivos.`,
        material: '100% Poliéster',
        alt: 'Chaqueta rompe vientos femenina',
        sexo: 'hombre',
        categoria: 'camiseta',
        precio: 5199,
        stock: 16
    }

]

function getItems() {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

const ItemListContainer = ({setCartItem}) => {
    const [Loader, setLoader] = useState(true);

    const { catId } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        //USO SETTIMEOUT PARA SIMULAR PEDIDO API
        setTimeout(() => {
            const dress = getItems(products);
            
            dress
                .then(res => {
                   
                    //SI USO UNA CATEGORIA ME RENDERIZA ESA CATEGORIA
                    if (catId) {
                        const catFiltrado = res.filter(prod => prod.categoria === catId);
                        setProducts(catFiltrado)
                    } else { //SINO ME RENDERIZA TODO EL ARRAY
                        setProducts(res)
                    }

                })
                .catch(err => console.log(err))
                .finally(() => {
                    //UNA VEZ PASADO LOS 2 SEGUNDOS, EL LOADER DESAPARECE
                    setLoader(false)
                })

        }, 2000);

    }, [catId,products])
    
    return (

        <div className="tienda-contenedor">
            <div className="contenedor-principal" style={{ backgroundImage: `url(${ImgRunning2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', height: '100vh' }}>
                <div className="contenedor-infoTienda">
                    <h2 className="contenedor-titulo">Tienda</h2>
                </div>
            </div>

            <div>
                {Loader === true ? <Loading/> : <ItemList  products={products} setCartItem={setCartItem}/>}
            </div>
        </div>


    )
}

export default ItemListContainer
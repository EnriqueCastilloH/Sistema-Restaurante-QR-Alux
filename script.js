// ==========================================
// ALUX - SISTEMA DIGITAL DE PEDIDOS
// MENÚ COMPLETO + NÚMERO DE PERSONAS
// ==========================================


// ==========================================
// CONFIGURACIÓN DE MESA
// ==========================================

const parametros = new URLSearchParams(window.location.search);

const parametroMesa = parametros.get("mesa");

const mesa =
    parametroMesa && /^[1-9]\d{0,2}$/.test(parametroMesa)
        ? parametroMesa
        : "1";


// ==========================================
// VARIABLES DEL SISTEMA
// ==========================================

let idiomaActual = "es";

let personas = 1;

let pedido = {};


// ==========================================
// MENÚ COMPLETO DE ALUX
// ==========================================
// 6 ENTRADAS
// 2 SOPAS & CREMAS
// 7 PLATOS PRINCIPALES
// 5 POSTRES
// TOTAL: 20 PLATILLOS
// ==========================================

const menu = [

    // ==========================================
    // ENTRADAS
    // ==========================================

    {
        id: "ensalada_chaya",
        categoria: "entradas",

        es: {
            nombre: "Ensalada de Chaya",
            descripcion:
                "Con frutas, verduras y aderezo de flor de hibiscus."
        },

        en: {
            nombre: "Chaya Salad",
            descripcion:
                "With fruits, vegetables and hibiscus flower dressing."
        },

        tags: [
            "vegetariano",
            "sin-gluten"
        ]
    },


    {
        id: "ensalada_trigo",
        categoria: "entradas",

        es: {
            nombre: "Ensalada de Trigo",
            descripcion:
                "Queso panela asado y vinagreta de ceviche."
        },

        en: {
            nombre: "Wheat Salad",
            descripcion:
                "Grilled panela cheese and ceviche vinaigrette."
        },

        tags: [
            "vegetariano"
        ]
    },


    {
        id: "aguachile",
        categoria: "entradas",

        es: {
            nombre: "Aguachile de Pescado y Camarón",
            descripcion:
                "Con chiles tatemados y tomates de la región."
        },

        en: {
            nombre: "Fish and Shrimp Aguachile",
            descripcion:
                "With roasted chilies and regional tomatoes."
        },

        tags: [
            "sin-gluten",
            "cacahuates"
        ]
    },


    {
        id: "panuchos_cochinita",
        categoria: "entradas",

        es: {
            nombre: "Panuchos de Cochinita Pibil",
            descripcion:
                "Tortilla de maíz rellena de frijol colado, lechón adobado con especias de la región, acompañado de salsa Xnipec y chile habanero."
        },

        en: {
            nombre: "Pig Pibil “Panuchos”",
            descripcion:
                "Corn tortilla stuffed with strained beans, suckling pig marinated with regional spices, accompanied of Xnipec sauce and habanero chilli."
        },

        tags: [
            "sin-gluten"
        ]
    },


    {
        id: "tamal_huitlacoche",
        categoria: "entradas",

        es: {
            nombre: "Tamal de Huitlacoche",
            descripcion:
                "Masa de maíz rellena de hongos Huitlacoche y queso de cabra envuelta en chaya con salsa de tomatillo asado."
        },

        en: {
            nombre: "Huitlacoche Tamal",
            descripcion:
                "Corn dough stuffed with Huitlacoche mushrooms and goat cheese wrapped in corn leaf with roasted tomatillo sauce."
        },

        tags: [
            "vegetariano",
            "sin-gluten"
        ]
    },


    {
        id: "tostadas_atun",
        categoria: "entradas",

        es: {
            nombre: "Tostadas de Atún",
            descripcion:
                "Adobado de recado negro, crema de aguacate y cebolla encurtida con naranja agria."
        },

        en: {
            nombre: "Tuna Toast",
            descripcion:
                "Marinated with a mix of Mexican spices, avocado cream and pickled onion with sour orange."
        },

        tags: [
            "sin-gluten"
        ]
    },


    // ==========================================
    // SOPAS & CREMAS
    // ==========================================

    {
        id: "pozole_verde",
        categoria: "sopas",

        es: {
            nombre: "Pozole Verde",
            descripcion:
                "Tradicional sopa guerrerense a base de maíz, chile y tomatillos verdes con pescado y camarón."
        },

        en: {
            nombre: "Green Pozole",
            descripcion:
                "Traditional Guerrero soup made from corn, chile and green tomatoes with fish and shrimp."
        },

        tags: [
            "sin-gluten"
        ]
    },


    {
        id: "sopa_mandarina",
        categoria: "sopas",

        es: {
            nombre: "Sopa Fría de Mandarina",
            descripcion:
                "Con melón cantaloup, limón y hierbabuena."
        },

        en: {
            nombre: "Cold Tangerine Soup",
            descripcion:
                "With cantaloupe melon, lemon and peppermint."
        },

        tags: [
            "vegetariano",
            "sin-gluten"
        ]
    },


    // ==========================================
    // PLATOS PRINCIPALES
    // ==========================================

    {
        id: "pollo_relleno",
        categoria: "principales",

        es: {
            nombre: "Pollo Relleno",
            descripcion:
                "Con salsa de chile pasilla y ajonjolí acompañado de papas confitadas y verduras a la parrilla."
        },

        en: {
            nombre: "Stuffed Chicken",
            descripcion:
                "With pasilla chili sauce and sesame seeds accompanied by candied potatoes and grilled vegetables."
        },

        tags: [
            "sin-gluten"
        ]
    },


    {
        id: "nortenita_res",
        categoria: "principales",

        es: {
            nombre: "Norteñita de Res",
            descripcion:
                "Vegetales asados, aceite de epazote, jugo de asado de flor de jamaica y chile morita."
        },

        en: {
            nombre: "Northern Beef",
            descripcion:
                "Roasted vegetables, epazote oil, roasted hibiscus juice, and morita chili."
        },

        tags: [
            "sin-gluten"
        ]
    },


    {
        id: "chamorro_cerdo",
        categoria: "principales",

        es: {
            nombre: "Chamorro de Cerdo (para 2 pax)",
            descripcion:
                "Estilo cantina, adobado y horneado durante 6 horas con arroz rojo, frijoles y nopales."
        },

        en: {
            nombre: "Pork Shank (for 2 pax)",
            descripcion:
                "Canteen style, marinated and baked for 6 hours with red rice, beans and nopales."
        },

        tags: [
            "sin-gluten"
        ]
    },


    {
        id: "tacos_pescado_coco",
        categoria: "principales",

        es: {
            nombre: "Tacos de Pescado al Coco",
            descripcion:
                "Pescado en tempura de coco con jícama fresca acompañado de mayonesa de coco y cilantro, y aderezo de piña con chile morita."
        },

        en: {
            nombre: "Coconut Fish Tacos",
            descripcion:
                "Fish in coconut tempura with fresh jicama accompanied by coconut and coriander mayonnaise, and pineapple dressing with morita chili."
        },

        tags: []
    },


    {
        id: "pescado_talla",
        categoria: "principales",

        es: {
            nombre: "Pescado a la Talla",
            descripcion:
                "Tradicional de Guerrero, pescado adobado con chiles y especias, esquites y salsa demi-glace de jaibas con chiles tatemados."
        },

        en: {
            nombre: "Talla Style Fish",
            descripcion:
                "Traditional from Guerrero, marinated fish with chiles and spices, corn and crab demi-glace sauce with grilled chiles."
        },

        tags: [
            "sin-gluten"
        ]
    },


    {
        id: "arroz_tuetano",
        categoria: "principales",

        es: {
            nombre: "Arroz Caldoso de Tuétano",
            descripcion:
                "Con pulpo zarandeado a la parrilla y all i oli de chile Xcatik tatemado."
        },

        en: {
            nombre: "Brothy Rice with Marrow",
            descripcion:
                "With grilled octopus and tatemado Xcatik chile all i oli."
        },

        tags: [
            "sin-gluten"
        ]
    },


    {
        id: "enchiladas_calabaza",
        categoria: "principales",

        es: {
            nombre: "Enchiladas de Calabaza",
            descripcion:
                "En salsa verde, con crema de almendras dulces y queso Oaxaca."
        },

        en: {
            nombre: "Pumpkin Enchiladas",
            descripcion:
                "In green sauce, with sweet almond cream and Oaxaca cheese."
        },

        tags: [
            "vegetariano",
            "sin-gluten"
        ]
    },


    // ==========================================
    // POSTRES
    // ==========================================

    {
        id: "pastel_elote",
        categoria: "postres",

        es: {
            nombre: "Pastel de Elote",
            descripcion:
                "Con salsa de cajeta y crema de vainilla."
        },

        en: {
            nombre: "Corn Cake",
            descripcion:
                "With caramel sauce and vanilla cream."
        },

        tags: []
    },


    {
        id: "flor_jamaica",
        categoria: "postres",

        es: {
            nombre: "Flor de Jamaica",
            descripcion:
                "Paleta de flor de Jamaica, con naranja, fresas y canela."
        },

        en: {
            nombre: "Jamaica Flower",
            descripcion:
                "Jamaica flower popsicle with orange, strawberries and cinnamon."
        },

        tags: [
            "sin-gluten"
        ]
    },


    {
        id: "chocolate_avellanas",
        categoria: "postres",

        es: {
            nombre: "Chocolate con Avellanas",
            descripcion:
                "Mousse de avellanas, brownie de chocolate y perlas de fruta de la pasión."
        },

        en: {
            nombre: "Chocolate with Hazelnuts",
            descripcion:
                "Hazelnut mousse, chocolate brownie, and passion fruit pearls."
        },

        tags: []
    },


    {
        id: "ensalada_fruta",
        categoria: "postres",

        es: {
            nombre: "Ensalada de Fruta Fresca",
            descripcion:
                "Ensalada de frutas frescas de temporada."
        },

        en: {
            nombre: "Fresh Fruit Salad",
            descripcion:
                "A selection of fresh seasonal fruits."
        },

        tags: [
            "vegetariano"
        ]
    },


    {
        id: "helados_sorbetes",
        categoria: "postres",

        es: {
            nombre: "Helados y Sorbetes",
            descripcion:
                ""
        },

        en: {
            nombre: "Ice Creams & Sorbets",
            descripcion:
                ""
        },

        tags: [
            "vegetariano"
        ]
    }

];


// ==========================================
// NOMBRES DE CATEGORÍAS
// ==========================================

function nombreCategoria(categoria) {

    const categorias = {

        es: {
            entradas: "ENTRADA",
            sopas: "SOPA & CREMA",
            principales: "PLATO PRINCIPAL",
            postres: "POSTRE"
        },

        en: {
            entradas: "APPETIZER",
            sopas: "SOUP & CREAM",
            principales: "MAIN COURSE",
            postres: "DESSERT"
        }

    };

    return categorias[idiomaActual][categoria];
}


// ==========================================
// CREAR ETIQUETAS
// ==========================================

function crearEtiquetas(tags) {

    if (!tags || tags.length === 0) {
        return "";
    }

    const nombres = {

        es: {
            vegetariano: "✦ Vegetariano",
            "sin-gluten": "ⓖ Sin gluten",
            cacahuates: "● Cacahuates"
        },

        en: {
            vegetariano: "✦ Vegetarian",
            "sin-gluten": "ⓖ Gluten free",
            cacahuates: "● Peanuts"
        }

    };

    return `
        <div class="etiquetas">

            ${tags.map(tag => `

                <span class="etiqueta">
                    ${nombres[idiomaActual][tag]}
                </span>

            `).join("")}

        </div>
    `;
}


// ==========================================
// TOTAL DE UNA CATEGORÍA
// ==========================================

function totalCategoria(categoria) {

    return menu

        .filter(
            producto =>
                producto.categoria === categoria
        )

        .reduce(
            (total, producto) =>
                total + (pedido[producto.id] || 0),

            0
        );
}


// ==========================================
// ACTUALIZAR CONTADORES
// ==========================================

function actualizarContadores() {

    const categorias = {

        entradas: "contadorEntradas",

        sopas: "contadorSopas",

        principales: "contadorPrincipales",

        postres: "contadorPostres"

    };


    Object.entries(categorias).forEach(
        ([categoria, id]) => {

            const contador =
                document.getElementById(id);

            if (contador) {

                contador.textContent =
                    `${totalCategoria(categoria)} / ${personas}`;

            }

        }
    );
}


// ==========================================
// ACTUALIZAR SELECTOR DE PERSONAS
// ==========================================

function actualizarSelectorPersonas() {

    const cantidad =
        document.getElementById("cantidadPersonas");

    const texto =
        document.getElementById("textoPersonas");

    const botonMenos =
        document.getElementById("botonMenosPersonas");

    const botonMas =
        document.getElementById("botonMasPersonas");


    if (cantidad) {
        cantidad.textContent = personas;
    }


    if (texto) {

        texto.textContent =

            idiomaActual === "es"

                ? (
                    personas === 1
                        ? "persona"
                        : "personas"
                )

                : (
                    personas === 1
                        ? "person"
                        : "people"
                );
    }


    if (botonMenos) {

        botonMenos.disabled =
            personas <= 1;

    }


    if (botonMas) {

        botonMas.disabled =
            personas >= 20;

    }
}


// ==========================================
// CAMBIAR NÚMERO DE PERSONAS
// ==========================================

function cambiarPersonas(cambio) {

    let nuevoNumero =
        personas + cambio;


    if (nuevoNumero < 1) {
        nuevoNumero = 1;
    }


    if (nuevoNumero > 20) {
        nuevoNumero = 20;
    }


    // ==========================================
    // NO PERMITIR MENOS PERSONAS QUE PLATILLOS
    // YA SELECCIONADOS
    // ==========================================

    const mayorCategoria = Math.max(

        totalCategoria("entradas"),

        totalCategoria("sopas"),

        totalCategoria("principales"),

        totalCategoria("postres")

    );


    if (nuevoNumero < mayorCategoria) {

        alert(

            idiomaActual === "es"

                ? `Ya tienes ${mayorCategoria} platillo(s) seleccionados en una categoría. Reduce primero esa cantidad para poder seleccionar menos personas.`

                : `You already have ${mayorCategoria} dish(es) selected in one category. Reduce that amount first before selecting fewer people.`

        );

        return;
    }


    personas =
        nuevoNumero;


    actualizarSelectorPersonas();

    actualizarContadores();


    if (
        document.getElementById("pantallaMenu") &&
        !document.getElementById("pantallaMenu").hidden
    ) {

        mostrarMenu();

        mostrarPedido();

    }
}


// ==========================================
// INICIAR PEDIDO
// ==========================================

function iniciarPedido() {

    pedido = {};


    const pantallaInicio =
        document.getElementById(
            "pantallaInicio"
        );


    const pantallaMenu =
        document.getElementById(
            "pantallaMenu"
        );


    if (pantallaInicio) {
        pantallaInicio.hidden = true;
    }


    if (pantallaMenu) {
        pantallaMenu.hidden = false;
    }


    const totalPersonas =
        document.getElementById(
            "totalPersonas"
        );


    if (totalPersonas) {
        totalPersonas.textContent = personas;
    }


    const numeroPersonasMenu =
        document.getElementById(
            "numeroPersonas"
        );


    if (numeroPersonasMenu) {
        numeroPersonasMenu.textContent = personas;
    }


    const observaciones =
        document.getElementById(
            "observaciones"
        );


    if (observaciones) {
        observaciones.value = "";
    }


    mostrarMenu();

    mostrarPedido();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// VOLVER A SELECCIÓN DE PERSONAS
// ==========================================

function volverInicio() {

    const confirmar =
        idiomaActual === "es"

            ? "¿Deseas cambiar el número de personas? El pedido actual se perderá."

            : "Do you want to change the number of people? The current order will be lost.";


    if (!confirm(confirmar)) {
        return;
    }


    pedido = {};


    const pantallaInicio =
        document.getElementById(
            "pantallaInicio"
        );


    const pantallaMenu =
        document.getElementById(
            "pantallaMenu"
        );


    if (pantallaMenu) {
        pantallaMenu.hidden = true;
    }


    if (pantallaInicio) {
        pantallaInicio.hidden = false;
    }


    actualizarSelectorPersonas();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// MOSTRAR MENÚ
// ==========================================

function mostrarMenu() {

    const contenedores = {

        entradas:
            document.getElementById(
                "listaEntradas"
            ),

        sopas:
            document.getElementById(
                "listaSopas"
            ),

        principales:
            document.getElementById(
                "listaPrincipales"
            ),

        postres:
            document.getElementById(
                "listaPostres"
            )

    };


    Object.values(contenedores).forEach(
        contenedor => {

            if (contenedor) {
                contenedor.innerHTML = "";
            }

        }
    );


    menu.forEach(producto => {

        const contenedor =
            contenedores[producto.categoria];


        if (!contenedor) {
            return;
        }


        const informacion =
            producto[idiomaActual];


        const cantidad =
            pedido[producto.id] || 0;


        const totalDeCategoria =
            totalCategoria(
                producto.categoria
            );


        const puedeAumentar =
            totalDeCategoria < personas;


        const tarjeta =
            document.createElement(
                "article"
            );


        tarjeta.className =
            "producto";


        tarjeta.innerHTML = `

            <span class="producto-categoria">
                ${nombreCategoria(
                    producto.categoria
                )}
            </span>


            <h3>
                ${informacion.nombre}
            </h3>


            ${
                informacion.descripcion

                ? `
                    <p class="producto-descripcion">
                        ${informacion.descripcion}
                    </p>
                `

                : `
                    <p class="producto-descripcion"></p>
                `
            }


            ${crearEtiquetas(
                producto.tags
            )}


            <div class="control">

                <button
                    type="button"
                    onclick="cambiarCantidad(
                        '${producto.id}',
                        -1
                    )"
                    aria-label="${
                        idiomaActual === "es"
                            ? "Disminuir cantidad"
                            : "Decrease quantity"
                    }"
                    ${cantidad <= 0 ? "disabled" : ""}
                >
                    −
                </button>


                <input
                    type="number"
                    min="0"
                    max="${personas}"
                    value="${cantidad}"
                    onchange="
                        cantidadManual(
                            '${producto.id}',
                            this.value
                        )
                    "
                    aria-label="${
                        idiomaActual === "es"
                            ? "Cantidad"
                            : "Quantity"
                    }"
                >


                <button
                    type="button"
                    onclick="cambiarCantidad(
                        '${producto.id}',
                        1
                    )"
                    aria-label="${
                        idiomaActual === "es"
                            ? "Aumentar cantidad"
                            : "Increase quantity"
                    }"
                    ${!puedeAumentar ? "disabled" : ""}
                >
                    +
                </button>

            </div>

        `;


        contenedor.appendChild(
            tarjeta
        );

    });


    actualizarContadores();
}


// ==========================================
// CAMBIAR CANTIDAD
// ==========================================

function cambiarCantidad(
    id,
    cambio
) {

    const producto =
        menu.find(
            item =>
                item.id === id
        );


    if (!producto) {
        return;
    }


    const cantidadActual =
        pedido[id] || 0;


    let nuevaCantidad =
        cantidadActual + cambio;


    if (nuevaCantidad < 0) {
        nuevaCantidad = 0;
    }


    const totalDeCategoria =
        totalCategoria(
            producto.categoria
        );


    if (
        cambio > 0 &&
        totalDeCategoria >= personas
    ) {

        alert(

            idiomaActual === "es"

                ? `El máximo es de ${personas} platillo(s) en esta categoría.`

                : `The maximum is ${personas} dish(es) in this category.`

        );

        return;
    }


    if (nuevaCantidad === 0) {

        delete pedido[id];

    } else {

        pedido[id] =
            nuevaCantidad;

    }


    mostrarMenu();

    mostrarPedido();
}


// ==========================================
// CANTIDAD MANUAL
// ==========================================

function cantidadManual(
    id,
    valor
) {

    const producto =
        menu.find(
            item =>
                item.id === id
        );


    if (!producto) {
        return;
    }


    let cantidad =
        parseInt(
            valor,
            10
        );


    if (
        isNaN(cantidad) ||
        cantidad < 0
    ) {

        cantidad = 0;

    }


    const totalDeCategoriaSinProducto =

        totalCategoria(
            producto.categoria
        )

        -

        (pedido[id] || 0);


    const maximoPermitido =

        personas

        -

        totalDeCategoriaSinProducto;


    if (
        cantidad >
        maximoPermitido
    ) {

        cantidad =
            Math.max(
                0,
                maximoPermitido
            );


        alert(

            idiomaActual === "es"

                ? `En esta categoría puedes seleccionar como máximo ${personas} platillo(s) en total.`

                : `In this category you can select a maximum of ${personas} dish(es) in total.`

        );

    }


    if (cantidad === 0) {

        delete pedido[id];

    } else {

        pedido[id] =
            cantidad;

    }


    mostrarMenu();

    mostrarPedido();
}


// ==========================================
// MOSTRAR RESUMEN DEL PEDIDO
// ==========================================

function mostrarPedido() {

    const listaPedido =
        document.getElementById(
            "listaPedido"
        );


    if (!listaPedido) {
        return;
    }


    const productosSeleccionados =

        menu.filter(
            producto =>
                pedido[producto.id] > 0
        );


    if (
        productosSeleccionados.length === 0
    ) {

        listaPedido.innerHTML = `

            <p class="pedido-vacio">

                ${
                    idiomaActual === "es"

                        ? "No has agregado platillos."

                        : "You have not added any dishes."

                }

            </p>

        `;

        return;
    }


    listaPedido.innerHTML =

        productosSeleccionados.map(
            producto => {

                const cantidad =
                    pedido[producto.id];


                return `

                    <div class="item-carrito">

                        <span>
                            ${
                                producto[
                                    idiomaActual
                                ].nombre
                            }
                        </span>


                        <strong>
                            × ${cantidad}
                        </strong>

                    </div>

                `;

            }
        ).join("");
}


// ==========================================
// CAMBIAR IDIOMA
// ==========================================

function cambiarIdioma(
    idioma
) {

    idiomaActual =
        idioma;


    const es =
        idioma === "es";


    const btnEspanol =
        document.getElementById(
            "btnEspanol"
        );


    const btnEnglish =
        document.getElementById(
            "btnEnglish"
        );


    if (btnEspanol) {

        btnEspanol.classList.toggle(
            "idioma-activo",
            es
        );

    }


    if (btnEnglish) {

        btnEnglish.classList.toggle(
            "idioma-activo",
            !es
        );

    }


    const textoIdioma =
        document.getElementById(
            "textoIdioma"
        );


    if (textoIdioma) {

        textoIdioma.textContent =

            es

                ? "Selecciona tu idioma"

                : "Select your language";

    }


    const textoMesa =
        document.getElementById(
            "textoMesa"
        );


    if (textoMesa) {

        textoMesa.textContent =

            es
                ? "MESA"
                : "TABLE";

    }


    const textoRealizaPedido =
        document.getElementById(
            "textoRealizaPedido"
        );


    if (textoRealizaPedido) {

        textoRealizaPedido.textContent =

            es

                ? "Selecciona tus platillos"

                : "Select your dishes";

    }


    // ==========================================
    // NÚMERO DE PERSONAS
    // ==========================================

    const textoPersonasMini =
        document.getElementById(
            "textoPersonasMini"
        );


    if (textoPersonasMini) {

        textoPersonasMini.textContent =

            es
                ? "COMENSALES"
                : "GUESTS";

    }


    const textoPersonasTitulo =
        document.getElementById(
            "textoPersonasTitulo"
        );


    if (textoPersonasTitulo) {

        textoPersonasTitulo.textContent =

            es

                ? "¿Cuántas personas son?"

                : "How many people are there?";

    }


    const textoPersonasAyuda =
        document.getElementById(
            "textoPersonasAyuda"
        );


    if (textoPersonasAyuda) {

        textoPersonasAyuda.textContent =

            es

                ? "El número de personas marca el máximo de platillos que puedes seleccionar en cada categoría."

                : "The number of people sets the maximum number of dishes you can select in each category.";

    }


    // ==========================================
    // NAVEGACIÓN
    // ==========================================

    const navEntradas =
        document.getElementById(
            "navEntradas"
        );


    if (navEntradas) {

        navEntradas.textContent =

            es
                ? "Entradas"
                : "Appetizers";

    }


    const navSopas =
        document.getElementById(
            "navSopas"
        );


    if (navSopas) {

        navSopas.textContent =

            es
                ? "Sopa & Crema"
                : "Soup & Cream";

    }


    const navPrincipales =
        document.getElementById(
            "navPrincipales"
        );


    if (navPrincipales) {

        navPrincipales.textContent =

            es
                ? "Platos principales"
                : "Main Course";

    }


    const navPostres =
        document.getElementById(
            "navPostres"
        );


    if (navPostres) {

        navPostres.textContent =

            es
                ? "Postres"
                : "Desserts";

    }


    // ==========================================
    // TÍTULOS
    // ==========================================

    const tituloEntradas =
        document.getElementById(
            "tituloEntradas"
        );


    if (tituloEntradas) {

        tituloEntradas.textContent =

            es
                ? "Entradas"
                : "Appetizers";

    }


    const tituloSopas =
        document.getElementById(
            "tituloSopas"
        );


    if (tituloSopas) {

        tituloSopas.textContent =

            es
                ? "Sopa & Crema"
                : "Soup & Cream";

    }


    const tituloPrincipales =
        document.getElementById(
            "tituloPrincipales"
        );


    if (tituloPrincipales) {

        tituloPrincipales.textContent =

            es
                ? "Platos Principales"
                : "Main Course";

    }


    const tituloPostres =
        document.getElementById(
            "tituloPostres"
        );


    if (tituloPostres) {

        tituloPostres.textContent =

            es
                ? "Postres"
                : "Desserts";

    }


    // ==========================================
    // INFORMACIÓN ESPECIAL DE POSTRES
    // ==========================================

    const seleccionPostres =
        document.getElementById(
            "seleccionPostres"
        );


    if (seleccionPostres) {

        seleccionPostres.textContent =

            es

                ? "Pregunte por nuestra selección de postres."

                : "Ask about our desserts selection.";

    }


    const textoLangosta =
        document.getElementById(
            "textoLangosta"
        );


    if (textoLangosta) {

        textoLangosta.innerHTML =

            es

                ? "Incremente su experiencia gastronómica.<br>Con nuestra cena de langosta. Reserve con RRPP."

                : "Enhance our dining experience.<br>With our lobster dinner. Book with PR.";

    }


    const avisoCrudos =
        document.getElementById(
            "avisoCrudos"
        );


    if (avisoCrudos) {

        avisoCrudos.textContent =

            es

                ? "Estimado huésped, el consumo de alimentos crudos es bajo su propio riesgo."

                : "Dear guest, the consumption of raw ingredients is done at your own risk.";

    }


    // ==========================================
    // RESUMEN
    // ==========================================

    const textoResumen =
        document.getElementById(
            "textoResumen"
        );


    if (textoResumen) {

        textoResumen.textContent =

            es
                ? "RESUMEN"
                : "SUMMARY";

    }


    const tituloPedido =
        document.getElementById(
            "tituloPedido"
        );


    if (tituloPedido) {

        tituloPedido.textContent =

            es
                ? "Tu pedido"
                : "Your order";

    }


    const textoMesaPedido =
        document.getElementById(
            "textoMesaPedido"
        );


    if (textoMesaPedido) {

        textoMesaPedido.textContent =

            es
                ? "Mesa"
                : "Table";

    }


    const labelObservaciones =
        document.getElementById(
            "labelObservaciones"
        );


    if (labelObservaciones) {

        labelObservaciones.textContent =

            es

                ? "Observaciones del pedido"

                : "Order notes";

    }


    const observaciones =
        document.getElementById(
            "observaciones"
        );


    if (observaciones) {

        observaciones.placeholder =

            es

                ? "Ejemplo: sin picante, alergias o alguna indicación especial."

                : "Example: no spicy food, allergies or any special instructions.";

    }


    const botonWhatsApp =
        document.getElementById(
            "botonWhatsApp"
        );


    if (botonWhatsApp) {

        const span =
            botonWhatsApp.querySelector(
                "span"
            );


        if (span) {

            span.textContent =

                es
                    ? "Enviar pedido"
                    : "Send order";

        }

    }


    const textoPrototipo =
        document.getElementById(
            "textoPrototipo"
        );


    if (textoPrototipo) {

        textoPrototipo.textContent =

            es

                ? "Sistema digital de pedidos mediante código QR"

                : "Digital ordering system using QR codes";

    }


    // ==========================================
    // ACTUALIZAR SISTEMA
    // ==========================================

    actualizarSelectorPersonas();

    mostrarMenu();

    mostrarPedido();
}


// ==========================================
// ENVIAR PEDIDO POR WHATSAPP
// ==========================================

function enviarWhatsApp() {

    const productosSeleccionados =

        menu.filter(
            producto =>
                pedido[producto.id] > 0
        );


    if (
        productosSeleccionados.length === 0
    ) {

        alert(

            idiomaActual === "es"

                ? "Agrega al menos un platillo antes de enviar el pedido."

                : "Add at least one dish before sending the order."

        );

        return;
    }


    const campoObservaciones =
        document.getElementById(
            "observaciones"
        );


    const observaciones =
        campoObservaciones
            ? campoObservaciones.value.trim()
            : "";


    let mensaje = "";


    // ==========================================
    // ESPAÑOL
    // ==========================================

    if (
        idiomaActual === "es"
    ) {

        mensaje +=
            "NUEVO PEDIDO\n";

        mensaje +=
            "━━━━━━━━━━━━━━━\n";

        mensaje +=
            `MESA: ${mesa}\n`;

        mensaje +=
            `PERSONAS: ${personas}\n\n`;

        mensaje +=
            "PEDIDO:\n";


        productosSeleccionados.forEach(
            producto => {

                mensaje +=

                    `${pedido[producto.id]} × ${producto.es.nombre}\n`;

            }
        );


        mensaje +=
            "\nOBSERVACIONES:\n";


        mensaje +=
            observaciones ||
            "Sin observaciones";


        mensaje +=
            "\n━━━━━━━━━━━━━━━\n";


        mensaje +=
            "Pedido enviado desde el sistema QR";


    // ==========================================
    // INGLÉS
    // ==========================================

    } else {

        mensaje +=
            "NEW ORDER\n";

        mensaje +=
            "━━━━━━━━━━━━━━━\n";

        mensaje +=
            `TABLE: ${mesa}\n`;

        mensaje +=
            `PEOPLE: ${personas}\n\n`;

        mensaje +=
            "ORDER:\n";


        productosSeleccionados.forEach(
            producto => {

                mensaje +=

                    `${pedido[producto.id]} × ${producto.en.nombre}\n`;

            }
        );


        mensaje +=
            "\nNOTES:\n";


        mensaje +=
            observaciones ||
            "No notes";


        mensaje +=
            "\n━━━━━━━━━━━━━━━\n";


        mensaje +=
            "Order sent from the QR system";

    }


    // ==========================================
    // WHATSAPP
    // ==========================================

    const numeroWhatsApp =
        "5217714047997";


    const url =

        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;


    window.open(
        url,
        "_blank"
    );
}


// ==========================================
// INICIAR EVENTOS
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // --------------------------------------
        // NÚMERO DE PERSONAS
        // --------------------------------------

        const botonMenos =
            document.getElementById(
                "botonMenosPersonas"
            );


        const botonMas =
            document.getElementById(
                "botonMasPersonas"
            );


        const botonContinuar =
            document.getElementById(
                "botonContinuar"
            );


        const botonCambiarPersonas =
            document.getElementById(
                "botonCambiarPersonas"
            );


        if (botonMenos) {

            botonMenos.addEventListener(
                "click",
                function () {

                    cambiarPersonas(-1);

                }
            );

        }


        if (botonMas) {

            botonMas.addEventListener(
                "click",
                function () {

                    cambiarPersonas(1);

                }
            );

        }


        if (botonContinuar) {

            botonContinuar.addEventListener(
                "click",
                function () {

                    iniciarPedido();

                }
            );

        }


        if (botonCambiarPersonas) {

            botonCambiarPersonas.addEventListener(
                "click",
                function () {

                    volverInicio();

                }
            );

        }


        // --------------------------------------
        // WHATSAPP
        // --------------------------------------

        const botonWhatsApp =
            document.getElementById(
                "botonWhatsApp"
            );


        if (botonWhatsApp) {

            botonWhatsApp.addEventListener(
                "click",
                function () {

                    enviarWhatsApp();

                }
            );

        }


        // --------------------------------------
        // NÚMERO DE MESA
        // --------------------------------------

        const numeroMesa =
            document.getElementById(
                "numeroMesa"
            );


        const numeroMesaPedido =
            document.getElementById(
                "numeroMesaPedido"
            );


        if (numeroMesa) {
            numeroMesa.textContent = mesa;
        }


        if (numeroMesaPedido) {
            numeroMesaPedido.textContent = mesa;
        }


        // --------------------------------------
        // INICIALIZAR SISTEMA
        // --------------------------------------

        actualizarSelectorPersonas();

        cambiarIdioma("es");

    }
);
function abrirModal() {
    //console.log("Hello world")
    document.getElementById("modal-2").style.display = "block"
    document.getElementById('modal-2').classList.add('show')
}


function insertarModal() {
    abrirModal()
    document.getElementById("modal-2-button").onclick = () => {
        insertar()
    }
}


function insertar() {

    fetch("http://localhost:3000/orders/add", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fecha: document.getElementById("fecha").value,
            cantidad: parseInt(document.getElementById("cantidad").value),
            nombre: document.getElementById("nombre").value,
            proveedor: document.getElementById("proveedor").value,

        })
    }).then(response => {
        const inputs = ["fecha", "cantidad", "nombre", "proveedor"]
        inputs.forEach((item) => {
            document.getElementById(item).value = ""
        })

        location.reload();
        // console.log(data)
    })

}

function cerrarModal() {
    //console.log("Hello world")
    document.getElementById("modal-2").style.display = "none"
    document.getElementById('modal-2').classList.remove("show")
}

async function borrar(id) {

    console.log(id)
    console.log("Borrando usuario");
    const request = await fetch(`http://localhost:3000/orders/delete`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            _id: id
        })

    })


    const response = await request;
    if (response.status == 200) {
        document.getElementById(`order-${id}`).remove()
    }
}

async function editar(id) {

    fetch(`http://localhost:3000/orders/modify`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          //  "Autherization": `Bearer ${sessionStorage.getItem("token")}`
        },
        body: JSON.stringify({
            cantidad: document.getElementById("cantidad").value,
            fecha: document.getElementById("fecha").value,
            proveedor: document.getElementById("proveedor").value,
            nombre: document.getElementById("nombre").value,
            id: document.getElementById("id").value,
        })
    }).then((res) => {
        if (res.status == 200) {
            location.reload();

            /*
            * Aqui se va a cambiar el valor de las columnas en la tabla
            */
        }
        console.log(res)
    })
    //}
}

function editorModal(nombre, cantidad, fecha, proveedor,id) {

    /*
    * Hay que hacer que segun si editas o creas un usuario el titulo cambie
    */

    console.log(arguments)
    document.getElementById("cantidad").value = cantidad
    document.getElementById("proveedor").value = proveedor
    document.getElementById("fecha").value = fecha
    document.getElementById("nombre").value = nombre
    document.getElementById("id").value = id


    console.log(id)
    document.getElementById("modal-2-button").onclick = () => {
        editar(id)
    }

    abrirModal()

}

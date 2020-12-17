<template>
    <div id="Inventario">
        <br />
        <h2 style='text-align:center'>MÓDULO DE INVENTARIOS</h2>
        <br />
        <form>
            <div class = "formulario" >

                <div class="form-row" >
                    <div class="form-group col-md-3">                        
                        <label for="idprod">Id producto:</label>
                        <input type="text" class="form-control" id="idprod" name="idprod" value="" placeholder="Id producto"/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="catprod">Categoría:</label>
                        <input type="text" class="form-control" id="catprod" name="catprod" value="" placeholder="Carnes, Pollo, Arroces "/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="nomprod">Nombre:</label>
                        <input type="text" class="form-control" id="nomprod" name="nomprod" value="" placeholder="Nombre"/>
                    </div>
                    
                </div>
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <label for="precprod">Precio:</label>
                        <input type="text" class="form-control" id="precprod" name="precprod" value="" placeholder="$8000"/>  
                    </div>
                    <div class="form-group col-md-5">
                        <label for="cantprod">Cantidad:</label>
                        <input type="text" class="form-control" id="cantprod" name="cantprod" value="" placeholder="20"/>
                    </div>
                </div>
            </div>
            <br>
            <div class="botones">
                <div style='text-align:center'>
                        <button type="button" class="btn btn-warning" >lista de productos</button>
                        <button type="button" class="btn btn-warning" v-on:click="findProducto">Buscar</button>
                        <button type="button" class="btn btn-warning"  v-on:click="createProducto">Crear</button>
                        <!-- <button type="button" class="btn btn-warning" >Actualizar</button> -->
                        <button type="button" class="btn btn-warning" v-on:click="cleanCampos">Limpiar</button>
                        <button type="button" class="btn btn-warning" v-on:click="deleteProducto">Eliminar</button><br /><br />
                </div>
            </div>
        
        </form>

    </div>
</template>

<script>

import axios from "axios";
export default {
    name: "Inventario",
    data: function () {
        return {
            id: "",
            nombre: "",
            precio: 0,
            cantidad: 0,
            categoria: "",
        };
    },


    methods: {
        init: function () {
        if (this.$route.name != "user") {
            let username = input.idprod.getItem("current_username");
            this.$router.push({ name: "user", params: { username: username }});
        }
        },
        cleanCampos: function () {
            
            document.getElementById("idprod").value = ""
            document.getElementById("nomprod").value = ""
            document.getElementById("precprod").value = ""
            document.getElementById("cantprod").value = ""
            document.getElementById("catprod").value = ""
                                
        },

        findProducto: function () {
            this.id = document.getElementById("idprod").value
            let self = this
            axios.get("https://restaurante-back-g1.herokuapp.com/producto/consulta/" + this.id)
                .then((result) => {
                    self.id = result.data.id
                    self.nombre = result.data.nombre
                    self.precio = result.data.precio
                    self.cantidad = result.data.cantidad
                    self.categoria = result.data.categoria
                    
                    document.getElementById("idprod").value = self.id;
                    document.getElementById("nomprod").value = self.nombre;
                    document.getElementById("precprod").value = self.precio;
                    document.getElementById("cantprod").value = self.cantidad;
                    document.getElementById("catprod").value = self.categoria;                 
                })
                .catch((error) => {
                    alert("ERROR Servidor");
                });
        },
        createProducto: function () {
            this.id = document.getElementById("idprod").value
            this.nombre = document.getElementById("nomprod").value
            this.precio = document.getElementById("precprod").value
            this.cantidad = document.getElementById("cantprod").value
            this.categoria = document.getElementById("catprod").value
    
            let self = this
            
            axios.post("https://restaurante-back-g1.herokuapp.com/producto/crear/", {
                            "id": this.id,
                            "nombre": this.nombre,
                            "precio": parseInt(this.precio),
                            "cantidad": parseInt(this.cantidad),
                            "categoria": this.categoria
            })
                .then((result) => {
                    alert("Producto Creado");
                })
                .catch((error) => {
                    alert("ERROR Servidor");
                });

        },
        deleteProducto: function () {
            this.id = document.getElementById("idprod").value
            let self = this
            axios.get("https://restaurante-back-g1.herokuapp.com/producto/delete/" + this.id)
                .then((result) => {
                    self.id = ""
                    self.nombre = ""
                    self.precio = 0
                    self.cantidad = 0
                    self.categoria = ""
                    
                    document.getElementById("idprod").value = self.id;
                    document.getElementById("nomprod").value = self.nombre;
                    document.getElementById("precprod").value = self.precio;
                    document.getElementById("cantprod").value = self.cantidad;
                    document.getElementById("catprod").value = self.categoria;                 
                })
                .catch((error) => {
                    alert("ERROR Servidor");
                });
        },
    },
}
</script>

<style>
#Inventario {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center; 
    margin-bottom: 0%;
}
#Inventario h2{
    width: 100%;
    text-align: center;
    margin-top: 1%;
    color:  #fffdfd;
}
#Inventario .formulario {
    color:  #fffdfd;
    align-content: center;
    display: block;
    margin-left: 15%;
    font-weight: bold;
    margin-bottom: 1%;
}

#Inventario button {
    color:  #181818;  
}
#Inventario .btn-warning{
    background-color: #f5a018;
}
#Inventario .botones {
    color:  #181818;
    width: 100%;
    text-align: center;
    margin-top: 0%;
}

.b-table{
    overflow:auto;
    margin-left: 0%;
    background-color: #fffdfd;
}
.b-table-sticky-header, .table-responsive, [class*=table-responsive-] {
    margin-bottom: 0rem;
    text-align: center;
    margin: 5%;
} 
</style>
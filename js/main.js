(function () {
    "use strict";
    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function () {
        //Campos datos usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');
        //Campos pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_completo = document.getElementById('pase_completo');
        var pase_dosdias = document.getElementById('pase_dosdias');

        //Botones y divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var listaDeProductos = document.getElementById('listaProductos');

        //Extras
        var etiquetas = document.getElementById('etiquetas');
        var camisas = document.getElementById('camisa_evento');

        //REsultado
        var suma = document.getElementById('suma_total');

        calcular.addEventListener('click', calcularMontos);
        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);

        function validarCampos(){
            if(this.value==''){
                errorDiv.style.display="block";
                errorDiv.innerHTML="El campo es obligatorio";
                this.style.border="1px solid red";
            }else{
                errorDiv.style.display="none";
                this.style.border="1px solid #171717";
            }
        }

        function calcularMontos(event) {
            event.preventDefault();
            if (regalo.value === "") {
                alert("Elige un regalo");
            } else {
                let bolestosDias = parseInt(pase_dia.value) || 0;
                let boletosDosDias = parseInt(pase_dosdias.value) || 0;
                let paseCompleto = parseInt(pase_completo.value) || 0;
                let cantCamisas = parseInt(camisas.value) || 0;
                let cantidadEtiquetas = parseInt(etiquetas.value) || 0;

                let totalAPagar = ((bolestosDias * 30) + (boletosDosDias * 45) + (paseCompleto * 50) + ((cantCamisas * 10) * .93) + (cantidadEtiquetas * 2));
                console.log(totalAPagar);

                let listadoProductos = new Array();

                if (bolestosDias === 1) {
                    listadoProductos.push(bolestosDias + ' Pase por día');
                } else if (bolestosDias > 1) {
                    listadoProductos.push(bolestosDias + ' Pases por día');
                } else {
                    //
                }

                if (boletosDosDias === 1) {
                    listadoProductos.push(boletosDosDias + ' Pase por dos días');
                } else if (boletosDosDias > 1) {
                    listadoProductos.push(boletosDosDias + ' Pases por dos días');
                } else {
                    //
                }

                if (paseCompleto === 1) {
                    listadoProductos.push(paseCompleto + ' Pase completo');
                } else if (boletosDosDias > 1) {
                    listadoProductos.push(paseCompleto + ' Pases completos');
                } else {
                    //
                }

                if (cantCamisas === 1) {
                    listadoProductos.push(cantCamisas + ' Camisa');
                } else if (cantCamisas > 1) {
                    listadoProductos.push(cantCamisas + ' Camisas');
                } else {
                    //
                }

                if (cantidadEtiquetas === 1) {
                    listadoProductos.push(cantidadEtiquetas + ' Etiqueta');
                } else if (cantidadEtiquetas > 1) {
                    listadoProductos.push(cantidadEtiquetas + ' Etiquetas');
                } else {
                    //
                }
                listaDeProductos.style.display = 'block';
                suma.style.display = 'block';
                listaDeProductos.innerHTML = '';
                for (var i = 0; i < listadoProductos.length; i++) {
                    listaDeProductos.innerHTML += listadoProductos[i] + '</br>';
                }
                suma.innerHTML = "$ " + totalAPagar.toFixed(2);
            }

        }

        function mostrarDias() {
            let bolestosDias = parseInt(pase_dia.value) || 0;
            let boletosDosDias = parseInt(pase_dosdias.value) || 0;
            let paseCompleto = parseInt(pase_completo.value) || 0;

            let diasElegidos=new Array();

            if(bolestosDias>0){
                diasElegidos.push('viernes');
            }
            if(boletosDosDias>0){
                diasElegidos.push('viernes', 'sabado');
            }
            if(paseCompleto>0){
                diasElegidos.push('viernes', 'sabado', 'domingo');
            }
            for(var i=0; i<diasElegidos.length;i++){
                document.getElementById(diasElegidos[i]).style.display="block";
            }
        }
    });

})();

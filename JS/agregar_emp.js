var boton = document.getElementById('agregar');
var guardar = document.getElementById('guardar');
var borraar = document.getElementById('codigo_emp');
var lista = document.getElementById('lista_emp');
var data = [];
var cant = 1;
var nulo = "";
boton.addEventListener("click",agregarEmp);
guardar.addEventListener("click",save);

function agregarEmp(){
    var nombre = document.getElementById('nombre_emp').value;
    var rut = parseFloat(document.getElementById('rut_emp').value);
    var dv = document.getElementById('dv_emp').value;
    var sueldo = parseFloat(document.getElementById('sueldo_emp').value);
    var email = document.getElementById('email_emp').value;
    if (nombre == nulo){
        Swal.fire("Debe ingresar nombre");
        return
    }else if(rut == nulo){
        Swal.fire("Debe ingresar rut");
    }else if(dv == nulo){
        Swal.fire("Debe ingresar dv");
    }else if(sueldo == nulo){
        Swal.fire("Debe ingresar sueldo");
    }else if(email == nulo){
        Swal.fire("Debe ingresar email");
    }else{
        data.push({
            "id" : cant,
            "nombre" : nombre,
            "rut" : rut,
            "dv" : dv,
            "sueldo" : sueldo,
            "email" : email
            }
        );
            var col_id = 'row' + cant;
            var fila = '<tr id =' + col_id +'><td>'+cant+'</td><td>'+nombre+'</td><td>'+rut+'</td><td>'+dv+'</td><td>'+sueldo+'</td><td>'+email+
            '</td><td><a href = "#" class = "btn btn-danger" onclick= "eliminar('+cant+')";>Eliminar</a></td></tr>'
            console.log(fila);
            $('#lista_emp').append(fila);
            $('#id_emp').val('');
            $('#nombre_emp').val('');
            $('#rut_emp').val('');
            $('#dv_emp').val('');
            $('#sueldo_emp').val('');
            $('#email_emp').val('');
            $('#nombre_emp').focus();
            cant++;
    }
};
function save(){

}
function eliminar(row){
    $("#row"+row).remove();
    var i=0;
    var pos=0;
    for(x of data){
        if (x.id==row){
            pos = i;
        }
        i++;
    }
    data.splice(pos,1);
}
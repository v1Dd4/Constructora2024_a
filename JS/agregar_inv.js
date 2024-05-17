var boton = document.getElementById('agregar_prod');
var guardar = document.getElementById('guardar');
var borraar = document.getElementById('codigo_emp');
var lista = document.getElementById('lista_prod');
var data = [];
var cant = 1;
boton.addEventListener("click",agregarProd);
guardar.addEventListener("click",save);

function agregarProd(){
    var nombre_prod = document.getElementById('nombre_prod').value;
    var cantidad = parseFloat(document.getElementById('cantidad_prod').value);
    var formato_alm = document.getElementById('formato_prod').value;

    data.push({
            "id" : cant,
            "nombre" : nombre_prod,
            "cantidad" : cantidad,
            "formato" : formato_alm
            }
    );
    var col_id = 'row' + cant;
    var fila = '<tr id =' + col_id +'><td>'+cant+'</td><td>'+nombre_prod+'</td><td>'+cantidad+'</td><td>'+formato_alm+
    '</td><td><a href = "#" class = "btn btn-danger" onclick= "eliminar('+cant+')";>Eliminar</a></td></tr>'
    console.log(fila);
    $('#lista_prod').append(fila);
    $('#id_prod').val('');
    $('#nombre_prod').val('');
    $('#cantidad_prod').val('');
    $('#formato_prod').val('');
    $('#nombre_prod').focus();
    cant++;
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
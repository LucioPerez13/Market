console.log("Hola mundo")
const getAllCategoria = () => {
    //APLICAR AJAX PARA HACER PETICION AL BACKEND
    $.get("/categorias", function (data, status) {
        if (data.length > 0) {
            let table = ""
            data.map(({ id, descripcion }, i) => {
                table += (`<tr>
            <td>${id}</td>
            <td>${descripcion}</td>
            <td>
               <a href='/Categoria/Edit/${id}'>Editar</a> |
               <a href='/Categoria/Details/${id}'>Ver</a>
               <a href='/Categoria/Delete/${id}'>Eliminar</a>
            </td>
        </tr>`);
            });
            $("#tblCategoria").html(table)
        }
    });
}
//ES EXACTAMENTE LO MISMO
function GetAllCategoria() {
}
//ESPERAR A QUE CARGUEN LOS DEMAS SCRIPTS DE JQUERY
$(function () {
    getAllCategoria()
});

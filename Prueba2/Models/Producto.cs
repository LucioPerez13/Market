using System;
using System.Collections.Generic;

namespace Prueba2.Models
{
    public partial class Producto
    {
        public int Id { get; set; }
        public string Descripcion { get; set; } = null!;
        public string? Observaciones { get; set; }
        public decimal Precio { get; set; }
        public bool Estatus { get; set; }
        public int CategoriaId { get; set; }

        public virtual Categoria Categoria { get; set; } = null!;
    }
}

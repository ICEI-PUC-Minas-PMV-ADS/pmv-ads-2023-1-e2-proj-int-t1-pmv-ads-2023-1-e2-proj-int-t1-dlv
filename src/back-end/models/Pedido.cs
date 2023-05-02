using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.models
{
    [Table("pedido")]
    public class Pedido
    {
        [Column("id")]
        public int id { get; set; }
        [ForeignKey("usuario")]
        public int usuario_id { get; set; }
        [ForeignKey("endereco")]
        public int endereco_id { get; set; }
        [ForeignKey("produto")]
        public int produto_id { get; set; }
    }
}
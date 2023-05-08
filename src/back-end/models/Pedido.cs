using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace back_end.models
{
    [Table("pedido")]
    public class Pedido
    {
        [Key, Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        
        public int usuario_id { get; set; }
        public Usuario Usuario { get; set; }
        
        public int endereco_id { get; set; }
        public Endereco Endereco { get; set; }
        
        public int produto_id { get; set; }
        public Produto Produto { get; set; }
    }
}
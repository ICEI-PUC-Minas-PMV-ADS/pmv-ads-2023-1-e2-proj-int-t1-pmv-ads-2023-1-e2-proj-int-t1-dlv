using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace back_end.models
{
    [Table("produto")]
    public class Produto
    {
        [Key, Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        [Column("nome")]
        public String nome { get; set; }
        [Column("descricao")]
        public String descricao { get; set; }
        [Column("preco")]
        public float preco { get; set; }
        [Column("quantidade")]
        public int quantidade { get; set; }
        [Column("categoria")]
        public String categoria { get; set; }
        [Column("imagem")]
        public String imagem { get; set; }
        [Column("is_active")]
        public bool IsActive { get; set; }
       
        public int restaurante_id { get; set; }
        public Restaurante Restaurante { get; set; }

        public ICollection<Pedido> Pedido { get; } = new List<Pedido>();
        
    }
}
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.models
{
    [Table("restaurante")]
    public class Restaurante
    {
       [Column("id")]
        public int id { get; set; }
        [Column("nome")]
        public String nome { get; set; }
        [ForeignKey("endereco")]
        public int endereco_id { get; set; }
        [ForeignKey("restaurante_id")]
        public ICollection<Produto> Produto { get; set; }
    }
}
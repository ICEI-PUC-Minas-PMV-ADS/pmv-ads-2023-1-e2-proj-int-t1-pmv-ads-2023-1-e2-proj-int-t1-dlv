using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace back_end.models
{
    [Table("restaurante")]
    public class Restaurante
    {
        [Key, Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        [Column("nome")]
        public String nome { get; set; }
        
        public int endereco_id { get; set; }
        public Endereco Endereco { get; set; }

        public ICollection<Produto> Produto { get; } = new List<Produto>();
    }
}
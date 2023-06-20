using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.models
{
    [Table("endereco")]
    public class Endereco
    {
        [Key, Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        [Column("cep")]
        public String cep { get; set; }
        [Column("rua")]
        public String rua { get; set; }
        [Column("numero")]
        public String numero { get; set; }
        [Column("bairro")]
        public String bairro { get; set; }
        
        public ICollection<EnderecoUsuario> EnderecoUsuario { get; } = new List<EnderecoUsuario>();

        public ICollection<Restaurante> Restaurante { get; } = new List<Restaurante>();

        public ICollection<Pedido> Pedido { get; } = new List<Pedido>();

    }
}
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.models
{
    [Table("endereco")]
    public class Endereco
    {
        [Column("id")]
        public int id { get; set; }
        [Column("CEP")]
        public String CEP { get; set; }
        [Column("rua")]
        public String rua { get; set; }
        [Column("numero")]
        public String numero { get; set; }
        [Column("bairro")]
        public String bairro { get; set; }
        [ForeignKey("endereco_id")]
        public ICollection<EnderecoUsuario> EnderecoUsuario { get; set; }
        [ForeignKey("endereco_id")]
        public ICollection<Restaurante> Restaurante { get; set; }
        [ForeignKey("endereco_id")]
        public ICollection<Pedido> Pedido { get; set; }

    }
}
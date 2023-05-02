using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.models
{
    [Table("usuario")]
    public class Usuario
    {
        [Column("id")]
        public int id { get; set; }
        [Column("nome")]
        public String nome { get; set; }
        [Column("celular")]
        public String celular { get; set; }
        [Column("email")]
        public String email { get; set; }
        [ForeignKey("usuario_id")]
        public ICollection<EnderecoUsuario> EnderecoUsuario { get; set; }
        [ForeignKey("usuario_id")]
        public ICollection<Pedido> Pedido { get; set; }
    }
}
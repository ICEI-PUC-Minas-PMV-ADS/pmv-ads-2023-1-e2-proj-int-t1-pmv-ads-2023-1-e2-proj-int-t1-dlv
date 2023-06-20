using System.ComponentModel.DataAnnotations;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.models
{
    [Table("usuario")]
    public class Usuario
    {
        [Key, Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        [Column("nome")]
        public String nome { get; set; }
        [Column("celular")]
        public String celular { get; set; }
        [Column("senha")]
        public String senha { get; set; }
        [Column("email")]
        public String email { get; set; }

        [Column("role")]
        public String role { get; set; }

        public ICollection<EnderecoUsuario> EnderecoUsuario { get; } = new List<EnderecoUsuario>();

        public ICollection<Pedido> Pedido { get; } = new List<Pedido>();
    }
}
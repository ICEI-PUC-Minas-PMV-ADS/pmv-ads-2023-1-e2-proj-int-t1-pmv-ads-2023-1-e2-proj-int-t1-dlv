
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.models

{
    [Table("endereco_usuario")]
    public class EnderecoUsuario
    {
        [Column("id")]
        public int id { get; set; }
        [ForeignKey("usuario")]
        public int usuario_id { get; set; }
        [ForeignKey("endereco")]
        public int endereco_id { get; set; }
        [Column("is_active")]
        public bool IsActive { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.models

{
    [Table("endereco_usuario")]
    public class EnderecoUsuario
    {
        [Key, Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        
        public int usuario_id { get; set; }
        public Usuario Usuario { get; set; }

        public int endereco_id { get; set; }
        public Endereco Endereco { get; set; }

        [Column("is_active")]
        public bool isActive { get; set; }
    }
}
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
        [Column("categoria")]
        public String categoria { get; set; }
        [Column("observacao")]
        public String observacao { get; set; }
        [Column("metodo_pagamento")]
        public String metodo_pagamento { get; set; }
        [Column("opcao_entrega")]
        public String opcao_entrega { get; set; }
        
        public int usuario_id { get; set; }
        public Usuario Usuario { get; set; }
        
        public int endereco_id { get; set; }
        public Endereco Endereco { get; set; }
        
        public int produto_id { get; set; }
        public Produto Produto { get; set; }

        public Pedido(string categoria, string observacao, string metodo_pagamento, string opcao_entrega, int usuario_id, int endereco_id, int produto_id){
            this.categoria = categoria;
            this.observacao = observacao;
            this.metodo_pagamento = metodo_pagamento;
            this.opcao_entrega = opcao_entrega;
            this.usuario_id = usuario_id;
            this.endereco_id = endereco_id;
            this.produto_id = produto_id;
        }
    }
}
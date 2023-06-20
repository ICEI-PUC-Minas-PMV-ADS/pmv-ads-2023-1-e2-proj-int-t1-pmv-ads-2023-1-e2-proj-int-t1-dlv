using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTO
{
    public class PedidoDTO
    {
        public String categoria { get; set; }
        public String observacao { get; set; }
        public String metodo_pagamento { get; set; }
        public String opcao_entrega { get; set; }
        
        public int usuario_id { get; set; }
        
        public int produto_id { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back_end.DTO;
using back_end.models;
using Microsoft.EntityFrameworkCore;

namespace back_end.Repository
{
    public class PedidoRepository : IPedidoRepository
    {
        private readonly Contexto context;

        public PedidoRepository(Contexto context)
        {
            this.context = context;
        }
        public void createPedido(PedidoDTO pedidoDTO)
        {
        int endereco_id = context
            .Enderecos
            .FromSql($"SELECT endereco.id, endereco.cep, endereco.rua, endereco.numero, endereco.bairro FROM endereco_usuario JOIN endereco ON endereco.id = endereco_usuario.endereco_id WHERE endereco_usuario.id = {pedidoDTO.usuario_id} and endereco_usuario.is_active = true")
            .ToList()[0].id;
        context.Pedidos.Add(new Pedido(pedidoDTO.categoria, pedidoDTO.observacao, pedidoDTO.metodo_pagamento, pedidoDTO.opcao_entrega, pedidoDTO.usuario_id, endereco_id, pedidoDTO.produto_id));
        }

         public async Task<bool> SaveChangesAsync()
        {
            return await context.SaveChangesAsync() > 0;
        }

    }
}
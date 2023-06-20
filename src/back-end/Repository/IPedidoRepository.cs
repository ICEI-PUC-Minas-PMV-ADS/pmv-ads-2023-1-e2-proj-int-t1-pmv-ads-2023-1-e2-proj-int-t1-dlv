using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back_end.DTO;
using back_end.models;

namespace back_end.Repository
{
    public interface IPedidoRepository
    {
        void createPedido(PedidoDTO pedido);

        Task<bool> SaveChangesAsync();
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back_end.DTO;
using back_end.models;
using back_end.Repository;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class PedidoController : ControllerBase
    {
        private readonly IPedidoRepository repository;

        public PedidoController(IPedidoRepository repository)
        {
            this.repository = repository;
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync(PedidoDTO pedido)
        {
            repository.createPedido(pedido);
            return await repository.SaveChangesAsync() ? Ok("Success") : BadRequest("Fail");
        }
    }
}
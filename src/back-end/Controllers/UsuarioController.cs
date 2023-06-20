using back_end.DTO;
using back_end.models;
using back_end.Repository;
using back_end.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepository repository;

        public UsuarioController(IUsuarioRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            return Ok(await repository.buscaUsuarios());
        }
        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> GetAsync(int id)
        {
            return Ok(await repository.buscaUsuario(id));
        }
        [HttpPost]
        public async Task<ActionResult<dynamic>> PostAsync(UsuarioDTO req)
        {
            var usuario = req.usuario;
            var endereco = req.endereco;
            repository.adicionaUsuario(usuario, endereco);
            var token = TokenService.GenerateToken(usuario);
            return await repository.SaveChangesAsync() ? new { user = new { usuario.nome, usuario.email }, token } : BadRequest("Fail");
        }
        [HttpPut]
        public async Task<IActionResult> PutAsync(Usuario usuario)
        {
            repository.updateUsuario(usuario);
            return await repository.SaveChangesAsync() ? Ok("Success") : BadRequest("Fail");
        }
        [HttpDelete]
        public async Task<IActionResult> DeleteAsync(Usuario usuario)
        {
            repository.deleteUsuario(usuario);
            return await repository.SaveChangesAsync() ? Ok("Success") : BadRequest("Fail");
        }

       

    }
}
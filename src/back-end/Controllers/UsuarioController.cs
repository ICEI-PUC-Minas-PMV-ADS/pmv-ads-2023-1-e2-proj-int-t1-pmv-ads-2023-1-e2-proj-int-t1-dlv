using back_end.models;
using back_end.Repository;
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
        public async Task<IActionResult> GetAsync(int id)
        {
            return Ok(await repository.buscaUsuario(id));
        }
        [HttpPost]
        public async Task<IActionResult> PostAsync(Usuario usuario)
        {
            repository.adicionaUsuario(usuario);
            return await repository.SaveChangesAsync() ? Ok("Success") : BadRequest("Fail");
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
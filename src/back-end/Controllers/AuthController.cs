using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back_end.models;
using back_end.Repository;
using back_end.Services;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepository;

        public AuthController(IAuthRepository authRepository)
        {
            this._authRepository = authRepository;
        }

        [HttpPost]
        public ActionResult<dynamic> Login(LoginModel loginModel)
        {
            try
            {
                var usuario = _authRepository.login(loginModel.senha, loginModel.email);
                var token = TokenService.GenerateToken(usuario);
                return new { user = new {
                    usuario.nome,
                    usuario.email
                }, token};
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
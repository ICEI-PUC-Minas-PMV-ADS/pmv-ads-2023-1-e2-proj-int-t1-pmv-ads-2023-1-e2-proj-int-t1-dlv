using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using back_end.models;
using back_end.Services;

namespace back_end.Repository
{
    public class AuthRepository : IAuthRepository
    {
        private readonly Contexto context;
        private readonly HashService _hashService = new HashService(SHA512.Create());

         public AuthRepository(Contexto context)
        {
            this.context = context;
        }
        
        public Usuario login(string senha, string email)
        {
            Usuario usuario = context.Usuarios.Where(x => x.email == email).First<Usuario>();
            if (usuario == null)
            {
                throw new Exception("Usuário não encontrado");
            }
            if (_hashService.VerificarSenha(senha, usuario.senha) && usuario.email == email)
            {
                return usuario;
            }
            throw new Exception("Senha ou email incorretos");
        }

    }
}
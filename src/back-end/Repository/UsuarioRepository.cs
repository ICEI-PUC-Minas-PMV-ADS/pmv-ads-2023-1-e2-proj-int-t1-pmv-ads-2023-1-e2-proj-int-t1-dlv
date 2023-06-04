using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using back_end.models;
using back_end.Services;

namespace back_end.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly Contexto context;
        private readonly HashService _hashService = new HashService(SHA512.Create());


        public UsuarioRepository(Contexto context)
        {
            this.context = context;
        }
        public void adicionaUsuario(Usuario usuario)
        {
           String senhaCadastrada = _hashService.CriptografarSenha(usuario.senha);
           usuario.senha = senhaCadastrada;

           context.Usuarios.Add(usuario);
        }

        public Task<IEnumerable<Usuario>> buscaUsuario(int id)
        {
            return Task.FromResult(context.Usuarios.Where(x => x.id == id).AsEnumerable());
        }

        public Task<IEnumerable<Usuario>> buscaUsuarios()
        {
            return Task.FromResult(context.Usuarios.AsEnumerable());
        }

        public void deleteUsuario(Usuario usuario)
        {
            context.Usuarios.Remove(usuario);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return await context.SaveChangesAsync() > 0;
        }

        public void updateUsuario(Usuario usuario)
        {
            context.Usuarios.Update(usuario);
        }
    }
}
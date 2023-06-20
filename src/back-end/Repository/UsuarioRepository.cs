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
        public async void adicionaUsuario(Usuario usuario, Endereco endereco)
        {
           String senhaCadastrada = _hashService.CriptografarSenha(usuario.senha);
           usuario.senha = senhaCadastrada;
           usuario.role = "user";

           
           var ende = context.Enderecos.Add(endereco);
           var user = context.Usuarios.Add(usuario);
           using var transaction = context.Database.BeginTransaction();
              await context.SaveChangesAsync();
            transaction.Commit();
           
           EnderecoUsuario enderecoUsuario = new EnderecoUsuario(user.Entity.id, ende.Entity.id);
           context.EnderecoUsuarios.Add(enderecoUsuario);
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
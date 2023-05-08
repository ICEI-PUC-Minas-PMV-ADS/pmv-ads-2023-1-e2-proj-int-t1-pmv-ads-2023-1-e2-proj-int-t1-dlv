
using back_end.models;

namespace back_end.Repository
{
    public interface IUsuarioRepository
    {
        Task<IEnumerable<Usuario>> buscaUsuario(int id);
        Task<IEnumerable<Usuario>> buscaUsuarios();

        void adicionaUsuario(Usuario usuario);

        void updateUsuario(Usuario usuario);

        void deleteUsuario(Usuario usuario);

        Task<bool> SaveChangesAsync();
    }
}
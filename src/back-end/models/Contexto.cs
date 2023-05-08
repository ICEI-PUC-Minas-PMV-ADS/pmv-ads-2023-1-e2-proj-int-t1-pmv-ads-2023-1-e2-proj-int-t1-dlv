using Microsoft.EntityFrameworkCore;

namespace back_end.models
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options) { 

        }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Endereco> Enderecos { get; set; }
        public DbSet<EnderecoUsuario> EnderecoUsuarios { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Restaurante> Restaurantes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Usuario>()
            .HasMany(c => c.EnderecoUsuario)
            .WithOne(e => e.Usuario)
            .HasForeignKey(e => e.usuario_id)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

            modelBuilder.Entity<Endereco>()
            .HasMany(c => c.EnderecoUsuario)
            .WithOne(e => e.Endereco)
            .HasForeignKey(e => e.endereco_id)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

            modelBuilder.Entity<Endereco>()
            .HasMany(c => c.Restaurante)
            .WithOne(e => e.Endereco)
            .HasForeignKey(e => e.endereco_id)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

            modelBuilder.Entity<Endereco>()
            .HasMany(c => c.Pedido)
            .WithOne(e => e.Endereco)
            .HasForeignKey(e => e.endereco_id)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

            modelBuilder.Entity<Usuario>()
            .HasMany(c => c.Pedido)
            .WithOne(e => e.Usuario)
            .HasForeignKey(e => e.usuario_id)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired(false);

            modelBuilder.Entity<Produto>()
            .HasMany(c => c.Pedido)
            .WithOne(e => e.Produto)
            .HasForeignKey(e => e.produto_id)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

            modelBuilder.Entity<Restaurante>()
            .HasMany(c => c.Produto)
            .WithOne(e => e.Restaurante)
            .HasForeignKey(e => e.restaurante_id)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

            modelBuilder.Entity<EnderecoUsuario>()
            .Property(e => e.isActive)
            .HasDefaultValue(true);
        }
    }
}
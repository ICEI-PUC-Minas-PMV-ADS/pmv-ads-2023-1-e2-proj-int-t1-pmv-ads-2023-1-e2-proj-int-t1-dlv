﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using back_end.models;

#nullable disable

namespace back_end.Migrations
{
    [DbContext(typeof(Contexto))]
    [Migration("20230618000204_SixUpdate")]
    partial class SixUpdate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0-preview.5.23280.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("back_end.models.Endereco", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("bairro")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("bairro");

                    b.Property<string>("cep")
                        .HasColumnType("text")
                        .HasColumnName("cep");

                    b.Property<string>("numero")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("numero");

                    b.Property<string>("rua")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("rua");

                    b.HasKey("id");

                    b.ToTable("endereco");
                });

            modelBuilder.Entity("back_end.models.EnderecoUsuario", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("endereco_id")
                        .HasColumnType("integer");

                    b.Property<bool>("isActive")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("boolean")
                        .HasDefaultValue(true)
                        .HasColumnName("is_active");

                    b.Property<int>("usuario_id")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("endereco_id");

                    b.HasIndex("usuario_id");

                    b.ToTable("endereco_usuario");
                });

            modelBuilder.Entity("back_end.models.Pedido", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("categoria")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("categoria");

                    b.Property<int>("endereco_id")
                        .HasColumnType("integer");

                    b.Property<string>("metodo_pagamento")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("metodo_pagamento");

                    b.Property<string>("observacao")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("observacao");

                    b.Property<string>("opcao_entrega")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("opcao_entrega");

                    b.Property<int>("produto_id")
                        .HasColumnType("integer");

                    b.Property<int>("usuario_id")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("endereco_id");

                    b.HasIndex("produto_id");

                    b.HasIndex("usuario_id");

                    b.ToTable("pedido");
                });

            modelBuilder.Entity("back_end.models.Produto", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<bool>("IsActive")
                        .HasColumnType("boolean")
                        .HasColumnName("is_active");

                    b.Property<string>("categoria")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("categoria");

                    b.Property<string>("descricao")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("descricao");

                    b.Property<string>("imagem")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("imagem");

                    b.Property<string>("nome")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("nome");

                    b.Property<float>("preco")
                        .HasColumnType("real")
                        .HasColumnName("preco");

                    b.Property<int>("quantidade")
                        .HasColumnType("integer")
                        .HasColumnName("quantidade");

                    b.Property<int>("restaurante_id")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("restaurante_id");

                    b.ToTable("produto");
                });

            modelBuilder.Entity("back_end.models.Restaurante", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("endereco_id")
                        .HasColumnType("integer");

                    b.Property<string>("nome")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("nome");

                    b.HasKey("id");

                    b.HasIndex("endereco_id");

                    b.ToTable("restaurante");
                });

            modelBuilder.Entity("back_end.models.Usuario", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("celular")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("celular");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("email");

                    b.Property<string>("nome")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("nome");

                    b.Property<string>("role")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("role");

                    b.Property<string>("senha")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("senha");

                    b.HasKey("id");

                    b.ToTable("usuario");
                });

            modelBuilder.Entity("back_end.models.EnderecoUsuario", b =>
                {
                    b.HasOne("back_end.models.Endereco", "Endereco")
                        .WithMany("EnderecoUsuario")
                        .HasForeignKey("endereco_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("back_end.models.Usuario", "Usuario")
                        .WithMany("EnderecoUsuario")
                        .HasForeignKey("usuario_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Endereco");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("back_end.models.Pedido", b =>
                {
                    b.HasOne("back_end.models.Endereco", "Endereco")
                        .WithMany("Pedido")
                        .HasForeignKey("endereco_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("back_end.models.Produto", "Produto")
                        .WithMany("Pedido")
                        .HasForeignKey("produto_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("back_end.models.Usuario", "Usuario")
                        .WithMany("Pedido")
                        .HasForeignKey("usuario_id")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.Navigation("Endereco");

                    b.Navigation("Produto");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("back_end.models.Produto", b =>
                {
                    b.HasOne("back_end.models.Restaurante", "Restaurante")
                        .WithMany("Produto")
                        .HasForeignKey("restaurante_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Restaurante");
                });

            modelBuilder.Entity("back_end.models.Restaurante", b =>
                {
                    b.HasOne("back_end.models.Endereco", "Endereco")
                        .WithMany("Restaurante")
                        .HasForeignKey("endereco_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Endereco");
                });

            modelBuilder.Entity("back_end.models.Endereco", b =>
                {
                    b.Navigation("EnderecoUsuario");

                    b.Navigation("Pedido");

                    b.Navigation("Restaurante");
                });

            modelBuilder.Entity("back_end.models.Produto", b =>
                {
                    b.Navigation("Pedido");
                });

            modelBuilder.Entity("back_end.models.Restaurante", b =>
                {
                    b.Navigation("Produto");
                });

            modelBuilder.Entity("back_end.models.Usuario", b =>
                {
                    b.Navigation("EnderecoUsuario");

                    b.Navigation("Pedido");
                });
#pragma warning restore 612, 618
        }
    }
}

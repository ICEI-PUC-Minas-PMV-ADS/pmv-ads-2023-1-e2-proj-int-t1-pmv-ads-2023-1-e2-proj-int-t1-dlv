using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back_end.models;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;
using System.Data;


namespace back_end.Repository
{
    public class ProdutoRepository : IProdutoRepository
    {
        private readonly Contexto context;

        public ProdutoRepository(Contexto context)
        {
            this.context = context;
        }

        public List<Produto> pesquisaProduto(string nome) {
            List<Produto>produtos  = context.Produtos.FromSqlRaw("SELECT * FROM produto WHERE nome LIKE {0}", "%" + nome + "%")
            .ToList();
            return produtos;
        }

    }
}
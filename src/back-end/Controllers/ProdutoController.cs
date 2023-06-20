using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using back_end.models;
using back_end.Repository;

namespace back_end.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class ProdutoController
    {

        private readonly IProdutoRepository repository;

        public ProdutoController(IProdutoRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public List<Produto> buscaProdutos(string nome)
        {
            Console.WriteLine("Console ------>" + nome);
            return repository.pesquisaProduto(nome);
        }
        
    }
}
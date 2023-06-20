using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back_end.models;

namespace back_end.DTO
{
    public class UsuarioDTO
    {
        public Usuario usuario { get; set; }
        public Endereco endereco { get; set; }
    }
}
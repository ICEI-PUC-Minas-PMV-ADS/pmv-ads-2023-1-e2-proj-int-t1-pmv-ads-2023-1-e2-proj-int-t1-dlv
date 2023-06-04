using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back_end.models;

namespace back_end.Repository
{
    public interface IAuthRepository
    {
        Usuario login(string nome, string senha, string email);
    }
}
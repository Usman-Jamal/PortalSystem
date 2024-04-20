using DomainEntities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainEntities.Interfaces
{
    public interface IUserLoginRepository
    {
        Users UserLogin(string email, string password);
    }
}

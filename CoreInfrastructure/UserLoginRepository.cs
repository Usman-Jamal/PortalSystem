using DomainEntities.Entities;
using DomainEntities.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreInfrastructure
{
    internal class UserLoginRepository : IUserLoginRepository
    {
        public bool UserLogin(string email, string password)
        {
            using (PortalSystemContext portalSystemContext = new PortalSystemContext())
            {
                var existingUser = portalSystemContext.Users.FirstOrDefault(x => x.Email == email);
                if (existingUser != null) 
                {
                    if (existingUser.Email == email && existingUser.Password == password) 
                    { 
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    Console.WriteLine("Invalid User");
                    return false;
                }
            }
        }
    }
}

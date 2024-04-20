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
        public Users UserLogin(string email, string password)
        {
            using (PortalSystemContext portalSystemContext = new PortalSystemContext())
            {
                var existingUser = portalSystemContext.Users.FirstOrDefault(x => x.Email == email && x.Password == password);
                if (existingUser != null) 
                {
                    return existingUser;
                }
                else
                {
                    return null;
                }
            }
        }
    }
}

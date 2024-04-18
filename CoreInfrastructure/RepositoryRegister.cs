using DomainEntities.Entities;
using DomainEntities.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreInfrastructure
{
    public static class RepositoryRegister
    {
        public static void RegisterRepositories (this IServiceCollection services)
        {
            services.AddScoped<IEntityRepository<Users>, UsersRepository>();
            services.AddScoped<IEntityRepository<Classes>, ClassesRepository>();
            services.AddScoped<IUserEnrollmentsRepository, UserEnrollmentsRepository>();
            services.AddScoped<IUserLoginRepository, UserLoginRepository>();
        }
    }
}

using DomainEntities.Entities;
using Microsoft.EntityFrameworkCore;

namespace CoreInfrastructure
{
    public class PortalSystemContext : DbContext
    {
        public DbSet<Users> Users { get; set; }
        public DbSet<Classes> Classes { get; set; }
        public DbSet<UserEnrollments> UserEnrollments { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=tcp:portalsystemserver.database.windows.net,1433;Initial Catalog=PortalSystem;Persist Security Info=False;User ID=usman;Password={12abcd34A};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
        }
    }
}

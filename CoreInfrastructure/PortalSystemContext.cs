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
            optionsBuilder.UseSqlServer("Server=DESKTOP-RF6SK1O\\SQLEXPRESS;Database=PortalSystem;TrustServerCertificate=true;Trusted_Connection=True;");
        }
    }
}

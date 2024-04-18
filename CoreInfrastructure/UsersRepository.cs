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
    internal class UsersRepository : EntityRepository<Users>, IEntityRepository<Users>
    {
        protected override DbSet<Users> GetEntities(PortalSystemContext context)
        {
            return context.Users;
        }
        public override List<Users> GetAll()
        {
            using (PortalSystemContext context = new PortalSystemContext())
            {
                return context.Users.Where(x => x.UserType.ToLower() == "student").ToList();
            }
        }
        public override void Add(Users users)
        {
            using (PortalSystemContext context = new PortalSystemContext())
            {
                var uniqueEmail = context.Users.FirstOrDefault(x => x.Email == users.Email);
                if (uniqueEmail != null)
                {
                    Console.WriteLine("Email Already Exist");
                }
                else
                {
                    Users updatedUser = new Users
                    {
                        Email = users.Email,
                        Password = users.Password,
                        Name = users.Name,
                        Address = users.Address,
                        Contact = users.Contact,
                        Gender = users.Gender,
                        UserType = "Student",
                    };
                    context.Users.Add(updatedUser);
                    context.SaveChanges();
                }
            }
        }
        public override void Delete(int user_id)
        {
            using (PortalSystemContext context = new PortalSystemContext())
            {
                var userEnrollmentEntities = context.UserEnrollments.Where(x => x.User_Id == user_id).ToList();
                foreach (var userEnrollment in userEnrollmentEntities)
                {
                    context.UserEnrollments.Remove(userEnrollment);
                }
                var userEntities = context.Users.Where(x => x.Id == user_id).ToList();
                foreach (var user in userEntities)
                {
                    context.Users.Remove(user);
                }
                context.SaveChanges();
            }
        }
    }
}

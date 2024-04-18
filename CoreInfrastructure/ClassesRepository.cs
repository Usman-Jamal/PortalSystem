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
    internal class ClassesRepository : EntityRepository<Classes>, IEntityRepository<Classes>
    {
        protected override DbSet<Classes> GetEntities(PortalSystemContext context)
        {
            return context.Classes;
        }
        public override List<Classes> GetAll()
        {
            using (PortalSystemContext context = new PortalSystemContext())
            {
                return context.Classes.ToList();
            }
        }
        public override void Add(Classes classes)
        {
            using (PortalSystemContext context = new PortalSystemContext())
            {
                var existingClass = context.Classes.FirstOrDefault(x => x.GradeLevel == classes.GradeLevel);
                if (existingClass == null)
                {
                    context.Classes.Add(classes);
                    context.SaveChanges();
                }
                else
                {
                    Console.WriteLine("Class Already Exist");
                }
            }
        }
        public override void Delete(int class_id)
        {
            using (PortalSystemContext context = new PortalSystemContext())
            {
                var userEnrollmentEntities = context.UserEnrollments.Where(x => x.Class_Id == class_id).ToList();
                foreach (var userEnrollment in userEnrollmentEntities)
                {
                    context.UserEnrollments.Remove(userEnrollment);
                    context.SaveChanges();
                }
                var classEntities = context.Classes.Where(x => x.Id == class_id).ToList();
                foreach (var entity in classEntities)
                {
                    context.Classes.Remove(entity);
                    context.SaveChanges();
                }
            }
        }
    }
}

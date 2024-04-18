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
    internal class UserEnrollmentsRepository : IUserEnrollmentsRepository
    {
        public void EnrollUser(UserEnrollments userEnrollments)
        {
            using (PortalSystemContext portalSystemContext = new PortalSystemContext())
            {
                var existingEntry = portalSystemContext.UserEnrollments.FirstOrDefault(x => x.User_Id == userEnrollments.User_Id && x.Class_Id == userEnrollments.Class_Id);
                DateTime currentDateTime = DateTime.Now;
                string formattedDateTime = currentDateTime.ToString("yyyy-MM-dd HH:mm:ss");
                if (existingEntry != null) 
                {
                    existingEntry.EnrolledStatus = "Enrolled";
                    existingEntry.EnrolledDate = formattedDateTime;
                    portalSystemContext.Entry(existingEntry).State = EntityState.Modified;
                    portalSystemContext.SaveChanges();
                }
                else
                {
                    UserEnrollments updateduserEnrollments = new UserEnrollments
                    {
                        EnrolledStatus = "Enrolled",
                        EnrolledDate = formattedDateTime,
                        User_Id = userEnrollments.User_Id,
                        Class_Id = userEnrollments.Class_Id,
                    };
                    portalSystemContext.Add(updateduserEnrollments);
                    portalSystemContext.SaveChanges();
                }
            }
        }
        public void DeleteEnrollment(int user_id, int class_id)
        {
            using (PortalSystemContext portalSystemContext = new PortalSystemContext())
            {
                var existingEntry = portalSystemContext.UserEnrollments.FirstOrDefault(x => x.User_Id == user_id && x.Class_Id == class_id);
                if (existingEntry != null) 
                {
                    portalSystemContext.Remove(existingEntry);
                    portalSystemContext.SaveChanges();
                }
                else
                {
                    Console.WriteLine("Invalid Operation");
                }
            }
        }
        public List<Users> GetUserByClassId(int class_id)
        {
            using (PortalSystemContext portalSystemContext = new PortalSystemContext())
            {
                var userList = portalSystemContext.UserEnrollments.Where(x => x.Class_Id == class_id)
                    .Join(portalSystemContext.Users, ue => ue.User_Id, u => u.Id,(ue, u) => u).ToList();
                return userList;
            }
        }

    }
}

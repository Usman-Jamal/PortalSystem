using DomainEntities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainEntities.Interfaces
{
    public interface IUserEnrollmentsRepository
    {
        List<Users> GetUserByClassId (int class_id);
        void EnrollUser(UserEnrollments userEnrollments);
        void DeleteEnrollment(int user_id, int class_id);
        string isUserEnrolled(int user_id, int class_id);
    }
}

using DomainEntities.Entities;
using DomainEntities.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserEnrollmentController : ControllerBase
    {
        private readonly IUserEnrollmentsRepository _repository;

        public UserEnrollmentController(IUserEnrollmentsRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public List<Users> GetUserByClassId(int class_id)
        {
            return _repository.GetUserByClassId(class_id);
        }

        [HttpPost]
        public void EnrollUser(UserEnrollments userEnrollments)
        {
            _repository.EnrollUser(userEnrollments);
        }

        [HttpDelete]
        public void DeleteEnrollment(int user_id, int class_id)
        {
            _repository.DeleteEnrollment(user_id, class_id);
        }
    }
}
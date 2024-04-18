using DomainEntities.Entities;
using DomainEntities.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserLoginController : ControllerBase
    {
        private readonly IUserLoginRepository _repository;

        public UserLoginController(IUserLoginRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public bool UserLogin(string email, string password)
        {
            return _repository.UserLogin(email, password);
        }
    }
}

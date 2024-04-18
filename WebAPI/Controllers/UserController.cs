using DomainEntities.Entities;
using DomainEntities.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IEntityRepository<Users> _repository;

        public UserController(IEntityRepository<Users> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Users> GetAll()
        {
            return _repository.GetAll();
        }

        [HttpPost]
        public void Add(Users users)
        {
            _repository.Add(users);
        }

        [HttpPut]
        public void Update(Users users)
        {
            _repository.Update(users);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _repository.Delete(id);
        }
    }
}

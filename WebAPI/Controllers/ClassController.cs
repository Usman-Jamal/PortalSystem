using DomainEntities.Entities;
using DomainEntities.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClassController : ControllerBase
    {
        private readonly IEntityRepository<Classes> _repository;

        public ClassController(IEntityRepository<Classes> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Classes> GetAll()
        {
            return _repository.GetAll();
        }

        [HttpPost]
        public void Add(Classes classes)
        {
            _repository.Add(classes);
        }

        [HttpPut]
        public void Update(Classes classes)
        {
            _repository.Update(classes);
        }

        [HttpDelete ("{id}")]
        public void Delete(int id)
        {
            _repository.Delete(id);
        }
    }
}

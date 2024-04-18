using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainEntities.Interfaces
{
    public interface IEntityRepository<TEntity> where TEntity : IDomainEntity
    {
        List<TEntity> GetAll();
        void Add(TEntity entity);
        void Delete(int id);
        void Update(TEntity entity);
    }
}

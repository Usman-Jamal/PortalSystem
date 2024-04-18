using DomainEntities.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreInfrastructure
{
    internal abstract class EntityRepository<TEntity> : IEntityRepository<TEntity> where TEntity : class, IDomainEntity
    {
        protected abstract DbSet<TEntity> GetEntities(PortalSystemContext context);

        public abstract List<TEntity> GetAll();
        public abstract void Add(TEntity entity);
        public abstract void Delete(int id);

        public void Update(TEntity entity)
        {
            using (PortalSystemContext context = new PortalSystemContext())
            {
                context.Entry(entity).State = EntityState.Modified;
                context.SaveChanges();
            }
        }
    }
}

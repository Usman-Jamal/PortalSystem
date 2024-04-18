using DomainEntities.Interfaces;

namespace DomainEntities.Entities
{
    public class Classes : IDomainEntity
    {
        public int Id { get; set; }
        public string GradeLevel { get; set; }
        public string Timings { get; set; }
        public int MaxClassSize { get; set; }
    }
}

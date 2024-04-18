using DomainEntities.Interfaces;

namespace DomainEntities.Entities
{
    public class Users : IDomainEntity
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Contact { get; set; }
        public string Gender { get; set; }
        public string UserType { get; set; }
    }
}

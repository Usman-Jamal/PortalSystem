using DomainEntities.Interfaces;

namespace DomainEntities.Entities
{
    public class UserEnrollments : IDomainEntity
    {
        public int Id { get; set; }
        public string EnrolledStatus { get; set; }
        public string EnrolledDate { get; set; }
        public int User_Id { get; set; }
        public int Class_Id { get; set; }
    }
}

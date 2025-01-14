using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace SAV_Backend_PR.Models
{
    // Inherit from IdentityDbContext<AppUser> to manage Identity-related data
    public class PieceDetailContext : IdentityDbContext
    {
        public PieceDetailContext(DbContextOptions<PieceDetailContext> options) : base(options)
        {
        }

        // Define DbSets for your entities
        public DbSet<PieceDetail> PieceDetails { get; set; }
        public DbSet<AppUser> appUsers { get; set; }
    }
}

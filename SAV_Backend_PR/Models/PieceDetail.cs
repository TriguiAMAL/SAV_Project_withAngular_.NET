using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SAV_Backend_PR.Models
{
    public class PieceDetail
    {
        [Key]
        public int PieceId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public String IntitulePiece { get; set; } = "";

        [Column(TypeName = "int")]
        public int Quantite { get; set; }



    }
}

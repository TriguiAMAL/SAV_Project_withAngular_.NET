using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SAV_Backend_PR.Migrations
{
    /// <inheritdoc />
    public partial class savProject_Migration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PieceDetails",
                columns: table => new
                {
                    PieceId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IntitulePiece = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Quantite = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PieceDetails", x => x.PieceId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PieceDetails");
        }
    }
}

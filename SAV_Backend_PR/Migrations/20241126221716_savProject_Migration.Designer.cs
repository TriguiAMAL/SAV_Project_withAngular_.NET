﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SAV_Backend_PR.Models;

#nullable disable

namespace SAV_Backend_PR.Migrations
{
    [DbContext(typeof(PieceDetailContext))]
    [Migration("20241126221716_savProject_Migration")]
    partial class savProject_Migration
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("SAV_Backend_PR.Models.PieceDetail", b =>
                {
                    b.Property<int>("PieceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PieceId"));

                    b.Property<string>("IntitulePiece")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("Quantite")
                        .HasColumnType("int");

                    b.HasKey("PieceId");

                    b.ToTable("PieceDetails");
                });
#pragma warning restore 612, 618
        }
    }
}

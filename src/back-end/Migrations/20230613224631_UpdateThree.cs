using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_end.Migrations
{
    /// <inheritdoc />
    public partial class UpdateThree : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "role",
                table: "usuario",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "categoria",
                table: "pedido",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "metodo_pagamento",
                table: "pedido",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "observacao",
                table: "pedido",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "opcao_entrega",
                table: "pedido",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "role",
                table: "usuario");

            migrationBuilder.DropColumn(
                name: "categoria",
                table: "pedido");

            migrationBuilder.DropColumn(
                name: "metodo_pagamento",
                table: "pedido");

            migrationBuilder.DropColumn(
                name: "observacao",
                table: "pedido");

            migrationBuilder.DropColumn(
                name: "opcao_entrega",
                table: "pedido");
        }
    }
}

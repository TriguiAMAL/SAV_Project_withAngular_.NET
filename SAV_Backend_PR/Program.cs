using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SAV_Backend_PR.Models;
using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//tebaa amal
builder.Services
    .AddIdentity<AppUser, IdentityRole>()
    .AddEntityFrameworkStores<PieceDetailContext>()
    .AddDefaultTokenProviders();

builder.Services.Configure<IdentityOptions>(options =>
{
    options.Password.RequireDigit = false;
    options.Password.RequireUppercase = false;
    options.Password.RequireLowercase = false;
    options.User.RequireUniqueEmail = true;
});

builder.Services.AddDbContext<PieceDetailContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options =>
options.WithOrigins("http://localhost:4200")
.AllowAnyMethod()
.AllowAnyHeader());


app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

#region API Endpoints

// Registration Endpoint
app.MapPost("/api/signup", async (
    UserManager<AppUser> userManager,
    [FromBody] UserRegistrationModel userRegistrationModel
    ) =>
{
AppUser user = new AppUser()
{
UserName = userRegistrationModel.Email,
Email = userRegistrationModel.Email,
FullName = userRegistrationModel.FullName,
};
var result = await userManager.CreateAsync(
    user,
    userRegistrationModel.Password);

if (result.Succeeded)
return Results.Ok(result);
else
return Results.BadRequest(result);
});

// Login Endpoint
app.MapPost("/api/login", async (
    SignInManager<AppUser> signInManager,
    [FromBody] UserLoginModel userLoginModel
    ) =>
{
var result = await signInManager.PasswordSignInAsync(
    userLoginModel.Email,
    userLoginModel.Password,
    isPersistent: false,
    lockoutOnFailure: false);

if (result.Succeeded)
{
return Results.Ok(new { Message = "Login successful", Email = userLoginModel.Email });
}
else
{
return Results.BadRequest(new { Message = "Invalid email or password" });
}
});

#endregion

app.Run();

// Models
public class UserRegistrationModel
{
    public string Email { get; set; }
    public string Password { get; set; }
    public string FullName { get; set; }
}

public class UserLoginModel
{
    public string Email { get; set; }
    public string Password { get; set; }
}

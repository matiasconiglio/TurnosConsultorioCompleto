using Microsoft.OpenApi.Models;
using TurnosConsultorioAPI.Config;
using TurnosConsultorioAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Cargar configuración de MongoDB
builder.Services.Configure<MongoDBSettings>(
    builder.Configuration.GetSection("MongoDBSettings")
);

// Agregar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost",
        policy => policy.WithOrigins("http://localhost:3000")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

// Agregar servicios de aplicación
builder.Services.AddSingleton<PacienteService>();
builder.Services.AddSingleton<TurnoService>();

// Configurar controladores
builder.Services.AddControllers();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Turnos API", Version = "v1" });
});

// ⚠️ SOLO UNA VEZ ESTA LÍNEA
var app = builder.Build();

app.UseCors("AllowLocalhost");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace TurnosConsultorioAPI.Models
{
    public class Paciente
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        [BsonElement("Nombre")]
        [Required]
        public string Nombre { get; set; } = string.Empty;

        [BsonElement("Apellido")]
        [Required]
        public string Apellido { get; set; } = string.Empty;

        [BsonElement("DNI")]
        [Required]
        public string DNI { get; set; } = string.Empty;
    }
}

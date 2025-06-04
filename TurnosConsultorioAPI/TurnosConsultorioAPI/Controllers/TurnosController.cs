using Microsoft.AspNetCore.Mvc;
using TurnosConsultorioAPI.Models;
using TurnosConsultorioAPI.Services;

namespace TurnosConsultorioAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TurnosController : ControllerBase
    {
        private readonly TurnoService _service;

        public TurnosController(TurnoService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<List<Turno>> Get() => _service.Get();

        [HttpGet("{id}")]
        public ActionResult<Turno> Get(string id)
        {
            var turno = _service.Get(id);
            if (turno == null) return NotFound();
            return turno;
        }

        [HttpPost]
        public IActionResult Post(Turno turno)
        {
            _service.Create(turno);
            return CreatedAtAction(nameof(Get), new { id = turno.Id }, turno);
        }

        [HttpPut("{id}")]
        public IActionResult Put(string id, Turno turno)
        {
            var existing = _service.Get(id);
            if (existing == null) return NotFound();

            _service.Update(id, turno);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var existing = _service.Get(id);
            if (existing == null) return NotFound();

            _service.Delete(id);
            return NoContent();
        }
    }
}

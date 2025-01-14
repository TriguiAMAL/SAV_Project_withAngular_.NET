using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SAV_Backend_PR.Models;

namespace SAV_Backend_PR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PieceDetailController : ControllerBase
    {
        private readonly PieceDetailContext _context;

        public PieceDetailController(PieceDetailContext context)
        {
            _context = context;
        }

        // GET: api/PieceDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PieceDetail>>> GetPieceDetails()
        {
            return await _context.PieceDetails.ToListAsync();
        }

        // GET: api/PieceDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PieceDetail>> GetPieceDetail(int id)
        {
            var pieceDetail = await _context.PieceDetails.FindAsync(id);

            if (pieceDetail == null)
            {
                return NotFound(); 
            }

            return pieceDetail;
        }

        // PUT: api/PieceDetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPieceDetail(int id, PieceDetail pieceDetail)
        {
            if (id != pieceDetail.PieceId)
            {
                return BadRequest();
            }

            _context.Entry(pieceDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PieceDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PieceDetail
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PieceDetail>> PostPieceDetail(PieceDetail pieceDetail)
        {
            _context.PieceDetails.Add(pieceDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPieceDetail", new { id = pieceDetail.PieceId }, pieceDetail);
        }

        // DELETE: api/PieceDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePieceDetail(int id)
        {
            var pieceDetail = await _context.PieceDetails.FindAsync(id);
            if (pieceDetail == null)
            {
                return NotFound();
            }

            _context.PieceDetails.Remove(pieceDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PieceDetailExists(int id)
        {
            return _context.PieceDetails.Any(e => e.PieceId == id);
        }
    }
}
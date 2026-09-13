using System.Threading.Tasks;
using dotnet_store.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace dotnet_store.Controllers;

public class UrunController : Controller
{

    private readonly DataContext _context;
    public UrunController(DataContext context)
    {
        _context = context;
    }    
        public ActionResult Index()
    {
        var urunler = _context.Urunler.Select(i => new UrunGetModel
        {
            Id = i.Id,
            UrunAdi = i.UrunAdi,
            Fiyat = i.Fiyat,
            Aktif = i.Aktif,
            Anasayfa = i.Anasayfa,
            KategoriAdi = i.Kategori.KategoriAdi,
            Resim = i.Resim
            
        }).ToList();
        return View(urunler); ;
    }

    public ActionResult List(string url, string q)
    {
        var query = _context.Urunler.Where(i => i.Aktif);

        if (!string.IsNullOrEmpty(url))
        {
            // filtreleme
            query = query.Where(i => i.Kategori.Url == url);
        }

        if (!string.IsNullOrEmpty(q))
        {
            // filtreleme
            query = query.Where(i => i.UrunAdi.ToLower().Contains(q.ToLower()));
            ViewData["q"] = q;
        }
    
        return View(query.ToList()); 
    }

    public ActionResult Details(int id)
    {
        // var urun = _context.Urunler.FirstOrDefault(i => i.Id == id);
        var urun = _context.Urunler.Find(id);
        if(urun == null)
        {
            return RedirectToAction("Index", "Home");
        }

        ViewData["BenzerUrunler"] = _context.Urunler.Where(i => i.Aktif && i.KategoriId == urun.KategoriId && i.Id != id).Take(4).ToList();
        return View(urun);
    }

    [HttpGet]
    public ActionResult Create()
    {
        // ViewData["Kategoriler"] = _context.Kategoriler.ToList();
        // ViewBag.Kategoriler = _context.Kategoriler.ToList();
        ViewBag.Kategoriler = new SelectList(_context.Kategoriler.ToList(), "Id", "KategoriAdi");
        return View();
    }

    [HttpPost]
    public async Task<ActionResult> Create(UrunCreatModel model)
    {
        var filename = Path.GetRandomFileName() + ".jpg";
        var path = Path.Combine(Directory.GetCurrentDirectory(), "wwroot/img", filename);
        using (var stream = new FileStream(path, FileMode.Create))
        {
            await model.Resim!.CopyToAsync(stream);
        }
        var entity = new Urun()
        {
            UrunAdi = model.UrunAdi,
            Acıklama = model.Acıklama,
            Fiyat = model.Fiyat,
            Aktif = model.Aktif,
            Anasayfa = model.Anasayfa,
            KategoriId = model.KategoriId,
            Resim = filename
        };

        _context.Urunler.Add(entity);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

    public ActionResult Edit(int id)
    {
        var entity = _context.Urunler.Select(i => new UrunEditModel
        {
            Id = i.Id,
            UrunAdi = i.UrunAdi,
            Acıklama = i.Acıklama,
            Aktif = i.Aktif,
            Anasayfa = i.Anasayfa,
            Fiyat = i.Fiyat,
            KategoriId = i.KategoriId,
            Resim = i.Resim
        }).FirstOrDefault(i => i.Id == id);
        ViewBag.Kategoriler = new SelectList(_context.Kategoriler.ToList(), "Id", "KategoriAdi");
            return View(entity);
        
    }

    [HttpPost]
    public ActionResult Edit(int id, UrunEditModel model)
    {
        if(id != model.Id)
        {
            return RedirectToAction("Index");
        }

        var entity = _context.Urunler.FirstOrDefault(i => i.Id == model.Id);
        if(entity != null)
        {
            entity.UrunAdi = model.UrunAdi;
            entity.Acıklama = model.Acıklama;
            entity.Fiyat = model.Fiyat;
            entity.Resim = model.Resim;
            entity.Aktif = model.Aktif;
            entity.Anasayfa = model.Anasayfa;
            entity.KategoriId = model.KategoriId;

            _context.SaveChanges();

            TempData["Mesaj"] = $"{entity.UrunAdi} ürünü güncellendi";
            
            return RedirectToAction("Index");

        }

        return View(model);
    }

}
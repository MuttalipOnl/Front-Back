using dotnet_store.Models;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_store.Controllers;

public class SliderController:Controller
{
     private readonly DataContext _context;

    public SliderController(DataContext context)
    {
        _context = context;
    }
    
    public ActionResult Index()
    {
        
        return View(_context.Sliderlar.Select(i => new SliderGetModel{
            Id = i.Id,
            Baslik = i.Baslik,
            Aktif = i.Aktif,
            Index = i.Index,
            Resim = i.Resim
        }).ToList());
    }



    [HttpGet]
    public ActionResult Create()
    {
        return View();
    }

    [HttpPost]
    public async Task<ActionResult> Create(SliderCreateModel model)
    {
        if (model.Resim == null || model.Resim.Length == 0)
        {
            ModelState.AddModelError("", "Resim Seçmelisiniz");
        }

        if (ModelState.IsValid)
        {
            var filename = Path.GetRandomFileName() + ".jpg";
            var imageDirectory = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "img");
            Directory.CreateDirectory(imageDirectory);
            var path = Path.Combine(imageDirectory, filename);
            using (var stream = new FileStream(path, FileMode.Create))
            {
                await model.Resim!.CopyToAsync(stream);
            }
            var entity = new Slider()
            {
                Baslik = model.Baslik,
                Aciklama = model.Aciklama,
                Resim = filename,
                Aktif = model.Aktif,
                Index = model.Index
            };

            _context.Sliderlar.Add(entity);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        return View(model);
    }


public ActionResult Edit(int id)
    {
        var entity = _context.Sliderlar.Select(i => new SliderEditModel
        {
             Id = i.Id,
            Baslik = i.Baslik,
            Aktif = i.Aktif,
            Index = i.Index,
            Aciklama = i.Aciklama,
            ResimAdi = i.Resim,
            
        }).FirstOrDefault(i => i.Id == id);
            return View(entity);
        
    }

    [HttpPost]
    public async Task<ActionResult> Edit(int id, SliderEditModel model)
    {
        if(id != model.Id)
        {
            return RedirectToAction("Index");
        }

        if (ModelState.IsValid)
        {

            var entity = _context.Sliderlar.FirstOrDefault(i => i.Id == model.Id);

            if(entity != null)
            {
                if(model.Resim != null)
                {
                    var filename = Path.GetRandomFileName() + ".jpg";
                    var path = Path.Combine(Directory.GetCurrentDirectory(), "wwroot/img", filename);
                    using (var stream = new FileStream(path, FileMode.Create))
                    {
                        await model.Resim!.CopyToAsync(stream);
                    }

                    entity.Resim = filename;
                }

                entity.Baslik = model.Baslik;
                entity.Aciklama = model.Aciklama;  
                entity.Aktif = model.Aktif;
                entity.Index = model.Index;

                _context.SaveChanges();

                TempData["Mesaj"] = $"{entity.Baslik} isimli slider güncellendi";
                
                return RedirectToAction("Index");
            }

        }
        return View(model);
    }

 public ActionResult Delete(int? id)
    {
        if(id == null)
        {
            return RedirectToAction("Index");
        }
        var entity = _context.Sliderlar.FirstOrDefault(i => i.Id == id);

        if (entity != null)
        {
           return View(entity);

            
        }
        return RedirectToAction("Index");
    }

    [HttpPost]
    public ActionResult DeleteConfirm(int? id)
    {
        if(id == null)
        {
            return RedirectToAction("Index");
        }
        var entity = _context.Sliderlar.FirstOrDefault(i => i.Id == id);

        if (entity != null)
        {
            _context.Sliderlar.Remove(entity);
            _context.SaveChanges();

            TempData["Mesaj"] = $"{entity.Baslik} isimli slider silindi";

            
        }
        return RedirectToAction("Index");
    }
    


}
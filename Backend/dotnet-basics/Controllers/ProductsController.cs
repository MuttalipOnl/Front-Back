using dotnet_basics.Models;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_basics.Controllers;

public class ProductsController : Controller
{
    List<Product> urunler =
    [
            new Product {
                Id=1,
                urunBaslik = "IPhone 15", urunFiyat= 80000, urunResim="i1.png", urunAciklama="Güzel telefon", urunSatistami=true,
                IsHome = true
            },
            new Product {
                Id=2,
                urunBaslik = "IPhone 16", urunFiyat= 90000, urunResim="i2.png", urunAciklama="Güzel telefon", urunSatistami=true,
                IsHome = true
            },
            new Product {
                Id=3,
                urunBaslik = "IPhone 17", urunFiyat= 95000, urunResim="i3.png", urunAciklama="Güzel telefon", urunSatistami=true,
                IsHome = true
            },
             new Product {
                Id=4,
                urunBaslik = "IPhone 18", urunFiyat= 95000, urunResim="i4.png", urunAciklama="Güzel telefon", urunSatistami=true,
                IsHome = false
            },
        ];
    public ActionResult Index()
    {
        List<Product> products = urunler.Where(p => p.IsHome).ToList();
        return View(products);
    }

    public ActionResult List()
    {
        return View(urunler);
    }

    public ActionResult Details(int id)
    {
        Product? product = urunler.Where(p => p.Id == id).FirstOrDefault();
        return View(product);
    }
}

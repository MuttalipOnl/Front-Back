using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace dotnet_basics.Controllers;

public class HomeController : Controller
{
    public ActionResult Index()
    {
        int sayi1 = 10;
        int sayi2 = 20;
        // int urunFiyat = 5000;

        sayi1 = 30;
        sayi2 = 40;

        int toplam = sayi1 + sayi2; // 70

        ViewData["Toplam"] = toplam;

        return View();
    }

    public ActionResult About()
    {
        return View();
    }

    public ActionResult Contact()
    {
        return View();
    }
}






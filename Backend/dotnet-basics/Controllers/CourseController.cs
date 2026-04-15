using dotnet_basics.Models;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_basics.Controllers;

public class CourseController : Controller
{
    List<Course> kurslar = [
        new Course { Id=1, Title = "Javascript Kursu",Image = "1.jpg", IsActive = true, IsHome=true },
        new Course { Id=2, Title = "React Kursu", Image = "2.jpg", IsActive = true, IsHome=true },
        new Course { Id=3, Title = "Angular Kursu",Image = "3.jpg", IsActive = true, IsHome=true },
        new Course { Id=4, Title = "Angular Kursu",Image = "4.jpg", IsActive = true, IsHome=true },
        new Course { Id=5, Title = "Angular Kursu",Image = "4.jpg", IsActive = true, IsHome=false },
        new Course { Id=6, Title = "Angular Kursu",Image = "4.jpg", IsActive = true, IsHome=false },
    ];

    public ActionResult Index()
    {
        return View(kurslar);
    }

    public ActionResult Details(int id)
    {
        Course? kurs = kurslar.Where(a => a.Id == id).FirstOrDefault();
        return View(kurs);
    }

    public ActionResult List()
    {
        return View(kurslar);
    }


}

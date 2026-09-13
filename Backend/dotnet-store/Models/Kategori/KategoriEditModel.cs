using System.ComponentModel.DataAnnotations;

namespace dotnet_store.Models;

public class KategoriEditMdoel
{
    public int Id {get; set; }
    [Display(Name = "   Kategori Adı")]
    public string KategoriAdi { get; set; } = null;
    [Display(Name = "   URL")]
    public string? Url { get; set; }
}
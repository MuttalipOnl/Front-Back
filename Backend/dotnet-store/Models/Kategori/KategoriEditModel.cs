using System.ComponentModel.DataAnnotations;

namespace dotnet_store.Models;

public class KategoriEditMdoel
{
    [Required]
    [StringLength(30)]
    public int Id {get; set; }
    [Display(Name = "   Kategori Adı")]

    [Required]
    [StringLength(30)]
    public string KategoriAdi { get; set; } = null;
    [Display(Name = "   URL")]
    public string? Url { get; set; }
}
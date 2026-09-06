using System.ComponentModel.DataAnnotations;

namespace dotnet_store.Models;

public class UrunCreatModel
{
    [Display(Name = "Ürün Adı")]
    public string? UrunAdi { get; set; }
    [Display(Name = "Ürün Fiyat")]
    public double Fiyat { get; set; }
    [Display(Name = "Ürün Resmi")]
    public string? Resim { get; set; }
    [Display(Name = "Ürün Açıklaması")]
    public string? Acıklama { get; set; }
    public bool Aktif { get; set; }
    public bool Anasayfa { get; set; }
    public int KategoriId { get; set; }
}
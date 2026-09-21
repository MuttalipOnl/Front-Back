using System.ComponentModel.DataAnnotations;
namespace dotnet_store.Models;

public class UrunModel
{
    [Display(Name = "Ürün Adı")]
    [Required(ErrorMessage ="{0} Girmelisiniz.")]
    [StringLength(50, ErrorMessage = "{0} için {2}-{1} karakter aralığında değer girmelisiniz.", MinimumLength =10)]
    public string? UrunAdi { get; set; }

    [Display(Name = "Ürün Fiyatı")]
    [Required(ErrorMessage ="{0} zorunlu.")]
    [Range(0,100000,ErrorMessage ="{0} için girdiğiniz değere {1} ile {2} arasında olmalıdır.")]
    public double? Fiyat { get; set; }

    [Display(Name = "Ürün Resmi")]
    public IFormFile? Resim { get; set; }

    [Display(Name = "Ürün Açıklaması")]
    public string? Acıklama { get; set; }

    public bool Aktif { get; set; }

    public bool Anasayfa { get; set; }

    [Display(Name = "Kategori")]
    [Required(ErrorMessage ="{0} Seçiniz.")]
    public int? KategoriId { get; set; }
}
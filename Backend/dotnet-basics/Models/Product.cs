namespace dotnet_basics.Models;
public class Product
{
    public int Id { get; set; }
    public string? urunBaslik { get; set; }
    public string urunAciklama { get; set; } = null!;
    public double urunFiyat { get; set; }
    public string? urunResim { get; set; }
    public bool urunSatistami { get; set; }
    public int StokAdeti { get; set; }
    public bool IsHome { get; set; }
}
namespace dotnet_store.Models;

public class UrunEditModel
{
    public int Id { get; set; }
    public string? UrunAdi { get; set; }
    public double Fiyat { get; set; }
    public string? Resim { get; set; }
    public string? Acıklama { get; set; }
    public bool Aktif { get; set; }
    public bool Anasayfa { get; set; }
    public int KategoriId { get; set; }
}
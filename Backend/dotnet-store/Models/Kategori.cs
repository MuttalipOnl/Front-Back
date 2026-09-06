namespace dotnet_store.Models;

//entity
public class Kategori
{
    public int Id { get; set; }
    public string KategoriAdi { get; set; } = null;
    public string? Url { get; set; }
    public List<Urun> Uruns { get; set; } = new();
}
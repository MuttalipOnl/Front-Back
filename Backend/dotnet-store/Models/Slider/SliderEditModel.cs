namespace dotnet_store.Models;

//model
public class SliderEditModel
{

    public int Id { get; set; }
    public string? Baslik { get; set; }
    public string? Aciklama { get; set; }
    public IFormFile? Resim { get; set; }
    public string? ResimAdi { get; set; }
    public int Index { get; set; }
    public bool Aktif { get; set; }
}
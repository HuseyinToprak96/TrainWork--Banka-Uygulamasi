# TrainWork--Banka-Uygulamasi

LOGİN SAYFASI
 
 ![image](https://user-images.githubusercontent.com/101343622/229382718-aee3f0d9-0450-4942-ac44-5933df7a907f.png)


Login Admin Bilgileri: Vatandaşlık Numarası:1234 --- Şifre:1234
Login Kullanıcı Bilgileri: Vatandaşlık Numarası:4321 --- Şifre:4321

DİL AYARLARI
Sağ üstte bulunan dropdown yardımı ile dil seçenekleri ayarlanabilmektedir.

Şifremi Unuttum Kısmı
![image](https://user-images.githubusercontent.com/101343622/229382729-1fd5f70c-40dc-4047-a0b2-4d61a5314113.png)

Şifremi unuttum sayfasına ilk girildiğinde Vatandaşlık numarası bilgisi istenmektedir. 3 hatalı girişte tekrar deneme şansı verilmemektedir. İnput disabled olmaktadır ve tekrar deneme yapabilmek için geri dön butonuna basılarak sayfaya tekrar giriş yapılması gerekmektedir.
 ![image](https://user-images.githubusercontent.com/101343622/229382737-379e4366-2180-48d5-8d5f-85324f9a4a3d.png)

Vatadaşlık numarası doğru girilir ise Annesinin kızlık soyadı bilgisi istenmektedir. Bu soruya verilecek cevap hakkı ve vatandaşlık numarası hattı toplam 3dür. 
 ![image](https://user-images.githubusercontent.com/101343622/229382756-fa495324-b320-469b-a5a0-105a8fd5fa50.png)


Başarılı girişin ardından normalde mail ile veya sms ile bilgilendirme yapılmalıydı. Fakat bu konuları henüz görmemiş olmamızdan dolayı şuanlık resimde göründüğü gibi gösterilmektedir.
![image](https://user-images.githubusercontent.com/101343622/229382761-a4e492f2-2cc2-4a97-b9e6-e5c401cb51b5.png)

 
Login sayfasına gelindiğinde burada toplam 2*3 hata şansımız vardır. İlk 3 hatayı yaptığımızda;
 
![image](https://user-images.githubusercontent.com/101343622/229382751-e097a25e-1df9-438a-8eb4-45e4eef5cdc3.png)

Resimdeki gibi 1 dakikadan geri sayaç başlamaktadır. 1 dakika boyunca giriş denemesi yapılamamaktadır. İnputlar disabled duruma getirilmiştir.
1 dakikanın sonunda yeniden 3 hakkımız vardır.
 
![image](https://user-images.githubusercontent.com/101343622/229382770-76d56890-3bcf-44c2-9724-b29eb60a5899.png)

Bu 3 işlemde de başarısız olur isek tekrar giriş denemesi hakkımız yoktur.

![image](https://user-images.githubusercontent.com/101343622/229382781-7a609172-e8d9-44b6-a574-5190dfcafbf2.png)

 

Başarılı girişin ardından üstteki sayfa açılmaktadır. Üstte bulunan linkler yardımı ile Kuveyt Türk resmi web sitesine ulaşılmaktadır.
Solda bulunan menü linkleri kişinin yetkisine göre değişiklik göstermektedir.
![image](https://user-images.githubusercontent.com/101343622/229382791-8a00046d-3c96-4ed4-a0ed-1084f9117edd.png)

         
                      Kullanıcı Menüsü                                                               
                      
![image](https://user-images.githubusercontent.com/101343622/229382814-d29cd69a-45c0-425e-a71b-2dfdd0feaa2c.png)

                      Admin Menüsü

 ![image](https://user-images.githubusercontent.com/101343622/229382823-e7f6c208-e618-4c01-b20b-678134833aa1.png)


Sayfa ilk geldiğinde article kısmına para transfer ekranı gelmektedir. Sol üstte bulunan + iconu ile yeni hesap ekleme kısmı açılmaktadır.
 
![image](https://user-images.githubusercontent.com/101343622/229382835-e074ca59-7710-43cf-b198-9206381b2c60.png)

Buradan eklenen hesap anlık olarak Dropdown içerisine eklenmektedir. Bakiye bilgisi başlangıçta olması gerektiği gibi 0 olmaktadır.

Sağ üstte bulunan Çöp kutusu iconu ile hesap silme işlemi yapılmaktadır. Tıklandığında önce emin misiniz diye sormaktadır.
 ![image](https://user-images.githubusercontent.com/101343622/229382849-29366792-ea70-4095-8cad-af0c37dc20b4.png)

Tamam denmesi halinde silme işlemi için gerekli kontroller yapılmaktadır.
Control 1 Başka hesaba sahipmiyiz?
Control 2 Hesapda para var mı
Eğer bu kontrollerde farklı hesaba sahip isek ve hesabımızda para yok ise hesap başarıyla silinmektedir.
 
![image](https://user-images.githubusercontent.com/101343622/229382865-2bcd6fad-a640-4182-8b43-3876000aa32b.png)

Para çekme sayfasına girildiğinde;
 ![image](https://user-images.githubusercontent.com/101343622/229382868-f9288b20-9ce9-4224-93d8-35ac39fc083d.png)

Dropdown üzerinden Çekilecek hesap seçilir.
Tutar girilerek Para Çekme butonuna basılarak para çekimi sağlanır.
Control 1: Tutar – olamaz
Control 2 Girilen Miktar Hesapda bulunan miktardan çok olamaz.

![image](https://user-images.githubusercontent.com/101343622/229382881-c9fc46f3-04ce-4386-91a0-b02a0a4a32d9.png)
![image](https://user-images.githubusercontent.com/101343622/229382887-9837aa64-d638-4613-9bcd-2efd5aff5822.png)










Para Yatırma
Dropdown içerisinden yatırıl yapılacak hesap seçilir.

 ![image](https://user-images.githubusercontent.com/101343622/229382898-3e9af1dd-ffe3-49cc-a9ba-10437eb324c1.png)

Bu işlemde tek kontrol para – olamaz.

Hesap haraketleri kısmına tıklanıldığında Hesaptan yapılan havale, para çekmei para yatırma işlemleri listelenir. Eğer para çıkışı ise arka planı kırmızı, para girişi var ise yeşil renk olmaktadır.
 ![image](https://user-images.githubusercontent.com/101343622/229382915-1178d216-48d8-414a-a25c-3f3f220488ab.png)

![image](https://user-images.githubusercontent.com/101343622/229382927-7a70a39c-2b2a-44e6-8388-3349c6f470a7.png)

 

Ayarlar sayfasına girildiğinde 
 ![image](https://user-images.githubusercontent.com/101343622/229382937-a8cfdbf9-b2a4-46b3-863c-7c189de1fc0c.png)

Şekildeki gibi Toggle lar gelmektedir. Kullanıcı Bilgilerine tıklanıldığında giriş yapan kullanıcının bilgileri gelmektedir.
![image](https://user-images.githubusercontent.com/101343622/229382947-ddd42680-fefa-46df-8ff7-b19ab83e3e97.png)

 

Burada bulunan kaydet butonu ile bilgileri güncellenebilmektedir.
 ![image](https://user-images.githubusercontent.com/101343622/229382949-ee89624b-cce5-46c2-8947-bb0628c3a65d.png)


Hesap bilgilerine tıklandığında kişinin hesap adı ve hesap numaraları listelenir. Kaydet butonuna tıklandığında girilen bütün bilgiler aynı anda güncellenir.
![image](https://user-images.githubusercontent.com/101343622/229382957-e66028d7-5d24-423c-95d9-bc62f3322db8.png)

 
Yeni Müşteri oluşturmak istenildiğinde bu sayfa kullanılır. Buradan yeni müşteri oluşturulur ve anlık olarak altta bulunan tabloya eklenir.
İşlem kayıtları sayfana sadece admin erişebilmekte ve tüm burada para akışı listelenmektedir.
 
![Uploading image.png…]()

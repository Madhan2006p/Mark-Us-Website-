import qrcode

website = "https://forms.gle/CGPYADsk3sEBuhBL6"

img = qrcode.make(website)
img.save("qrcode.png")
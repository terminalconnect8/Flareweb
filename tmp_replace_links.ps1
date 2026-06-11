$path = 'C:\Users\DELL\Desktop\Flare\index.html'
$text = Get-Content -Path $path -Raw
$text = $text -replace 'href="index\.html\s*"', 'href="wallet.html"'
$text = $text -replace "href='index\.html\s*'", "href='wallet.html'"
Set-Content -Path $path -Value $text -Encoding UTF8
Write-Output 'replaced'

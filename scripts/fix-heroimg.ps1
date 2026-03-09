$files = Get-ChildItem -Path "src/pages/productos/*.astro"
foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    # Remove the heroImages import line
    $content = $content -replace 'import \{ getHeroImage \} from "@/data/heroImages";\r?\n', ''
    # Remove the heroImg variable line
    $content = $content -replace 'const heroImg = getHeroImage\("[^"]+"\)!;\r?\n', ''
    # Restore backgroundImage={heroImg} back to the original string-based pattern
    # We do NOT know the original values per file, so we cannot restore them here.
    # Instead, we will just write the cleaned content.
    Set-Content -Path $f.FullName -Value $content -NoNewline
    Write-Host "Cleaned: $($f.Name)"
}

# tim2-mentorshipV2

## Paduan Update ke Repo Global

Pastikan buat branch baru pada saat membuat fitur atau fix fitur, misal:
```bash
git checkout -b [nama branch]
```

Kalian bisa check branch yg ada di lokal atau ngecheck ada di branch mana:
```bash
git branch
```
nanti akan muncul branch yg ada di local kalian. Nama yang aktif - misal warna hijau di nama branchnya, itu posii branch sekarang

setelah bikin branch, tinggal masukan ke stagging:
```bash
git add . 
```

kemudian bisa `git status .` - harusnya akan hijau. Tapi misal kalian lupa untuk ngelakuin staging dan `git status . ` itu akan merah - tapi itu bukan error, cuma tanda bahwa ada berubahan yg belum dimasukan ke staging

setelah di staging. Tinggal di commit:
```bash
git commit -m 'pesannya apa'
```
setelah berhasil tinggal push
```bash
git push origin HEAD
```

nanti akan dikasih link github - buka aja dan nanti akan diarahkan untuk pull req, tinggal pull req dan selesai

dan lakukan begitu jika ngerjain fitur baru. Kalo ada instruksi boleh pull, nanti kalian tinggal pindah ke branch main dan `git pull origin main` - PASTIKAN DI BRANCH MAIN di pull nya 
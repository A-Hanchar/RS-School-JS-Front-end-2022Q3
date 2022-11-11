## Сборка css бандла

В файле **index.js** директории **05-merge-styles** напишите скрипт собирающий в единый файл содержимое папки **styles**. Выходной файл должен носить имя **bundle.css** и находиться внутри папки **project-dist**.

### Требования

- [ ] После завершения работы скрипта в папке **project-dist** должен находиться файл **bundle.css** содержащий стили из всех файлов папки **styles**.
- [ ] При добавлении/удалении/изменении файлов стилей в папке **styles** и повторном запуске скрипта файл **bundle.css** перезаписывается и содержит актуальные стили.
- [ ] Любые файлы имеющие расширение отличное от **css** или директории игнорируются.
- [ ] Стили находящиеся в файле **bundle.css** созданном в процессе сборки не должны быть повреждены. 

### Цели задания

- Научиться объединять информацию из нескольких файлов с одним расширением.

### Содержимое папки:
Обратите внимание, что внутри **05-merge-styles** находится папка **test-files** предназначенная для проверки задания и в ходе решения поставленной задачи взаимодействие с ней не предполагается.
### Описание  

Возможный порядок действий для выполнения задачи:

1. Импорт всех требуемых модулей
3. Чтение содержимого папки **styles**
4. Проверка является ли объект файлом и имеет ли файл нужное расширение
4. Чтение файла стилей
5. Запись прочитанных данных в массив
6. Запись массива стилей в файл **bundle.css**

Для наглядного эффекта работы вашего скрипта рекомендую установить в vscode расширение [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) и запустить с его помощью файл **index.html** находящийся в директории **project-dist**.
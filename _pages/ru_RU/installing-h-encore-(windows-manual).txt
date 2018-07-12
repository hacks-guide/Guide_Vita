---
title: "Установка h-encore (вручную для Windows)"
---

{% include toc title="Содержание" %}

### Обязательно к прочтению

Этот метод требует компьютер под управлением Windows.
    
Установка h-encore выполняется вручную и требует использования командной строки.

Прежде чем продолжить, убедитесь, что прочитали всю информацию на странице [Установка h-encore](installing-h-encore)

### Что понадобится

* [unpack.bat]({{ "/assets/files/unpack.bat" | absolute_url }}){:download="unpack.bat"}
* Демо-версия игры [Bitter Smile](http://ares.dl.playstation.net/cdn/JP0741/PCSG90096_00/xGMrXOkORxWRyqzLMihZPqsXAbAXLzvAdJFqtPJLAZTgOcqJobxQAhLNbgiFydVlcmVOrpZKklOYxizQCRpiLfjeROuWivGXfwgkq.pkg) в формате `.pkg`
* Свежая версия [h-encore](https://github.com/TheOfficialFloW/h-encore/releases/latest)
* Свежая версия [psvimgtools](https://github.com/yifanlu/psvimgtools/releases/latest) *(`.zip-архив` для вашей ОС)*
* Свежая версия [pkg2zip](https://github.com/mmozeiko/pkg2zip/releases/latest)
* Свежая версия [QCMA](https://github.com/codestation/qcma/releases/latest)
  + Если ранее было установлено официальное приложение Sony Content Manager Assistant, удалите его
  
### Инструкция

#### Часть I - Подготовительные работы

1. Установите и запустите на компьютере QCMA, если вы еще этого не сделали
1. Скопируйте содержимое `zip-архива` auto h-encore в папку на вашем компьютере
1. Запустите на консоли приложение "Управление данными"
1. Выберите "Скопировать контент"
1. Выберите "Компьютер"
1. Выберите метод, который вы хотите использовать для подключения к QCMA
  + Если вам предложат войти в аккаунт PlayStation Network, сделайте это
  + Если у вас нет аккаунта PlayStation Network, создайте его
1. Выберите / зарегистрируйте ваш компьютер, если появится запрос

#### Часть II - auto h-encore

1. Перейдите по ссылке [cma.henkaku.xyz](http://cma.henkaku.xyz/) на компьютере
1. Перейдите в папку `PS Vita\APP\` на компьютере с помощью проводника
  + По умолчанию эта папка находится внутри папки `Documents` на вашем компьютере
  + Если вы не можете её найти, проверьте настройку "Applications / Backups" в приложении QCMA, щелкнув правой кнопкой мыши значок QCMA в трее, а затем выбрав "Settings"
1. Скопируйте имя папки внутри этой директории, затем вставьте его в поле "AID" на сайте CMA
  + Вот пример AID: `ec8d45ec9c055609`
1. Нажмите "Отправить запрос" для создания соответствующего ключа
  + Оставьте эту страницу открытой; ключ вам вскоре понадобится
  + Вот пример ключа: `488d3ff6cce7a9ef1be6da8338c7d18db18147c3255fa4d50596568555687174`
1. Скопируйте папку `h-encore` из `.zip-архива` h-encore в папку на вашем компьютере
1. Скопируйте содержимое `zip-архива` psvimgtools в папку `h-encore`
1. Скопируйте файл `pkg2zip.exe` из `.zip-архива` pkg2zip в папку `h-encore`
1. Переместите `.pkg-файл` Bitter Smile в папку `h-encore`
1. Откройте окно командной строки
1. Перейдите в папку `h-encore` командой `cd`
1. Выполните `unpack`
1. Выполните `psvimg-create -n app -K YOUR_KEY app PCSG90096\app`
  + Замените "YOUR_KEY" на ключ, созданный ранее
1. Выполните `psvimg-create -n appmeta -K YOUR_KEY appmeta PCSG90096\appmeta`
1. Выполните `psvimg-create -n license -K YOUR_KEY license PCSG90096\license`
1. Выполните `psvimg-create -n savedata -K YOUR_KEY savedata PCSG90096\savedata`
1. Закройте окно командной строки
1. Скопируйте папку `h-encore\PCSG90096` в папку `PS Vita\APP\YOUR_AID\` на вашем компьютере с помощью проводника

#### Часть III - Перенос данных QCMA

1. Нажмите правой кнопкой мыши на значок QCMA в трее, затем выберите "Refresh database"
1. В приложении Управление данными на консоли выберите "PC -> Система PS Vita"
1. Выберите "Приложения"
1. Выберите "PS Vita"
1. Выберите "h-encore"
1. Выберите "Копировать"
1. Выберите "OK"
  + Эксплойт h-encore будет скопирован на вашу консоль
  + Этот процесс займет некоторое время
1. Закройте приложение Управление данными

___

### Следующий шаг: [Настройка h-encore](configuring-h-encore)
{: .notice--primary}
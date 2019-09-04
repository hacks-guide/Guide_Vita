---
title: "Updating Firmware (PS Vita 3.65)"
redirect_from: /updating-firmware-(ps-vita-3.65-and-3.68)
---

{% include toc title="Содержание" %}

### Обязательно к прочтению

The h-encore exploit is only compatible with firmware versions 3.65 and above. Поэтому консоли с другой версией прошивки должны быть обновлены при помощи кастомного приложения для обновлений, чтобы использовать этот эксплойт.

While the h-encore exploit itself is compatible with higher firmware versions, users on a firmware version under 3.65 should only update to firmware version 3.65 as it is the latest version which still supports the Ensō boot-time exploit.

Обратите внимание, что кастомное приложение для обновлений может лишь увеличить версию прошивки, но не понизить её. If you are on a firmware version higher than 3.65, you should return to [Get Started](get-started).

### Что понадобится

* Файл `PSP2Updat.PUP`, соответствующий версии прошивки, до которой вы пытаетесь обновиться
  + <i class="fa fa-magnet" aria-hidden="true" title="Это magnet-ссылка. Воспользуйтесь торрент-клиентом, чтобы скачать этот файл."></i> - [PSP2UPDAT.PUP](magnet:?xt=urn:btih:5f2437f2141408c925ffc5d81ff76e94e1a4c493&dn=PSP2UPDAT.PUP&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fdenis.stalker.upeer.me%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce) (3.65) ([mirror](https://web.archive.org/web/20180630222648id_/http://dus01.psp2.update.playstation.net/update/psp2/image/2017_0317/rel_0a0f2a9ae58968ac5d1d2127049c3cba/PSP2UPDAT.PUP))
* Свежая версия [finalhe](https://github.com/soarqin/finalhe/releases/latest)

### Инструкция

#### Часть I - finalhe

1. Скопируйте содержимое `zip-архива` finalhe в папку на вашем компьютере
1. Переместите файл `PSP2UPDAT.PUP` в ту же папку, что и finalhe
1. Запустите finalhe на компьютере
  + Если у вас компьютер под управлением Windows, и если появится запрос брандмауэра на разрешение доступа к сети для finalhe, разрешите доступ
1. Запустите на консоли приложение "Управление данными"
1. Выберите "Скопировать контент"
1. Выберите "Компьютер"
1. Выберите метод, который вы хотите использовать для подключения к finalhe
  + Если вам предложат войти в аккаунт PlayStation Network, сделайте это
  + Если у вас нет аккаунта PlayStation Network, создайте его
1. Выберите / зарегистрируйте ваш компьютер, если появится запрос
  + Если появится сообщение о необходимости обновления, перезагрузите консоль и попробуйте снова
  + Если сообщение по-прежнему появляется, включите Режим авиаперелета в Системных настройках, перезагрузите консоль и попробуйте снова
  + Если сообщение *по-прежнему* появляется, выключите Режим авиаперелета, выполните инструкции на странице [Блокировка обновлений](blocking-updates), перезагрузите консоль и попробуйте снова
  + Если консоль не определяется при подключении через USB под Windows, установите [QcmaDriver_winusb](https://github.com/soarqin/finalhe/releases/download/v1.3/QcmaDriver_winusb.exe) и попробуйте снова
1. Приложение finalhe должно отобразить инструкции для обновления консоли

#### Часть II - Обновление прошивки

1. Запустите приложение Настройки
1. Перейдите в `Обновление системы` -> `Обновить путем подключения к компьютеру`
1. Ensure the update message "Version 3.65" is displayed, depending on which version you are attempting to update to
  + Если отображается любое другое сообщение, остановитесь и выясните, что пошло не так
1. Следуйте инструкциям на экране, чтобы обновить консоль
  + После завершения процесса консоль перезагрузится автоматически

___

### Следующий шаг: [Установка h-encore](installing-h-encore)
{: .notice--primary}

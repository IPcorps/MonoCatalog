<div align="center"><ins>

![Logo](https://user-images.githubusercontent.com/5076458/110127198-666fac00-7dd6-11eb-9822-ccc973f41ee6.png)

[English](/../../)

</ins></div>

Насколько простой может быть разработка при использовании [TypeScript](https://www.typescriptlang.org/) ([JavaScript](https://learn.javascript.ru/), [Pug](https://pugjs.org/api/getting-started.html), [Stylus](https://stylus-lang.com/) и т.д.)? Пример использования WebDevSynergy совместно с [Visual Studio Code](https://code.visualstudio.com/) в два клика:

1. Запускаем "живой сервер".
2. Запускаем наблюдатель за файлами.

Теперь печатайте код на TypeScript. Как только сохраните файл, страница браузера обновится и покажет результат:

![Fin](https://user-images.githubusercontent.com/5076458/113714180-cb2d6780-96f0-11eb-8cb9-87b3a1f5b942.gif)

# 1. Что такое WebDevSynergy?

WebDevSynergy - это простое, реконфигурируемое окружение для веб-разработки. Все что требуется для его работы - установленная [**NodeJS**](https://nodejs.org). Особенности:
1. **Независимость от какой-либо IDE** (но ничего не мешает, и даже желательно, использовать данное окружение совместно с предпочитаемой средой разработки).
2. **Простая настраиваемость** (возможность отключать/удалять присутствующие модули, а так же добавлять новые по шаблону).

В данном, базовом, примере реализованы лишь следующие возможности:
1. "Живой сервер" [Browsersync](https://www.browsersync.io/) для тестирования разрабатываемого приложения в браузере.
2. Компиляция файлов ресурсов, реализованная с помощью [Gulp](https://gulpjs.com/):
   * Typescript -> JavaScript;
   * Pug -> HTML;
   * Stylus -> css.
3. Простая и быстрая возможность показать результат своей работы через интернет используя [Localtunnel](https://theboroer.github.io/localtunnel-www/)

Настраивать, включать/отключать функциональность и т.д. менеджера задач [Gulp](https://gulpjs.com/), можно через общий файл конфигурации _gulpfile.js/config-wds.js_.

# 2. Установка и настройка окружения (вариант без зависимости от IDE).
№|Описание|Скриншот
:-:|-|-
1| Скачать и установить [NodeJS](https://nodejs.org/en/) согласно инструкции на сайте.| ![NodeJS](https://nodejs.org/static/images/logo-light.svg)
2| [Скачать](https://github.com/IPcorps/WebDevSynergy/archive/main.zip) и распаковать архив с данным репозиторием в папку разработки (либо загрузить ресурсы, используя git).|![02](https://user-images.githubusercontent.com/5076458/110133984-fa914180-7ddd-11eb-8e98-b14a93e539de.jpg)
3| Открыть консоль и **перейти в папку разработки**, где выполнить команду  _**npm install**_ для инициализации окружения и загрузки необходимых для работы окружения модулей.|![04](https://user-images.githubusercontent.com/5076458/110135037-1c3ef880-7ddf-11eb-9054-96694d3ed05b.jpg)
4| Для запуска воспользоваться следующими командами:<br>&nbsp;&nbsp;&nbsp;* Запуск "живого сервера" - **npm run rls**.<br>&nbsp;&nbsp;&nbsp;* Запуск наблюдения за файлами и компиляция: typescript -> javascript, pug -> html, etc. - **npm run rfw**.<br>&nbsp;&nbsp;&nbsp;* При необходимости показать результат разработки (необходим уже работающий "живой сервер") - **npm run lt**. В результате получим временную ссылку, которой можно поделиться, и по которой можно перейти на запущенный "живой сервер" |![05](https://user-images.githubusercontent.com/5076458/110136489-ccf9c780-7de0-11eb-8f44-238394d84fcd.jpg)

Веб-приложение будет располагаться в папке _app_ (настраиваемо). После запуска окружения, откроем, к примеру, в блокноте, файл _main.ts_ из папки _app_, отредактируем его и сохраним. Мы тут же увидим, как страница в браузере обновится и покажет внесенные изменения.

# 3. [Visual Studio Code](https://code.visualstudio.com/) и [WebDevSynergy](https://github.com/IPcorps/WebDevSynergy).
Step|Description|Screenshot
:-:|-|-
1| Скачать и установить [NodeJS](https://nodejs.org/en/) согласно инструкции на сайте.| ![NodeJS](https://nodejs.org/static/images/logo-light.svg)
2| [Скачать](https://github.com/IPcorps/WebDevSynergy/archive/main.zip) и распаковать архив с данным репозиторием в папку разработки (либо загрузить ресурсы, используя git).|![02](https://user-images.githubusercontent.com/5076458/110133984-fa914180-7ddd-11eb-8e98-b14a93e539de.jpg)
3| Запустить VSC и открыть в нем данную папку.|![14](https://user-images.githubusercontent.com/5076458/110156516-1c97bd80-7df8-11eb-9602-70e8b44bc8bc.jpg)
4| Вы можете использовать встроенный терминал для инициализации окружения и загрузки необходимых для его работы модулей, выполнив в нем команду _npm install_.|![15](https://user-images.githubusercontent.com/5076458/113714079-b18c2000-96f0-11eb-927e-d5723c75ed8e.jpg)
5| В левом нижнем углу, на вкладке _NPM SCRIP_, вы видите доступные для выполнения команды запуска "живого сервера" [Browsersync](https://www.browsersync.io/) (_rls_), менеджера заданий [Gulp](https://gulpjs.com/) (_rfw_), и модуля [Localtunnel](https://theboroer.github.io/localtunnel-www/) (_lt_). Для большей читабельности можно изменить данные имена в файле _package.json_ в секции _scripts_.|![16](https://user-images.githubusercontent.com/5076458/113714098-b8b32e00-96f0-11eb-9ea4-03c9f84fab4a.jpg)

Но это еще не все. Для большего удобства в VSC вы можем:

Step|Description
:-:|-
6| Добавить данные задачи запуска и останова к задачам среды VSC. Для этого, если еще нет таковой, необходимо создать в корне проекта папку _.vscode_ и в ней файл _tasks.json_, затем добавив в него следующее:
    {
    	"version": "2.0.0",
    	"tasks": [
    		{
    			"label": "Run live server",
    			"type": "npm",
    			"script": "rls",
    			"problemMatcher": [],
    			"presentation": {
    				"group": "dev"
    			}
    		},
    		{
    			"label": "Run files watcher",
    			"type": "npm",
    			"script": "rfw",
    			"problemMatcher": [],
    			"presentation": {
    				"group": "dev"
    			}
    		},
    		{
    			"label": "Local tunnel",
    			"type": "npm",
    			"script": "lt",
    			"problemMatcher": [],
    			"presentation": {
    				"group": "dev"
    			}
    		}
    	]
    }
![17](https://user-images.githubusercontent.com/5076458/113714122-bf41a580-96f0-11eb-987c-81d1079e3b35.jpg)
Step|Description|Screenshot
:-:|-|-
7| Теперь можно запускать задачи, используя командную строку VSC _Ctrl+P_, набирая в ней _>Tasks: Run Task_ и затем выбрав нужную задачу.|![18](https://user-images.githubusercontent.com/5076458/113714135-c36dc300-96f0-11eb-9ba0-e2064fc6a16c.gif)
8| Также можно установить любой менеджер или проводник задач и использовать его.|![19](https://user-images.githubusercontent.com/5076458/113714168-c799e080-96f0-11eb-8308-d95cccd73345.jpg)

# 4. "Под капотом".

Как все работает. Момент записи файлов ресурсов с расширением  _.ts_, _.pug_, и другими, отслеживается [Gulp](https://gulpjs.com/), который тут же их компилирует в файлы _.js_, _.​​html_ и т.д., соответственно. В то же время, за файлами с расширением _.js_, _.html_ и им "подобными" следит [Browsersync](https://www.browsersync.io/), который тут же, при их обновлении (изменении), обновляет страницу в браузере. Вы можете создавать подпапки в папке _app_, располагая файлы в любой нужной иерархии, [Gulp](https://gulpjs.com/), по умолчанию, всегда будет создавать результатирующий файл компиляции рядом с исходным файлом. Данное поведение можно изменить, воспользовавшись настройками _dirFrom_ и _dirTo_ в файле настроек _config-wds.js_, которые позволяют переписать часть пути вывода результатирующего файла. **При любом изменении файлов настроек, необходим перезапуск соответствующего сервиса (в случае с _config-wds.js_ — перезапуск _rfw_)!**

# 5. На заметку.

Используя возможности [Gulp](https://gulpjs.com/), возможно реализовать любую нужную функциональность. Сам код реализации в папке _gulpfile.js_ имеет довольно простую структуру. К тому же [Browsersync](https://www.browsersync.io/) и [Gulp](https://gulpjs.com/) имеют значительно больше возможностей, кроме тех, которые здесь используются. Но это уже, как говорится, совсем другая история, которую всегда можно почитать на официальных страницах данных продуктов.

Хотя данное окружение не зависит от среды разработки, и возможно писать код в любом текстовом редакторе, намного более удобно и эффективно, все же, использовать для этого IDE. В следующем разделе, в качестве примера, рассматривается вариант работы с [Visual Studio Code](https://code.visualstudio.com/).

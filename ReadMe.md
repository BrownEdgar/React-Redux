## Redux Toolkit как средство эффективной Redux-разработки

- Для устранения этих недостатков разработчики Redux представили библиотеку Redux Toolkit. Этот инструмент представляет собой набор практических решений и методов, предназначенных для упрощения разработки приложений с использованием Redux. Разработчики данной библиотеки преследовали цель упростить типичные случаи использования Redux. Данный инструмент не является универсальным решением в каждом из возможных случаев использования Redux, но позволяет упростить тот код, который требуется написать разработчику.

### Кратко о библиотеке

релиз состоялся в конце октября 2019 года;
библиотека официально поддерживается разработчиками Redux.
Наиболее значимыми функциями, предоставляемыми библиотекой Redux Toolkit являются:


configureStore — функция, предназначенная упростить процесс создания и настройки хранилища;
createReducer — функция, помогающая лаконично и понятно описать и создать редьюсер;
createAction — возвращает функцию создателя действия для заданной строки типа действия;
createSlice — объединяет в себе функционал createAction и createReducer;
createSelector — функция из библиотеки Reselect, переэкспортированная для простоты использования.

# Функция createSlice

В качестве входных параметров функция createSlice принимает объект со следующими полями:

name — пространство имен создаваемых действий (${name}/${action.type});
initialState — начальное состояние редьюсера;
reducers — объект с обработчиками. Каждый обработчик принимает функцию с аргументами state и action, action содержит в себе данные в свойстве payload и имя события в свойстве name. Кроме того, имеется возможность предварительного изменения данных, полученных из события, перед их попаданием в редьюсер (например, добавить id к элементам коллекции). Для этого вместо функции необходимо передать объект с полями reducer и prepare, где reducer — это функция-обработчик действия, а prepare — функция-обработчик полезной нагрузки, возвращающая обновленный payload;
extraReducers — объект, содержащий редьюсеры другого среза. Данный параметр может потребоваться в случае необходимости обновления объекта, относящегося к другому срезу. Подробнее про данную функциональную возможность можно узнать из соответствующего раздела официальной документации.

link => https://habr.com/ru/company/inobitec/blog/481288
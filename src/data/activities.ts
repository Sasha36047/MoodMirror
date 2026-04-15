import type { MediaItem, MoodKey } from "../types";
export const activitiesByMood: Record<MoodKey, MediaItem[]> = {
happy:[
{id:"ah1",title:"Прогулка без цели",subtitle:"20–30 минут",image:"/images/shared/1.jpg",description:"Выйди за кофе, в парк или просто на воздух, пока это состояние с тобой.",tag:"Лёгкость",category:"activities"},
{id:"ah2",title:"Собери мини-плейлист",subtitle:"5 треков под настроение",image:"/images/shared/2.jpg",description:"Хорошее настроение приятно фиксировать музыкой.",tag:"Музыка",category:"activities"},
{id:"ah3",title:"Сними короткое видео дня",subtitle:"10 секунд",image:"/images/shared/3.jpg",description:"Маленький способ запомнить этот день тёплым.",tag:"Память",category:"activities"},
{id:"ah4",title:"Напиши кому-то хорошее",subtitle:"Одно сообщение",image:"/images/shared/4.jpg",description:"Иногда настроение хорошо работает, когда им делишься.",tag:"Связь",category:"activities"}],
calm:[
{id:"ac1",title:"Тихий вечер с чаем",subtitle:"15 минут для себя",image:"/images/shared/5.jpg",description:"Отключи шум и побудь в медленном ритме.",tag:"Тишина",category:"activities"},
{id:"ac2",title:"Медленный скетч",subtitle:"Без результата и оценки",image:"/images/shared/6.jpg",description:"Просто рисуй линии, формы и цвет.",tag:"Творчество",category:"activities"},
{id:"ac3",title:"Убери один угол комнаты",subtitle:"10 минут порядка",image:"/images/shared/7.jpg",description:"Спокойствие любит чуть больше воздуха вокруг.",tag:"Порядок",category:"activities"},
{id:"ac4",title:"Чтение у окна",subtitle:"Без спешки",image:"/images/shared/8.jpg",description:"Пусть день будет медленнее обычного.",tag:"Ритуал",category:"activities"}],
sad:[
{id:"as1",title:"Напиши, что чувствуешь",subtitle:"5 честных минут",image:"/images/shared/9.jpg",description:"Не исправляй текст — просто выпиши всё как есть.",tag:"Заметки",category:"activities"},
{id:"as2",title:"Свяжись с близким человеком",subtitle:"Один короткий звонок",image:"/images/shared/10.jpg",description:"Даже короткий контакт может многое поменять.",tag:"Поддержка",category:"activities"},
{id:"as3",title:"Медленная прогулка",subtitle:"Без цели и маршрута",image:"/images/shared/1.jpg",description:"Иногда телу нужно просто пройти этот день ногами.",tag:"Прогулка",category:"activities"},
{id:"as4",title:"Тёплый фильм и плед",subtitle:"Вечер без требований",image:"/images/shared/2.jpg",description:"Сделай пространство безопасным и мягким.",tag:"Уют",category:"activities"}],
energetic:[
{id:"ae1",title:"Короткий челлендж",subtitle:"15 минут концентрации",image:"/images/shared/3.jpg",description:"Направь энергию в конкретный короткий результат.",tag:"Фокус",category:"activities"},
{id:"ae2",title:"Плейлист + движение",subtitle:"1 трек = 1 задача",image:"/images/shared/4.jpg",description:"Включи темп и сделай что-то руками.",tag:"Драйв",category:"activities"},
{id:"ae3",title:"Разбор быстрых идей",subtitle:"Список из 10 штук",image:"/images/shared/5.jpg",description:"Поймай скорость и преврати её в материал.",tag:"Идеи",category:"activities"},
{id:"ae4",title:"Сделай одно сложное дело первым",subtitle:"Пока есть заряд",image:"/images/shared/6.jpg",description:"Это хорошее окно для действия.",tag:"Рывок",category:"activities"}],
tired:[
{id:"at1",title:"Режим минимального усилия",subtitle:"Сделай только одно",image:"/images/shared/7.jpg",description:"Сегодня не нужно побеждать мир.",tag:"Мягкость",category:"activities"},
{id:"at2",title:"Тёплый душ и тишина",subtitle:"10–15 минут",image:"/images/shared/8.jpg",description:"Самый простой способ вернуть себе тело и внимание.",tag:"Пауза",category:"activities"},
{id:"at3",title:"Небольшой сон или просто лёжка",subtitle:"20 минут",image:"/images/shared/9.jpg",description:"Даже небольшая пауза — уже действие.",tag:"Восстановление",category:"activities"},
{id:"at4",title:"Убери всё лишнее из списка",subtitle:"Оставь 1 задачу",image:"/images/shared/10.jpg",description:"Усталость любит ясность и меньше требований.",tag:"Приоритет",category:"activities"}],
stressed:[
{id:"ast1",title:"Дыхание 4–4–6",subtitle:"1 минута",image:"/images/shared/1.jpg",description:"Вдох на 4, пауза на 4, выдох на 6.",tag:"Сбросить шум",category:"activities"},
{id:"ast2",title:"Разгрузка головы",subtitle:"Список из 3 дел",image:"/images/shared/2.jpg",description:"Выпиши всё и оставь только главное.",tag:"Структура",category:"activities"},
{id:"ast3",title:"Выйти на воздух",subtitle:"Хотя бы на 10 минут",image:"/images/shared/3.jpg",description:"Смена пространства помогает вернуть контроль.",tag:"Переключение",category:"activities"},
{id:"ast4",title:"Отключить уведомления",subtitle:"Хотя бы ненадолго",image:"/images/shared/4.jpg",description:"Шум часто приходит не изнутри, а снаружи.",tag:"Тишина",category:"activities"}]
};

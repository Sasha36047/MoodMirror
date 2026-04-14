import type { MediaItem, MoodKey } from "../types";
export const activitiesByMood: Record<MoodKey, MediaItem[]> = {
happy:[
{id:"ah1",title:"Прогулка без цели",subtitle:"20–30 минут",image:"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",description:"Выйди за кофе, в парк или просто на воздух, пока это состояние с тобой.",tag:"Лёгкость",category:"activities"},
{id:"ah2",title:"Собери мини-плейлист",subtitle:"5 треков под настроение",image:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",description:"Хорошее настроение приятно фиксировать музыкой.",tag:"Музыка",category:"activities"},
{id:"ah3",title:"Сними короткое видео дня",subtitle:"10 секунд",image:"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",description:"Маленький способ запомнить этот день тёплым.",tag:"Память",category:"activities"},
{id:"ah4",title:"Напиши кому-то хорошее",subtitle:"Одно сообщение",image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",description:"Иногда настроение хорошо работает, когда им делишься.",tag:"Связь",category:"activities"}],
calm:[
{id:"ac1",title:"Тихий вечер с чаем",subtitle:"15 минут для себя",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",description:"Отключи шум и побудь в медленном ритме.",tag:"Тишина",category:"activities"},
{id:"ac2",title:"Медленный скетч",subtitle:"Без результата и оценки",image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",description:"Просто рисуй линии, формы и цвет.",tag:"Творчество",category:"activities"},
{id:"ac3",title:"Убери один угол комнаты",subtitle:"10 минут порядка",image:"https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",description:"Спокойствие любит чуть больше воздуха вокруг.",tag:"Порядок",category:"activities"},
{id:"ac4",title:"Чтение у окна",subtitle:"Без спешки",image:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",description:"Пусть день будет медленнее обычного.",tag:"Ритуал",category:"activities"}],
sad:[
{id:"as1",title:"Напиши, что чувствуешь",subtitle:"5 честных минут",image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",description:"Не исправляй текст — просто выпиши всё как есть.",tag:"Заметки",category:"activities"},
{id:"as2",title:"Свяжись с близким человеком",subtitle:"Один короткий звонок",image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",description:"Даже короткий контакт может многое поменять.",tag:"Поддержка",category:"activities"},
{id:"as3",title:"Медленная прогулка",subtitle:"Без цели и маршрута",image:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",description:"Иногда телу нужно просто пройти этот день ногами.",tag:"Прогулка",category:"activities"},
{id:"as4",title:"Тёплый фильм и плед",subtitle:"Вечер без требований",image:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80",description:"Сделай пространство безопасным и мягким.",tag:"Уют",category:"activities"}],
energetic:[
{id:"ae1",title:"Короткий челлендж",subtitle:"15 минут концентрации",image:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",description:"Направь энергию в конкретный короткий результат.",tag:"Фокус",category:"activities"},
{id:"ae2",title:"Плейлист + движение",subtitle:"1 трек = 1 задача",image:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",description:"Включи темп и сделай что-то руками.",tag:"Драйв",category:"activities"},
{id:"ae3",title:"Разбор быстрых идей",subtitle:"Список из 10 штук",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",description:"Поймай скорость и преврати её в материал.",tag:"Идеи",category:"activities"},
{id:"ae4",title:"Сделай одно сложное дело первым",subtitle:"Пока есть заряд",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",description:"Это хорошее окно для действия.",tag:"Рывок",category:"activities"}],
tired:[
{id:"at1",title:"Режим минимального усилия",subtitle:"Сделай только одно",image:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80",description:"Сегодня не нужно побеждать мир.",tag:"Мягкость",category:"activities"},
{id:"at2",title:"Тёплый душ и тишина",subtitle:"10–15 минут",image:"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",description:"Самый простой способ вернуть себе тело и внимание.",tag:"Пауза",category:"activities"},
{id:"at3",title:"Небольшой сон или просто лёжка",subtitle:"20 минут",image:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80",description:"Даже небольшая пауза — уже действие.",tag:"Восстановление",category:"activities"},
{id:"at4",title:"Убери всё лишнее из списка",subtitle:"Оставь 1 задачу",image:"https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",description:"Усталость любит ясность и меньше требований.",tag:"Приоритет",category:"activities"}],
stressed:[
{id:"ast1",title:"Дыхание 4–4–6",subtitle:"1 минута",image:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",description:"Вдох на 4, пауза на 4, выдох на 6.",tag:"Сбросить шум",category:"activities"},
{id:"ast2",title:"Разгрузка головы",subtitle:"Список из 3 дел",image:"https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=900&q=80",description:"Выпиши всё и оставь только главное.",tag:"Структура",category:"activities"},
{id:"ast3",title:"Выйти на воздух",subtitle:"Хотя бы на 10 минут",image:"https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",description:"Смена пространства помогает вернуть контроль.",tag:"Переключение",category:"activities"},
{id:"ast4",title:"Отключить уведомления",subtitle:"Хотя бы ненадолго",image:"https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",description:"Шум часто приходит не изнутри, а снаружи.",tag:"Тишина",category:"activities"}]
};

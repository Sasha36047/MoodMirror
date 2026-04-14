import type { MediaItem, MoodKey } from "../types";
export const supportByMood: Record<MoodKey, MediaItem[]> = {
happy:[
{id:"sh1",title:"Сохрани это чувство",subtitle:"Небольшой якорь на потом",image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",description:"Запиши, что именно сегодня сделало тебя живее.",tag:"Осознанность",category:"mind"},
{id:"sh2",title:"Не спеши всё расплескать",subtitle:"Хорошее тоже можно беречь",image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",description:"Иногда радость усиливается, когда не торопишься.",tag:"Бережность",category:"mind"},
{id:"sh3",title:"Это можно повторить",subtitle:"У хорошего дня есть структура",image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",description:"Подумай, что именно сработало сегодня.",tag:"Паттерн",category:"mind"}],
calm:[
{id:"sc1",title:"Не выходи из тишины слишком быстро",subtitle:"Пусть она немного побудет с тобой",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",description:"Не заполняй пространство сразу.",tag:"Тишина",category:"mind"},
{id:"sc2",title:"Спокойствие — это тоже ресурс",subtitle:"Его не нужно оправдывать",image:"https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",description:"Позволь себе день без внутренней гонки.",tag:"Разрешение",category:"mind"},
{id:"sc3",title:"Оставь день чуть медленнее",subtitle:"Не всё надо ускорять",image:"https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80",description:"Медленный темп — не ошибка.",tag:"Темп",category:"mind"}],
sad:[
{id:"ss1",title:"Тебя не нужно срочно исправлять",subtitle:"Можно просто прожить этот день мягче",image:"https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=900&q=80",description:"Иногда достаточно не давить на себя.",tag:"Поддержка",category:"mind"},
{id:"ss2",title:"Грусть не делает тебя слабым",subtitle:"Она просто показывает важное",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd97913?auto=format&fit=crop&w=900&q=80",description:"Не всё, что тяжело, нужно немедленно убирать.",tag:"Честность",category:"mind"},
{id:"ss3",title:"Сделай день меньше",subtitle:"Хотя бы на сегодня",image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",description:"Когда тяжело, хорошо помогает сужение задач.",tag:"Мягкость",category:"mind"}],
energetic:[
{id:"se1",title:"Дай энергии форму",subtitle:"Иначе она рассыпется",image:"https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=900&q=80",description:"Выбери одну главную вещь и вложись в неё.",tag:"Фокус",category:"mind"},
{id:"se2",title:"Скорость хороша, когда у неё есть направление",subtitle:"Не обязательно бежать во все стороны",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",description:"Энергия становится особенно сильной, когда у неё есть цель.",tag:"Направление",category:"mind"},
{id:"se3",title:"Ты не обязан делать всё сразу",subtitle:"Даже если сейчас можешь",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",description:"Сильный день не обязан заканчиваться перегрузкой.",tag:"Баланс",category:"mind"}],
tired:[
{id:"st1",title:"Ты устал — это тоже информация",subtitle:"Не обязательно идти через силу",image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",description:"Сделай меньше, но по-доброму к себе.",tag:"Бережность",category:"mind"},
{id:"st2",title:"Отдых — это не награда",subtitle:"Он часть нормальной жизни",image:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80",description:"Не нужно заслуживать паузу.",tag:"Отдых",category:"mind"},
{id:"st3",title:"Сегодня можно не быть продуктивным",subtitle:"Это не делает день плохим",image:"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",description:"Иногда хорошее решение — притормозить.",tag:"Разрешение",category:"mind"}],
stressed:[
{id:"sst1",title:"Верни себе опору",subtitle:"Сначала тело, потом мысли",image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",description:"Плечи вниз, челюсть расслабить, выдох длиннее вдоха.",tag:"Заземление",category:"mind"},
{id:"sst2",title:"Не всё нужно решать прямо сейчас",subtitle:"Особенно в напряжении",image:"https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=900&q=80",description:"Сначала снизь шум, потом принимай решения.",tag:"Пауза",category:"mind"},
{id:"sst3",title:"Сузь мир до следующего шага",subtitle:"Только до одного",image:"https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",description:"Когда всё громко, помогает простая структура.",tag:"Контроль",category:"mind"}]
};

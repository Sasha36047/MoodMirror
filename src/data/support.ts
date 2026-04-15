import type { MediaItem, MoodKey } from "../types";
export const supportByMood: Record<MoodKey, MediaItem[]> = {
happy:[
{id:"sh1",title:"Сохрани это чувство",subtitle:"Небольшой якорь на потом",image:"/images/shared/1.jpg",description:"Запиши, что именно сегодня сделало тебя живее.",tag:"Осознанность",category:"mind"},
{id:"sh2",title:"Не спеши всё расплескать",subtitle:"Хорошее тоже можно беречь",image:"/images/shared/2.jpg",description:"Иногда радость усиливается, когда не торопишься.",tag:"Бережность",category:"mind"},
{id:"sh3",title:"Это можно повторить",subtitle:"У хорошего дня есть структура",image:"/images/shared/3.jpg",description:"Подумай, что именно сработало сегодня.",tag:"Паттерн",category:"mind"}],
calm:[
{id:"sc1",title:"Не выходи из тишины слишком быстро",subtitle:"Пусть она немного побудет с тобой",image:"/images/shared/4.jpg",description:"Не заполняй пространство сразу.",tag:"Тишина",category:"mind"},
{id:"sc2",title:"Спокойствие — это тоже ресурс",subtitle:"Его не нужно оправдывать",image:"/images/shared/5.jpg",description:"Позволь себе день без внутренней гонки.",tag:"Разрешение",category:"mind"},
{id:"sc3",title:"Оставь день чуть медленнее",subtitle:"Не всё надо ускорять",image:"/images/shared/6.jpg",description:"Медленный темп — не ошибка.",tag:"Темп",category:"mind"}],
sad:[
{id:"ss1",title:"Тебя не нужно срочно исправлять",subtitle:"Можно просто прожить этот день мягче",image:"/images/shared/7.jpg",description:"Иногда достаточно не давить на себя.",tag:"Поддержка",category:"mind"},
{id:"ss2",title:"Грусть не делает тебя слабым",subtitle:"Она просто показывает важное",image:"/images/shared/8.jpg",description:"Не всё, что тяжело, нужно немедленно убирать.",tag:"Честность",category:"mind"},
{id:"ss3",title:"Сделай день меньше",subtitle:"Хотя бы на сегодня",image:"/images/shared/9.jpg",description:"Когда тяжело, хорошо помогает сужение задач.",tag:"Мягкость",category:"mind"}],
energetic:[
{id:"se1",title:"Дай энергии форму",subtitle:"Иначе она рассыпется",image:"/images/shared/10.jpg",description:"Выбери одну главную вещь и вложись в неё.",tag:"Фокус",category:"mind"},
{id:"se2",title:"Скорость хороша, когда у неё есть направление",subtitle:"Не обязательно бежать во все стороны",image:"/images/shared/1.jpg",description:"Энергия становится особенно сильной, когда у неё есть цель.",tag:"Направление",category:"mind"},
{id:"se3",title:"Ты не обязан делать всё сразу",subtitle:"Даже если сейчас можешь",image:"/images/shared/2.jpg",description:"Сильный день не обязан заканчиваться перегрузкой.",tag:"Баланс",category:"mind"}],
tired:[
{id:"st1",title:"Ты устал — это тоже информация",subtitle:"Не обязательно идти через силу",image:"/images/shared/3.jpg",description:"Сделай меньше, но по-доброму к себе.",tag:"Бережность",category:"mind"},
{id:"st2",title:"Отдых — это не награда",subtitle:"Он часть нормальной жизни",image:"/images/shared/4.jpg",description:"Не нужно заслуживать паузу.",tag:"Отдых",category:"mind"},
{id:"st3",title:"Сегодня можно не быть продуктивным",subtitle:"Это не делает день плохим",image:"/images/shared/5.jpg",description:"Иногда хорошее решение — притормозить.",tag:"Разрешение",category:"mind"}],
stressed:[
{id:"sst1",title:"Верни себе опору",subtitle:"Сначала тело, потом мысли",image:"/images/shared/6.jpg",description:"Плечи вниз, челюсть расслабить, выдох длиннее вдоха.",tag:"Заземление",category:"mind"},
{id:"sst2",title:"Не всё нужно решать прямо сейчас",subtitle:"Особенно в напряжении",image:"/images/shared/7.jpg",description:"Сначала снизь шум, потом принимай решения.",tag:"Пауза",category:"mind"},
{id:"sst3",title:"Сузь мир до следующего шага",subtitle:"Только до одного",image:"/images/shared/8.jpg",description:"Когда всё громко, помогает простая структура.",tag:"Контроль",category:"mind"}]
};

import type { MediaItem, MoodKey } from "../types";
export const musicByMood: Record<MoodKey, MediaItem[]> = {
happy:[
{id:"mh1",title:"Feel Good Hits",subtitle:"Светлый поп и лёгкий вайб",image:"/images/fallbacks/music/1.jpg",description:"Когда хочется света, движения и ощущения, что день работает на тебя.",tag:"Поп",source:"Mood Mirror",category:"music"},
{id:"mh2",title:"Golden Hour",subtitle:"Тёплые треки для хорошего дня",image:"/images/fallbacks/music/2.jpg",description:"Плейлист, который звучит как солнце на стекле.",tag:"Feel-good",source:"Mood Mirror",category:"music"},
{id:"mh3",title:"Bright Mornings",subtitle:"Немного воздуха и темпа",image:"/images/fallbacks/music/3.jpg",description:"Подборка для живого, бодрого старта.",tag:"Morning",source:"Mood Mirror",category:"music"}],
calm:[
{id:"mc1",title:"Deep Focus",subtitle:"Тихий ambient",image:"/images/fallbacks/music/4.jpg",description:"Музыка, которая не давит, а поддерживает ровный ритм.",tag:"Ambient",source:"Mood Mirror",category:"music"},
{id:"mc2",title:"Soft Evening",subtitle:"Воздух, вода и мягкий свет",image:"/images/fallbacks/music/5.jpg",description:"Когда хочется раствориться в тишине.",tag:"Chill",source:"Mood Mirror",category:"music"},
{id:"mc3",title:"Quiet Hours",subtitle:"Медленные треки для фона",image:"/images/fallbacks/music/1.jpg",description:"Ненавязчивый звук, который оставляет пространство тебе.",tag:"Focus",source:"Mood Mirror",category:"music"}],
sad:[
{id:"ms1",title:"Late Night",subtitle:"Меланхоличный инди",image:"/images/fallbacks/music/2.jpg",description:"Когда музыка не спорит с твоими чувствами.",tag:"Indie",source:"Mood Mirror",category:"music"},
{id:"ms2",title:"Quiet Piano",subtitle:"Пауза и немного воздуха",image:"/images/fallbacks/music/3.jpg",description:"Тихие композиции, чтобы прожить день мягче.",tag:"Piano",source:"Mood Mirror",category:"music"},
{id:"ms3",title:"Blue Window",subtitle:"Спокойная музыка для вечернего света",image:"/images/fallbacks/music/4.jpg",description:"Подборка для тех моментов, когда хочется не спешить.",tag:"Melancholy",source:"Mood Mirror",category:"music"}],
energetic:[
{id:"me1",title:"Workout Pulse",subtitle:"Высокий темп и плотный ритм",image:"/images/fallbacks/music/5.jpg",description:"Для состояния, когда энергия просит форму.",tag:"EDM",source:"Mood Mirror",category:"music"},
{id:"me2",title:"Neon Drive",subtitle:"Скорость, свет и движение",image:"/images/fallbacks/music/1.jpg",description:"Будто город летит мимо, а ты в правильном темпе.",tag:"Electronic",source:"Mood Mirror",category:"music"},
{id:"me3",title:"Push Forward",subtitle:"Бодрая подборка для фокуса",image:"/images/fallbacks/music/2.jpg",description:"Когда хочется уже не думать, а делать.",tag:"Power",source:"Mood Mirror",category:"music"}],
tired:[
{id:"mt1",title:"Soft Rest",subtitle:"Мягкая акустика",image:"/images/fallbacks/music/3.jpg",description:"Нежная музыка без лишнего шума.",tag:"Acoustic",source:"Mood Mirror",category:"music"},
{id:"mt2",title:"Slow Breathing",subtitle:"Треки для режима минимального усилия",image:"/images/fallbacks/music/4.jpg",description:"Лучше ничего не форсировать.",tag:"Soft",source:"Mood Mirror",category:"music"},
{id:"mt3",title:"Quiet Room",subtitle:"Саундтрек к паузе",image:"/images/fallbacks/music/5.jpg",description:"Чтобы просто дать себе отдохнуть.",tag:"Rest",source:"Mood Mirror",category:"music"}],
stressed:[
{id:"mstr1",title:"Calm Reset",subtitle:"Чуть меньше шума внутри",image:"/images/fallbacks/music/1.jpg",description:"Подборка для мягкого сброса напряжения.",tag:"Relax",source:"Mood Mirror",category:"music"},
{id:"mstr2",title:"Grounding Tones",subtitle:"Заземляющий ambient",image:"/images/fallbacks/music/2.jpg",description:"Когда сначала нужно вернуть себе опору.",tag:"Focus",source:"Mood Mirror",category:"music"},
{id:"mstr3",title:"Glass Rain",subtitle:"Спокойный фон для выдоха",image:"/images/fallbacks/music/3.jpg",description:"Мягкий звук, чтобы день стал чуть тише.",tag:"Ambient",source:"Mood Mirror",category:"music"}]
};

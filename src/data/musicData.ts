import type { MediaItem, MoodKey } from "../types";
export const musicByMood: Record<MoodKey, MediaItem[]> = {
happy:[
{id:"mh1",title:"Feel Good Hits",subtitle:"Светлый поп и лёгкий вайб",image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",description:"Когда хочется света, движения и ощущения, что день работает на тебя.",tag:"Поп",source:"Mood Mirror",category:"music"},
{id:"mh2",title:"Golden Hour",subtitle:"Тёплые треки для хорошего дня",image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",description:"Плейлист, который звучит как солнце на стекле.",tag:"Feel-good",source:"Mood Mirror",category:"music"},
{id:"mh3",title:"Bright Mornings",subtitle:"Немного воздуха и темпа",image:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",description:"Подборка для живого, бодрого старта.",tag:"Morning",source:"Mood Mirror",category:"music"}],
calm:[
{id:"mc1",title:"Deep Focus",subtitle:"Тихий ambient",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",description:"Музыка, которая не давит, а поддерживает ровный ритм.",tag:"Ambient",source:"Mood Mirror",category:"music"},
{id:"mc2",title:"Soft Evening",subtitle:"Воздух, вода и мягкий свет",image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",description:"Когда хочется раствориться в тишине.",tag:"Chill",source:"Mood Mirror",category:"music"},
{id:"mc3",title:"Quiet Hours",subtitle:"Медленные треки для фона",image:"https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",description:"Ненавязчивый звук, который оставляет пространство тебе.",tag:"Focus",source:"Mood Mirror",category:"music"}],
sad:[
{id:"ms1",title:"Late Night",subtitle:"Меланхоличный инди",image:"https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=900&q=80",description:"Когда музыка не спорит с твоими чувствами.",tag:"Indie",source:"Mood Mirror",category:"music"},
{id:"ms2",title:"Quiet Piano",subtitle:"Пауза и немного воздуха",image:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",description:"Тихие композиции, чтобы прожить день мягче.",tag:"Piano",source:"Mood Mirror",category:"music"},
{id:"ms3",title:"Blue Window",subtitle:"Спокойная музыка для вечернего света",image:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",description:"Подборка для тех моментов, когда хочется не спешить.",tag:"Melancholy",source:"Mood Mirror",category:"music"}],
energetic:[
{id:"me1",title:"Workout Pulse",subtitle:"Высокий темп и плотный ритм",image:"https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=900&q=80",description:"Для состояния, когда энергия просит форму.",tag:"EDM",source:"Mood Mirror",category:"music"},
{id:"me2",title:"Neon Drive",subtitle:"Скорость, свет и движение",image:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",description:"Будто город летит мимо, а ты в правильном темпе.",tag:"Electronic",source:"Mood Mirror",category:"music"},
{id:"me3",title:"Push Forward",subtitle:"Бодрая подборка для фокуса",image:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",description:"Когда хочется уже не думать, а делать.",tag:"Power",source:"Mood Mirror",category:"music"}],
tired:[
{id:"mt1",title:"Soft Rest",subtitle:"Мягкая акустика",image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",description:"Нежная музыка без лишнего шума.",tag:"Acoustic",source:"Mood Mirror",category:"music"},
{id:"mt2",title:"Slow Breathing",subtitle:"Треки для режима минимального усилия",image:"https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",description:"Лучше ничего не форсировать.",tag:"Soft",source:"Mood Mirror",category:"music"},
{id:"mt3",title:"Quiet Room",subtitle:"Саундтрек к паузе",image:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80",description:"Чтобы просто дать себе отдохнуть.",tag:"Rest",source:"Mood Mirror",category:"music"}],
stressed:[
{id:"mstr1",title:"Calm Reset",subtitle:"Чуть меньше шума внутри",image:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",description:"Подборка для мягкого сброса напряжения.",tag:"Relax",source:"Mood Mirror",category:"music"},
{id:"mstr2",title:"Grounding Tones",subtitle:"Заземляющий ambient",image:"https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=900&q=80",description:"Когда сначала нужно вернуть себе опору.",tag:"Focus",source:"Mood Mirror",category:"music"},
{id:"mstr3",title:"Glass Rain",subtitle:"Спокойный фон для выдоха",image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",description:"Мягкий звук, чтобы день стал чуть тише.",tag:"Ambient",source:"Mood Mirror",category:"music"}]
};

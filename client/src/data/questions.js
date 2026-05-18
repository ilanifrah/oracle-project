// Bilingual question bank — Hebrew (original) + English (translation)
// 48 questions across 5 stages, each option maps to one archetype type.

export const STAGE_LABELS = {
  he: { 1: 'התחלה', 2: 'הדפוסים שחוזרים', 3: 'חיים אמיתיים', 4: 'בחירה', 5: 'כיוון כסף', 6: 'עומק הדפוס' },
  en: { 1: 'Opening', 2: 'Repeating Patterns', 3: 'Real Life', 4: 'Choice', 5: 'Money Direction', 6: 'Pattern Depth' },
};

// Helper — get localized field
export function q(question, lang) {
  return lang === 'he' ? question.he : question.en;
}

export const questions = [

  // ── Stage 1 ───────────────────────────────────────────────

  { id: 1, stage: 1,
    he: { text: 'יש לך חודש שקט בלי לחץ כלכלי. מה אתה מתחיל לעשות כמעט לבד?', options: [
      { label: 'א', text: 'לכתוב או למפות רעיון שמסדר לי ולאחרים את הראש.', type: 'sage' },
      { label: 'ב', text: 'לבנות כלי קטן או מערכת שעושה סדר במשהו שמציק לי.', type: 'builder' },
      { label: 'ג', text: 'ליצור משהו חי — טקסט, וידאו, סדנה או רעיון עם קול אישי.', type: 'creator' },
      { label: 'ד', text: 'להזמין כמה אנשים לשיחה או מרחב שבו אפשר לחשוב יחד.', type: 'connector' },
      { label: 'ה', text: 'לבדוק מהר הזדמנות שנראית פתוחה לפני שאחרים ייכנסו.', type: 'hunter' },
    ]},
    en: { text: 'You have a quiet month with no financial pressure. What do you almost automatically start doing?', options: [
      { label: 'A', text: 'Writing or mapping an idea that organizes my thinking — and other people\'s.', type: 'sage' },
      { label: 'B', text: 'Building a small tool or system that fixes something that\'s been annoying me.', type: 'builder' },
      { label: 'C', text: 'Creating something alive — text, video, a workshop, an idea with a personal voice.', type: 'creator' },
      { label: 'D', text: 'Inviting people into a conversation or space where we can think together.', type: 'connector' },
      { label: 'E', text: 'Testing an opportunity that looks open before others get in.', type: 'hunter' },
    ]},
  },

  { id: 2, stage: 1,
    he: { text: 'חבר אומר לך: ״יש בך משהו שאנשים היו משלמים עליו.״ איזה חלק בך מקווה שהוא רואה?', options: [
      { label: 'א', text: 'את היכולת להבין לעומק ולהסביר את זה פשוט.', type: 'sage' },
      { label: 'ב', text: 'את היכולת להפוך בלגן למשהו מסודר שעובד.', type: 'builder' },
      { label: 'ג', text: 'את הקול האישי שלי — משהו שאי אפשר להעתיק ממני.', type: 'creator' },
      { label: 'ד', text: 'את היכולת לגרום לאנשים להרגיש בטוחים ומובנים.', type: 'connector' },
      { label: 'ה', text: 'את האינסטינקט לזהות פתח ולהפוך אותו למהלך.', type: 'hunter' },
    ]},
    en: { text: 'A friend says: "There\'s something in you that people would pay for." What part of you hopes they see?', options: [
      { label: 'A', text: 'My ability to understand things deeply and explain them simply.', type: 'sage' },
      { label: 'B', text: 'My ability to turn chaos into something organized that actually works.', type: 'builder' },
      { label: 'C', text: 'My personal voice — something that can\'t be copied from me.', type: 'creator' },
      { label: 'D', text: 'My ability to make people feel safe and truly understood.', type: 'connector' },
      { label: 'E', text: 'My instinct for identifying openings and turning them into moves.', type: 'hunter' },
    ]},
  },

  { id: 3, stage: 1,
    he: { text: 'איזו מחמאה תישאר איתך כמה ימים?', options: [
      { label: 'א', text: '״סוף־סוף הבנתי משהו שהיה לי מעורפל שנים.״', type: 'sage' },
      { label: 'ב', text: '״בזכותך זה נהיה פשוט, מסודר ואפשרי לביצוע.״', type: 'builder' },
      { label: 'ג', text: '״מה שיצרת הזיז בי משהו. זה הרגיש אמיתי.״', type: 'creator' },
      { label: 'ד', text: '״איתך הרגשתי שאני לא לבד ושאפשר לדבר בכנות.״', type: 'connector' },
      { label: 'ה', text: '״ראית לפני כולם לאן זה הולך והעזת לזוז.״', type: 'hunter' },
    ]},
    en: { text: 'What compliment would stay with you for days?', options: [
      { label: 'A', text: '"I finally understood something that had been vague to me for years."', type: 'sage' },
      { label: 'B', text: '"Because of you, this became simple, organized, and possible to execute."', type: 'builder' },
      { label: 'C', text: '"What you created moved something in me. It felt real."', type: 'creator' },
      { label: 'D', text: '"With you I felt I wasn\'t alone and that I could speak honestly."', type: 'connector' },
      { label: 'E', text: '"You saw before everyone else where this was going, and had the courage to move."', type: 'hunter' },
    ]},
  },

  { id: 4, stage: 1,
    he: { text: 'מה מרגיש כמו הצלחה בלי להרגיש מזויף?', options: [
      { label: 'א', text: 'להיות מוכר בזכות בהירות, עומק ושפה שאנשים חוזרים אליה.', type: 'sage' },
      { label: 'ב', text: 'להחזיק מערכת שימושית שעובדת גם כשאני לא דוחף בכוח.', type: 'builder' },
      { label: 'ג', text: 'לבנות קהל שמתחבר לקול האישי שלי ולא רק לטיפים.', type: 'creator' },
      { label: 'ד', text: 'ליצור מרחב שאנשים סומכים עליו ורוצים לחזור אליו.', type: 'connector' },
      { label: 'ה', text: 'להרוויח מתנועה חכמה, תזמון נכון וזיהוי הזדמנויות.', type: 'hunter' },
    ]},
    en: { text: 'What feels like success without feeling fake?', options: [
      { label: 'A', text: 'Being recognized for clarity, depth, and language that people keep coming back to.', type: 'sage' },
      { label: 'B', text: 'Holding a useful system that runs even when I\'m not pushing hard.', type: 'builder' },
      { label: 'C', text: 'Building an audience that connects to my personal voice — not just my tips.', type: 'creator' },
      { label: 'D', text: 'Creating a space that people trust and genuinely want to return to.', type: 'connector' },
      { label: 'E', text: 'Earning through smart movement, good timing, and reading opportunity.', type: 'hunter' },
    ]},
  },

  { id: 5, stage: 1,
    he: { text: 'כשאתה במיטבך, מה נהיה קל יותר לאחרים?', options: [
      { label: 'א', text: 'להבין מה באמת קורה ומה הצעד ההגיוני הבא.', type: 'sage' },
      { label: 'ב', text: 'לפעול בתוך סדר במקום לטבוע בפרטים.', type: 'builder' },
      { label: 'ג', text: 'להרגיש התלהבות, אומץ או חיבור למה שהם רוצים להגיד.', type: 'creator' },
      { label: 'ד', text: 'להיפתח, להרגיש אמון ולהעז להיות כנים.', type: 'connector' },
      { label: 'ה', text: 'לראות פתח פעולה ולהפסיק להיתקע בדיונים.', type: 'hunter' },
    ]},
    en: { text: 'When you\'re at your best, what becomes easier for others?', options: [
      { label: 'A', text: 'Understanding what\'s actually happening — and what the logical next step is.', type: 'sage' },
      { label: 'B', text: 'Acting within clear order instead of drowning in details.', type: 'builder' },
      { label: 'C', text: 'Feeling excitement, courage, or connection to what they want to create.', type: 'creator' },
      { label: 'D', text: 'Opening up, feeling trusted, and daring to be honest.', type: 'connector' },
      { label: 'E', text: 'Seeing a window for action and stopping getting stuck in discussions.', type: 'hunter' },
    ]},
  },

  { id: 6, stage: 1,
    he: { text: 'על מה אתה מגן כשאתה נסוג?', options: [
      { label: 'א', text: 'על השקט המנטלי שלי ועל הצורך להבין לפני שאני זז.', type: 'sage' },
      { label: 'ב', text: 'על תחושת השליטה שלי ועל הרצון שזה לא יתפרק.', type: 'builder' },
      { label: 'ג', text: 'על הדופק היצירתי שלי — שלא יהפכו אותו לחובה כבדה.', type: 'creator' },
      { label: 'ד', text: 'על הגבולות הרגשיים שלי, כי לפעמים אנשים שואבים יותר מדי.', type: 'connector' },
      { label: 'ה', text: 'על החופש לבחור כיוון אחר אם ארגיש שהחלון השתנה.', type: 'hunter' },
    ]},
    en: { text: 'What do you protect when you pull back?', options: [
      { label: 'A', text: 'My mental quiet — and the need to understand before I move.', type: 'sage' },
      { label: 'B', text: 'My sense of control — and the desire for things not to fall apart.', type: 'builder' },
      { label: 'C', text: 'My creative pulse — keeping it from becoming a heavy obligation.', type: 'creator' },
      { label: 'D', text: 'My emotional boundaries — people can drain me if I let them.', type: 'connector' },
      { label: 'E', text: 'My freedom to choose a different direction if I feel the window has shifted.', type: 'hunter' },
    ]},
  },

  { id: 7, stage: 1,
    he: { text: 'איפה אנשים בדרך כלל מפספסים את הערך שלך?', options: [
      { label: 'א', text: 'הם רואים שאני חושב הרבה, אבל לא רואים כמה בהירות זה יוצר.', type: 'sage' },
      { label: 'ב', text: 'הם רואים שאני מסדר דברים, אבל לא מבינים כמה אנרגיה וכסף זה חוסך.', type: 'builder' },
      { label: 'ג', text: 'הם רואים רגש או סגנון, אבל לא את היכולת למשוך תשומת לב אמיתית.', type: 'creator' },
      { label: 'ד', text: 'הם רואים שאני מקשיב, אבל לא מבינים כמה אמון זה בונה.', type: 'connector' },
      { label: 'ה', text: 'הם רואים שאני זז מהר, אבל לא את החוש לזהות תזמון.', type: 'hunter' },
    ]},
    en: { text: 'Where do people usually miss your value?', options: [
      { label: 'A', text: 'They see me thinking a lot, but don\'t see how much clarity it actually produces.', type: 'sage' },
      { label: 'B', text: 'They see me organizing things, but don\'t understand how much energy and money that saves.', type: 'builder' },
      { label: 'C', text: 'They see emotion or style, but not the ability to pull real sustained attention.', type: 'creator' },
      { label: 'D', text: 'They see me listening, but don\'t grasp how much trust that quietly builds.', type: 'connector' },
      { label: 'E', text: 'They see me moving fast, but miss the sense for timing underneath it.', type: 'hunter' },
    ]},
  },

  { id: 8, stage: 1,
    he: { text: 'על איזו גרסה של עצמך אתה הכי סומך?', options: [
      { label: 'א', text: 'על זו שמבינה את הדפוס לפני שהיא מגיבה.', type: 'sage' },
      { label: 'ב', text: 'על זו שבונה תהליך במקום להיבהל מהבלגן.', type: 'builder' },
      { label: 'ג', text: 'על זו שמעזה להגיד משהו חי ולא מהונדס מדי.', type: 'creator' },
      { label: 'ד', text: 'על זו שמרגישה אנשים בלי לאבד את עצמה.', type: 'connector' },
      { label: 'ה', text: 'על זו שמזהה הזדמנות ופועלת בלי לחכות לאישור מלא.', type: 'hunter' },
    ]},
    en: { text: 'Which version of yourself do you trust most?', options: [
      { label: 'A', text: 'The one that reads the pattern before reacting.', type: 'sage' },
      { label: 'B', text: 'The one that builds a process instead of panicking at the mess.', type: 'builder' },
      { label: 'C', text: 'The one that dares to say something alive and unengineered.', type: 'creator' },
      { label: 'D', text: 'The one that feels people without losing itself.', type: 'connector' },
      { label: 'E', text: 'The one that spots an opening and moves without waiting for full approval.', type: 'hunter' },
    ]},
  },

  // ── Stage 2 ───────────────────────────────────────────────

  { id: 9, stage: 2,
    he: { text: 'רעיון טוב מופיע. מה קורה בדרך כלל אחרי ההתרגשות הראשונה?', options: [
      { label: 'א', text: 'אני מתחיל לחקור עוד ועוד עד שהפעולה מתרחקת.', type: 'sage' },
      { label: 'ב', text: 'אני בונה סביבו יותר מדי לפני שבדקתי אם מישהו רוצה את זה.', type: 'builder' },
      { label: 'ג', text: 'אני מספר אותו יפה, אבל מתקשה להחזיק אותו כשהניצוץ יורד.', type: 'creator' },
      { label: 'ד', text: 'אני מחפש מישהו שיאמין איתי לפני שאני מתקדם לבד.', type: 'connector' },
      { label: 'ה', text: 'אני קופץ מהר, ואז מגלה שלא הגדרתי גבולות מספיק ברורים.', type: 'hunter' },
    ]},
    en: { text: 'A good idea appears. What usually happens after the first excitement?', options: [
      { label: 'A', text: 'I keep researching until action gradually moves further away.', type: 'sage' },
      { label: 'B', text: 'I build too much around it before checking if anyone actually wants it.', type: 'builder' },
      { label: 'C', text: 'I tell it well, but struggle to hold it once the spark fades.', type: 'creator' },
      { label: 'D', text: 'I look for someone to believe in it with me before I move forward alone.', type: 'connector' },
      { label: 'E', text: 'I jump fast, then discover I didn\'t set clear enough limits.', type: 'hunter' },
    ]},
  },

  { id: 10, stage: 2,
    he: { text: 'מתי המומנטום שלך נופל?', options: [
      { label: 'א', text: 'כשנכנס מידע חדש שגורם לי לפתוח הכול מחדש.', type: 'sage' },
      { label: 'ב', text: 'כשיש יותר מדי חלקים פתוחים ואין תהליך ברור.', type: 'builder' },
      { label: 'ג', text: 'כשהדבר נהיה טכני, חוזר או חסר חיים.', type: 'creator' },
      { label: 'ד', text: 'כשאני מרגיש לא נראה, לא מוחזק או לבד מדי.', type: 'connector' },
      { label: 'ה', text: 'כשמופיעה אפשרות חדשה שנראית חדה יותר מהקיימת.', type: 'hunter' },
    ]},
    en: { text: 'When does your momentum drop?', options: [
      { label: 'A', text: 'When new information arrives and makes me reopen everything I thought was settled.', type: 'sage' },
      { label: 'B', text: 'When there are too many open parts and no clear process to follow.', type: 'builder' },
      { label: 'C', text: 'When the work becomes technical, repetitive, or loses its aliveness.', type: 'creator' },
      { label: 'D', text: 'When I feel unseen, unsupported, or too alone in it.', type: 'connector' },
      { label: 'E', text: 'When a new option appears that seems sharper than what I\'m currently in.', type: 'hunter' },
    ]},
  },

  { id: 11, stage: 2,
    he: { text: 'איזו משימה אתה דוחה הכי הרבה זמן?', options: [
      { label: 'א', text: 'משימה שתחשוף אם אני באמת מבין מספיק.', type: 'sage' },
      { label: 'ב', text: 'משימה שמחייבת לשחרר גרסה לא מושלמת.', type: 'builder' },
      { label: 'ג', text: 'משימה שדורשת לחזור על אותו מסר אחרי שההתלהבות ירדה.', type: 'creator' },
      { label: 'ד', text: 'משימה שדורשת לבקש משהו ישירות מאדם אחר.', type: 'connector' },
      { label: 'ה', text: 'משימה שסוגרת אפשרויות ומכריחה לבחור מסלול אחד.', type: 'hunter' },
    ]},
    en: { text: 'What task do you delay the longest?', options: [
      { label: 'A', text: 'One that will expose whether I truly understand enough.', type: 'sage' },
      { label: 'B', text: 'One that requires releasing an imperfect version.', type: 'builder' },
      { label: 'C', text: 'One that requires repeating the same message after the excitement is gone.', type: 'creator' },
      { label: 'D', text: 'One that requires asking for something directly from another person.', type: 'connector' },
      { label: 'E', text: 'One that closes options and forces me to commit to one path.', type: 'hunter' },
    ]},
  },

  { id: 12, stage: 2,
    he: { text: 'מה גורם לך לסיים משהו קשה?', options: [
      { label: 'א', text: 'סיבה ברורה שממשיכה להרגיש נכונה גם אחרי ההתלהבות.', type: 'sage' },
      { label: 'ב', text: 'רשימת צעדים קצרה וסוף מוגדר שאפשר לראות.', type: 'builder' },
      { label: 'ג', text: 'דדליין שיש בו משמעות רגשית ולא רק לחץ חיצוני.', type: 'creator' },
      { label: 'ד', text: 'אדם אמיתי שמחכה לתוצאה וסומך עליי.', type: 'connector' },
      { label: 'ה', text: 'חלון הזדמנות צר שאני לא רוצה לפספס.', type: 'hunter' },
    ]},
    en: { text: 'What makes you actually finish something hard?', options: [
      { label: 'A', text: 'A clear reason that still feels right even after the excitement is gone.', type: 'sage' },
      { label: 'B', text: 'A short list of steps and a defined endpoint I can see from here.', type: 'builder' },
      { label: 'C', text: 'A deadline with real emotional meaning — not just external pressure.', type: 'creator' },
      { label: 'D', text: 'A real person waiting on the result who genuinely trusts me.', type: 'connector' },
      { label: 'E', text: 'A narrow window of opportunity I\'m unwilling to miss.', type: 'hunter' },
    ]},
  },

  { id: 13, stage: 2,
    he: { text: 'איזו שגרה אתה באמת מסוגל לחיות איתה?', options: [
      { label: 'א', text: 'שגרה שיש בה זמן לחשוב, לכתוב ולזקק.', type: 'sage' },
      { label: 'ב', text: 'שגרה עם סדר פשוט, מדדים ברורים וחזרתיות לא מעיקה.', type: 'builder' },
      { label: 'ג', text: 'שגרה שיש בה מקום לשינוי, ביטוי ונשימה יצירתית.', type: 'creator' },
      { label: 'ד', text: 'שגרה שיש בה מגע אנושי אבל גם גבולות שומרים.', type: 'connector' },
      { label: 'ה', text: 'שגרה קצרה, מהירה, עם בדיקות ותנועה קדימה.', type: 'hunter' },
    ]},
    en: { text: 'What routine can you genuinely live with?', options: [
      { label: 'A', text: 'One with time to think, write, and distill ideas without interruption.', type: 'sage' },
      { label: 'B', text: 'One with simple order, clear metrics, and non-oppressive repetition.', type: 'builder' },
      { label: 'C', text: 'One that allows change, expression, and creative breathing room.', type: 'creator' },
      { label: 'D', text: 'One with real human contact but also boundaries that protect me.', type: 'connector' },
      { label: 'E', text: 'Short, fast, with checkpoints and a sense of constant forward movement.', type: 'hunter' },
    ]},
  },

  { id: 14, stage: 2,
    he: { text: 'איזה פידבק פוגע בך הכי חזק?', options: [
      { label: 'א', text: '״זה לא ברור.״ כי חשוב לי שיבינו את מה שראיתי.', type: 'sage' },
      { label: 'ב', text: '״זה מסורבל מדי.״ כי ניסיתי לבנות את זה נכון.', type: 'builder' },
      { label: 'ג', text: '״זה לא מרגיש אמיתי.״ כי אני רוצה לגעת, לא רק להסביר.', type: 'creator' },
      { label: 'ד', text: '״אני לא סומך על זה.״ כי אמון הוא הבסיס שלי.', type: 'connector' },
      { label: 'ה', text: '״זזת מהר מדי.״ כי אני מרגיש שהחלון נסגר אם מחכים.', type: 'hunter' },
    ]},
    en: { text: 'What feedback lands hardest?', options: [
      { label: 'A', text: '"This isn\'t clear." Because I care deeply about being understood.', type: 'sage' },
      { label: 'B', text: '"This is too clunky." Because I tried to build it properly.', type: 'builder' },
      { label: 'C', text: '"This doesn\'t feel real." Because I want to move people, not just explain.', type: 'creator' },
      { label: 'D', text: '"I don\'t trust this." Because trust is the foundation I build from.', type: 'connector' },
      { label: 'E', text: '"You moved too fast." Because I felt the window was already closing.', type: 'hunter' },
    ]},
  },

  { id: 15, stage: 2,
    he: { text: 'מה אתה עושה כשמשהו מתחיל לעבוד?', options: [
      { label: 'א', text: 'בודק שוב את ההנחות במקום פשוט להמשיך.', type: 'sage' },
      { label: 'ב', text: 'מנסה לשפר את המערכת לפני שמיציתי את הגרסה הנוכחית.', type: 'builder' },
      { label: 'ג', text: 'מתחיל להשתעמם כי זה נהיה פחות חדש.', type: 'creator' },
      { label: 'ד', text: 'דואג שאנשים יצפו ממני ליותר ממה שאוכל להחזיק.', type: 'connector' },
      { label: 'ה', text: 'מחפש את המהלך הגדול הבא במקום לצבור על הקיים.', type: 'hunter' },
    ]},
    en: { text: 'What do you do when something starts working?', options: [
      { label: 'A', text: 'Re-examine the assumptions instead of just continuing forward.', type: 'sage' },
      { label: 'B', text: 'Try to improve the system before getting the most from the current version.', type: 'builder' },
      { label: 'C', text: 'Start to lose interest because it\'s become less new.', type: 'creator' },
      { label: 'D', text: 'Worry that people will expect more from me than I can sustainably hold.', type: 'connector' },
      { label: 'E', text: 'Look for the next big move instead of compounding on what\'s already there.', type: 'hunter' },
    ]},
  },

  { id: 16, stage: 2,
    he: { text: 'איזה דפוס ישן מתחיל לעלות לך ביוקר?', options: [
      { label: 'א', text: 'לדעת מספיק ואז לחכות לעוד ודאות.', type: 'sage' },
      { label: 'ב', text: 'לבנות עוד שכבה במקום להוציא גרסה ראשונה.', type: 'builder' },
      { label: 'ג', text: 'להתחיל באש ואז להיעלם בתחזוקה.', type: 'creator' },
      { label: 'ד', text: 'לתת יותר תמיכה ממה שאני מתמחר או מבקש בחזרה.', type: 'connector' },
      { label: 'ה', text: 'להחליף כיוון כשמשהו מתחיל להיות אמיתי.', type: 'hunter' },
    ]},
    en: { text: 'What old pattern is starting to cost you?', options: [
      { label: 'A', text: 'Knowing enough — then waiting for more certainty before acting.', type: 'sage' },
      { label: 'B', text: 'Adding another layer instead of shipping a first version.', type: 'builder' },
      { label: 'C', text: 'Starting with fire, then disappearing when the work becomes maintenance.', type: 'creator' },
      { label: 'D', text: 'Giving more support than I price or receive in return.', type: 'connector' },
      { label: 'E', text: 'Changing direction just when something starts becoming real.', type: 'hunter' },
    ]},
  },

  // ── Stage 3 ───────────────────────────────────────────────

  { id: 17, stage: 3,
    he: { text: 'הבטחת לעצמך להתחיל מחר. מחר הגיע. מה באמת נכנס בדרך?', options: [
      { label: 'א', text: 'אני רוצה להבין עוד קצת לפני שאעשה משהו נראה לעין.', type: 'sage' },
      { label: 'ב', text: 'אני מרגיש שזה עדיין לא מספיק מסודר כדי להתחיל.', type: 'builder' },
      { label: 'ג', text: 'אני לא מרגיש את האנרגיה שהייתה לי אתמול.', type: 'creator' },
      { label: 'ד', text: 'אני צריך שמישהו יראה אותי או יחזיק איתי את ההתחלה.', type: 'connector' },
      { label: 'ה', text: 'קפץ לי כיוון אחר שנראה פתאום חכם יותר.', type: 'hunter' },
    ]},
    en: { text: 'You promised yourself you\'d start tomorrow. Tomorrow arrives. What actually gets in the way?', options: [
      { label: 'A', text: 'I want to understand a little more before I do something visible.', type: 'sage' },
      { label: 'B', text: 'It still doesn\'t feel organized enough to begin.', type: 'builder' },
      { label: 'C', text: 'I don\'t have the energy I felt yesterday.', type: 'creator' },
      { label: 'D', text: 'I need someone to witness the start with me.', type: 'connector' },
      { label: 'E', text: 'A different direction appeared that suddenly seems smarter.', type: 'hunter' },
    ]},
  },

  { id: 18, stage: 3,
    he: { text: 'מישהו מציע לעזור לך. מה התגובה הפנימית הראשונה שלך?', options: [
      { label: 'א', text: 'אני רוצה לדעת אם הוא באמת מבין את הבעיה.', type: 'sage' },
      { label: 'ב', text: 'אני מיד חושב איך לחלק תפקידים וסדר.', type: 'builder' },
      { label: 'ג', text: 'אני מתרגש, אבל חושש שזה יהרוס את החופש שלי.', type: 'creator' },
      { label: 'ד', text: 'אני מרגיש הקלה — אולי לא אצטרך להחזיק הכול לבד.', type: 'connector' },
      { label: 'ה', text: 'אני בודק אם הוא יכול לפתוח לי דלת או לקצר דרך.', type: 'hunter' },
    ]},
    en: { text: 'Someone offers to help you. What\'s your first internal reaction?', options: [
      { label: 'A', text: 'I want to know if they truly understand the problem.', type: 'sage' },
      { label: 'B', text: 'I immediately start thinking about how to divide roles and structure.', type: 'builder' },
      { label: 'C', text: 'I get excited — but worried it will limit my freedom.', type: 'creator' },
      { label: 'D', text: 'Relief. Maybe I won\'t have to carry everything alone.', type: 'connector' },
      { label: 'E', text: 'I check whether they can open a door or shorten a path for me.', type: 'hunter' },
    ]},
  },

  { id: 19, stage: 3,
    he: { text: 'אתה צריך להראות למישהו עבודה לא גמורה. מה קורה לך בגוף?', options: [
      { label: 'א', text: 'מתכווץ לי כי עוד לא הסברתי את זה מספיק טוב.', type: 'sage' },
      { label: 'ב', text: 'אני רוצה לתקן עוד כמה דברים לפני שיראו.', type: 'builder' },
      { label: 'ג', text: 'אני חושש שזה לא יעביר את התחושה שרציתי.', type: 'creator' },
      { label: 'ד', text: 'אני מחפש סימן שהוא איתי ולא שופט אותי.', type: 'connector' },
      { label: 'ה', text: 'אני מוכן להראות אם זה יקדם החלטה מהירה.', type: 'hunter' },
    ]},
    en: { text: 'You need to show someone unfinished work. What happens in your body?', options: [
      { label: 'A', text: 'A tightening — I haven\'t explained it well enough yet.', type: 'sage' },
      { label: 'B', text: 'An urge to fix a few more things before anyone sees it.', type: 'builder' },
      { label: 'C', text: 'Worry that it won\'t convey the feeling I intended.', type: 'creator' },
      { label: 'D', text: 'I scan for a sign that they\'re with me and not judging.', type: 'connector' },
      { label: 'E', text: 'Readiness — if it moves a decision forward, let\'s go.', type: 'hunter' },
    ]},
  },

  { id: 20, stage: 3,
    he: { text: 'הזדמנות חדשה מופיעה בזמן שאתה כבר בונה משהו. מה מפתה אותך?', options: [
      { label: 'א', text: 'אולי היא מסבירה טוב יותר את מה שניסיתי להבין.', type: 'sage' },
      { label: 'ב', text: 'אולי יש בה מבנה נקי יותר ממה שבניתי.', type: 'builder' },
      { label: 'ג', text: 'אולי היא תחזיר לי את ההתרגשות שאבדה.', type: 'creator' },
      { label: 'ד', text: 'אולי שם יהיו האנשים הנכונים יותר.', type: 'connector' },
      { label: 'ה', text: 'אולי זה החלון האמיתי, ואם לא אזוז אפספס.', type: 'hunter' },
    ]},
    en: { text: 'A new opportunity appears while you\'re already building something. What tempts you?', options: [
      { label: 'A', text: 'Maybe it explains better what I was trying to understand.', type: 'sage' },
      { label: 'B', text: 'Maybe it has a cleaner structure than what I\'ve been building.', type: 'builder' },
      { label: 'C', text: 'Maybe it will bring back the excitement I\'ve been missing.', type: 'creator' },
      { label: 'D', text: 'Maybe the right people are over there.', type: 'connector' },
      { label: 'E', text: 'Maybe this is the real window — and if I don\'t move, I\'ll miss it.', type: 'hunter' },
    ]},
  },

  { id: 21, stage: 3,
    he: { text: 'קיבלת לא ישיר. מה אתה עושה אחר כך?', options: [
      { label: 'א', text: 'מנסה להבין מה בדיוק לא היה ברור או מדויק.', type: 'sage' },
      { label: 'ב', text: 'בודק מה צריך לשפר במבנה או בהצעה.', type: 'builder' },
      { label: 'ג', text: 'נפגע רגע, ואז צריך להחזיר לעצמי את הקול.', type: 'creator' },
      { label: 'ד', text: 'לוקח את זה אישי יותר ממה שהייתי רוצה להודות.', type: 'connector' },
      { label: 'ה', text: 'עובר מהר לאפשרות הבאה כדי לא להיתקע.', type: 'hunter' },
    ]},
    en: { text: 'You received an indirect \'no\'. What do you do next?', options: [
      { label: 'A', text: 'Try to understand exactly what wasn\'t clear or precise.', type: 'sage' },
      { label: 'B', text: 'Check what needs to improve in the structure or the offer.', type: 'builder' },
      { label: 'C', text: 'Absorb the hit — then work to reclaim my voice.', type: 'creator' },
      { label: 'D', text: 'Take it more personally than I\'d like to admit.', type: 'connector' },
      { label: 'E', text: 'Move quickly to the next option to avoid getting stuck.', type: 'hunter' },
    ]},
  },

  { id: 22, stage: 3,
    he: { text: 'יש לך שעתיים של פוקוס נקי. למה אתה משתמש בהן טבעית?', options: [
      { label: 'א', text: 'לזקק רעיון, לכתוב, להסביר או להבין לעומק.', type: 'sage' },
      { label: 'ב', text: 'לבנות, לסדר, לתקן או ליצור תהליך.', type: 'builder' },
      { label: 'ג', text: 'ליצור משהו שאפשר להרגיש — טקסט, תוכן, רעיון, וידאו.', type: 'creator' },
      { label: 'ד', text: 'לדבר עם אדם נכון, לחבר בין אנשים או לפתוח מרחב.', type: 'connector' },
      { label: 'ה', text: 'לבדוק הזדמנות, לשלוח הודעות, להשוות אפשרויות או לזוז.', type: 'hunter' },
    ]},
    en: { text: 'You have two hours of clean focus. What do you naturally use them for?', options: [
      { label: 'A', text: 'Distilling an idea, writing, explaining, or understanding something deeply.', type: 'sage' },
      { label: 'B', text: 'Building, organizing, fixing, or creating a repeatable process.', type: 'builder' },
      { label: 'C', text: 'Creating something felt — text, content, a concept, a video.', type: 'creator' },
      { label: 'D', text: 'Talking with the right person, connecting people, or opening a space.', type: 'connector' },
      { label: 'E', text: 'Scanning an opportunity, sending messages, comparing options, moving.', type: 'hunter' },
    ]},
  },

  { id: 23, stage: 3,
    he: { text: 'איזה לחץ גורם לך להיעלם?', options: [
      { label: 'א', text: 'לחץ לענות מהר לפני שהבנתי באמת.', type: 'sage' },
      { label: 'ב', text: 'לחץ להוציא משהו כשהוא עדיין מבולגן.', type: 'builder' },
      { label: 'ג', text: 'לחץ להיות נוכח ומעניין כל הזמן.', type: 'creator' },
      { label: 'ד', text: 'לחץ רגשי מאנשים שצריכים ממני יותר מדי.', type: 'connector' },
      { label: 'ה', text: 'לחץ להתחייב למסלול אחד מוקדם מדי.', type: 'hunter' },
    ]},
    en: { text: 'What pressure makes you disappear?', options: [
      { label: 'A', text: 'Pressure to answer quickly before I\'ve truly understood.', type: 'sage' },
      { label: 'B', text: 'Pressure to release something when it\'s still messy.', type: 'builder' },
      { label: 'C', text: 'Pressure to be present and interesting all the time.', type: 'creator' },
      { label: 'D', text: 'Emotional weight from people who need too much from me.', type: 'connector' },
      { label: 'E', text: 'Pressure to commit to one path too early.', type: 'hunter' },
    ]},
  },

  { id: 24, stage: 3,
    he: { text: 'מה גורם לך להרגיש כוח שקט?', options: [
      { label: 'א', text: 'כשאני מבין משהו שאחרים עוד לא ניסחו.', type: 'sage' },
      { label: 'ב', text: 'כשאני רואה מערכת מתחילה לעבוד בלי דרמה.', type: 'builder' },
      { label: 'ג', text: 'כשאני אומר משהו אמיתי ומישהו מרגיש את זה.', type: 'creator' },
      { label: 'ד', text: 'כשנוצר אמון בחדר ואנשים נפתחים.', type: 'connector' },
      { label: 'ה', text: 'כשאני מזהה תזמון ופועל בזמן.', type: 'hunter' },
    ]},
    en: { text: 'What gives you a sense of quiet power?', options: [
      { label: 'A', text: 'When I understand something others haven\'t articulated yet.', type: 'sage' },
      { label: 'B', text: 'When I see a system beginning to work without drama.', type: 'builder' },
      { label: 'C', text: 'When I say something true and someone actually feels it.', type: 'creator' },
      { label: 'D', text: 'When trust forms in a room and people start to open up.', type: 'connector' },
      { label: 'E', text: 'When I identify the right timing and move in time.', type: 'hunter' },
    ]},
  },

  // ── Stage 4 ───────────────────────────────────────────────

  { id: 25, stage: 4,
    he: { text: 'איזה משפט לא נוח כי אולי הוא נכון?', options: [
      { label: 'א', text: 'אני משתמש בעומק לפעמים כדי לא לצאת החוצה.', type: 'sage' },
      { label: 'ב', text: 'אני משתמש במקצועיות לפעמים כדי לא להישפט.', type: 'builder' },
      { label: 'ג', text: 'אני קורא לחוסר עקביות חופש.', type: 'creator' },
      { label: 'ד', text: 'אני קורא לצורך באישור קשר.', type: 'connector' },
      { label: 'ה', text: 'אני קורא לבריחה הזדמנות.', type: 'hunter' },
    ]},
    en: { text: 'What uncomfortable sentence might actually be true about you?', options: [
      { label: 'A', text: 'I use depth sometimes to avoid going public.', type: 'sage' },
      { label: 'B', text: 'I use professionalism sometimes to avoid being judged.', type: 'builder' },
      { label: 'C', text: 'I call inconsistency freedom.', type: 'creator' },
      { label: 'D', text: 'I call needing approval connection.', type: 'connector' },
      { label: 'E', text: 'I call escape opportunity.', type: 'hunter' },
    ]},
  },

  { id: 26, stage: 4,
    he: { text: 'למה נמאס לך לקרוא ״לא מוכן״?', options: [
      { label: 'א', text: 'למחשבה שכבר ברורה מספיק כדי לבדוק אותה.', type: 'sage' },
      { label: 'ב', text: 'לגרסה ראשונה שאנשים כבר יכולים להשתמש בה.', type: 'builder' },
      { label: 'ג', text: 'למסר שמרגיש רגיל רק כי הוא אמיתי.', type: 'creator' },
      { label: 'ד', text: 'לבקשה נקייה שאני מפחד לבקש.', type: 'connector' },
      { label: 'ה', text: 'לכיוון לא מושלם אבל חי.', type: 'hunter' },
    ]},
    en: { text: 'What are you tired of calling \'not ready\'?', options: [
      { label: 'A', text: 'A thought that\'s already clear enough to test.', type: 'sage' },
      { label: 'B', text: 'A first version people could already use.', type: 'builder' },
      { label: 'C', text: 'A message that only feels ordinary because it\'s authentic.', type: 'creator' },
      { label: 'D', text: 'A clean ask I keep being afraid to make.', type: 'connector' },
      { label: 'E', text: 'An imperfect but alive direction.', type: 'hunter' },
    ]},
  },

  { id: 27, stage: 4,
    he: { text: 'איפה אתה מבלבל חופש עם הימנעות?', options: [
      { label: 'א', text: 'כשאני נשאר בלמידה במקום לבחור ניסוח ולצאת.', type: 'sage' },
      { label: 'ב', text: 'כשאני ממשיך לשפר במקום לתת למציאות להגיב.', type: 'builder' },
      { label: 'ג', text: 'כשאני מחכה להשראה במקום לחזור על מה שחשוב.', type: 'creator' },
      { label: 'ד', text: 'כשאני לא מבקש כדי לא להרגיש תלוי.', type: 'connector' },
      { label: 'ה', text: 'כשאני משאיר הכול פתוח ולכן שום דבר לא מצטבר.', type: 'hunter' },
    ]},
    en: { text: 'Where do you confuse freedom with avoidance?', options: [
      { label: 'A', text: 'When I stay in learning mode instead of choosing a frame and going public.', type: 'sage' },
      { label: 'B', text: 'When I keep improving instead of letting reality respond.', type: 'builder' },
      { label: 'C', text: 'When I wait for inspiration instead of repeating what already matters.', type: 'creator' },
      { label: 'D', text: 'When I don\'t ask because I don\'t want to feel dependent.', type: 'connector' },
      { label: 'E', text: 'When I leave everything open so nothing ever compounds.', type: 'hunter' },
    ]},
  },

  { id: 28, stage: 4,
    he: { text: 'מה יהפוך את החיים שלך לכנים יותר תוך 30 יום?', options: [
      { label: 'א', text: 'לפרסם הסבר אחד לפני שהוא מושלם.', type: 'sage' },
      { label: 'ב', text: 'להוציא גרסה פשוטה במקום לבנות עוד שכבה.', type: 'builder' },
      { label: 'ג', text: 'לחזור על מסר אחד גם אחרי שהניצוץ יורד.', type: 'creator' },
      { label: 'ד', text: 'לבקש עזרה, כסף או מחויבות בלי להתנצל.', type: 'connector' },
      { label: 'ה', text: 'לבחור מסלול אחד ולמדוד אותו לפני שאני קופץ הלאה.', type: 'hunter' },
    ]},
    en: { text: 'What would make your life more honest within 30 days?', options: [
      { label: 'A', text: 'Publishing one explanation before it\'s perfect.', type: 'sage' },
      { label: 'B', text: 'Shipping a simple version instead of adding another layer.', type: 'builder' },
      { label: 'C', text: 'Repeating one message even after the initial spark is gone.', type: 'creator' },
      { label: 'D', text: 'Asking for help, money, or commitment without apologizing.', type: 'connector' },
      { label: 'E', text: 'Choosing one path and measuring it before jumping elsewhere.', type: 'hunter' },
    ]},
  },

  { id: 29, stage: 4,
    he: { text: 'מה כדאי שתפסיק להוסיף?', options: [
      { label: 'א', text: 'עוד הסברים לפני פעולה ראשונה.', type: 'sage' },
      { label: 'ב', text: 'עוד פיצ׳רים לפני שמישהו השתמש בזה.', type: 'builder' },
      { label: 'ג', text: 'עוד סגנון לפני שיש מסר עקבי.', type: 'creator' },
      { label: 'ד', text: 'עוד נתינה לפני שיש גבול או מחיר.', type: 'connector' },
      { label: 'ה', text: 'עוד אפשרויות לפני שבדקתי אחת עד הסוף.', type: 'hunter' },
    ]},
    en: { text: 'What should you stop adding?', options: [
      { label: 'A', text: 'More explanations before first action.', type: 'sage' },
      { label: 'B', text: 'More features before anyone has used what\'s already there.', type: 'builder' },
      { label: 'C', text: 'More style before there\'s a consistent message.', type: 'creator' },
      { label: 'D', text: 'More giving before there\'s a boundary or a price.', type: 'connector' },
      { label: 'E', text: 'More options before testing one all the way through.', type: 'hunter' },
    ]},
  },

  { id: 30, stage: 4,
    he: { text: 'למה כדאי שתפסיק לחכות?', options: [
      { label: 'א', text: 'לוודאות מלאה.', type: 'sage' },
      { label: 'ב', text: 'לגרסה מושלמת.', type: 'builder' },
      { label: 'ג', text: 'לרגע שבו תמיד יהיה לי חשק.', type: 'creator' },
      { label: 'ד', text: 'לאישור שכולם איתי.', type: 'connector' },
      { label: 'ה', text: 'להזדמנות שלא דורשת בחירה.', type: 'hunter' },
    ]},
    en: { text: 'What should you stop waiting for?', options: [
      { label: 'A', text: 'Full certainty.', type: 'sage' },
      { label: 'B', text: 'The perfect version.', type: 'builder' },
      { label: 'C', text: 'A moment when I\'ll always feel like it.', type: 'creator' },
      { label: 'D', text: 'Everyone\'s approval.', type: 'connector' },
      { label: 'E', text: 'An opportunity that doesn\'t require choosing.', type: 'hunter' },
    ]},
  },

  { id: 31, stage: 4,
    he: { text: 'איזו בחירה גם תפחיד אותך וגם תקל עליך?', options: [
      { label: 'א', text: 'לבחור רעיון אחד ולהסביר אותו בפומבי.', type: 'sage' },
      { label: 'ב', text: 'להוציא גרסה קטנה ולתת לאנשים להשתמש בה.', type: 'builder' },
      { label: 'ג', text: 'להיות מזוהה עם נושא אחד לתקופה.', type: 'creator' },
      { label: 'ד', text: 'להציע לאנשים להיכנס לתהליך בתשלום.', type: 'connector' },
      { label: 'ה', text: 'לסגור 30 יום על כיוון אחד בלי לברוח.', type: 'hunter' },
    ]},
    en: { text: 'What choice would both scare you and relieve you?', options: [
      { label: 'A', text: 'Choosing one idea and explaining it publicly.', type: 'sage' },
      { label: 'B', text: 'Shipping a small version and letting people actually use it.', type: 'builder' },
      { label: 'C', text: 'Being identified with one topic for a defined period.', type: 'creator' },
      { label: 'D', text: 'Inviting people into a paid process.', type: 'connector' },
      { label: 'E', text: 'Committing to one direction for 30 days without escaping.', type: 'hunter' },
    ]},
  },

  { id: 32, stage: 4,
    he: { text: 'מה אתה כבר יודע, אבל עדיין מתמקח איתו?', options: [
      { label: 'א', text: 'שאני יודע מספיק כדי להתחיל לבדוק.', type: 'sage' },
      { label: 'ב', text: 'שזה לא צריך להיות מושלם כדי להיות שימושי.', type: 'builder' },
      { label: 'ג', text: 'שבלי חזרתיות הקול שלי לא יצטבר.', type: 'creator' },
      { label: 'ד', text: 'שאמון לא יהפוך להכנסה אם לא אבקש.', type: 'connector' },
      { label: 'ה', text: 'שחופש יגיע מבחירה, לא מעוד אפשרויות.', type: 'hunter' },
    ]},
    en: { text: 'What do you already know, but keep negotiating with yourself about?', options: [
      { label: 'A', text: 'That I know enough to start testing.', type: 'sage' },
      { label: 'B', text: 'That it doesn\'t need to be perfect to be useful.', type: 'builder' },
      { label: 'C', text: 'That without consistency, my voice won\'t compound.', type: 'creator' },
      { label: 'D', text: 'That trust won\'t become income if I don\'t ask.', type: 'connector' },
      { label: 'E', text: 'That freedom comes from choosing — not from more options.', type: 'hunter' },
    ]},
  },

  // ── Stage 5 (16 questions) ────────────────────────────────

  { id: 33, stage: 5,
    he: { text: 'איזה מסלול אונליין מרגיש הכי פחות מזויף?', options: [
      { label: 'א', text: 'להסביר, ללמד, לכתוב או למפות בעיה שאנשים באמת מרגישים.', type: 'sage' },
      { label: 'ב', text: 'לבנות כלי, טמפלט או מערכת שחוסכים זמן וכאב.', type: 'builder' },
      { label: 'ג', text: 'ליצור תוכן או חוויה סביב קול אישי שאנשים מזהים.', type: 'creator' },
      { label: 'ד', text: 'להוביל קבוצה, קהילה או תהליך שמבוססים על אמון.', type: 'connector' },
      { label: 'ה', text: 'לבדוק פערי שוק, לידים, אפיליאייט או הזדמנויות במהירות.', type: 'hunter' },
    ]},
    en: { text: 'Which online path feels least fake to you?', options: [
      { label: 'A', text: 'Explaining, teaching, writing, or mapping a problem people genuinely feel.', type: 'sage' },
      { label: 'B', text: 'Building a tool, template, or system that saves real time and pain.', type: 'builder' },
      { label: 'C', text: 'Creating content or experiences around a personal voice people recognize.', type: 'creator' },
      { label: 'D', text: 'Leading a group, community, or process built on trust.', type: 'connector' },
      { label: 'E', text: 'Testing market gaps, leads, affiliate plays, or opportunities fast.', type: 'hunter' },
    ]},
  },

  { id: 34, stage: 5,
    he: { text: 'איזו הצעה ראשונה תגרום לך גאווה למכור?', options: [
      { label: 'א', text: 'אבחון, מפה, מדריך או מפגש שמייצר בהירות מיידית.', type: 'sage' },
      { label: 'ב', text: 'כלי או תהליך שחוסך לאדם עבודה, בלבול או טעויות.', type: 'builder' },
      { label: 'ג', text: 'סדנה, תוכן או מוצר שמרגישים אישיים ולא משוכפלים.', type: 'creator' },
      { label: 'ד', text: 'תהליך מונחה שבו אנשים מרגישים מוחזקים באמת.', type: 'connector' },
      { label: 'ה', text: 'גישה להזדמנות, רשימת לידים, מחקר שוק או בדיקה מהירה.', type: 'hunter' },
    ]},
    en: { text: 'What kind of first offer would make you feel proud to sell?', options: [
      { label: 'A', text: 'A diagnostic, map, guide, or session that creates immediate clarity.', type: 'sage' },
      { label: 'B', text: 'A tool or process that saves someone real work, confusion, or mistakes.', type: 'builder' },
      { label: 'C', text: 'A workshop, content product, or experience that feels personal and unreplicable.', type: 'creator' },
      { label: 'D', text: 'A guided process where people genuinely feel held and cared for.', type: 'connector' },
      { label: 'E', text: 'Access to an opportunity, a lead list, market research, or a fast test.', type: 'hunter' },
    ]},
  },

  { id: 35, stage: 5,
    he: { text: 'איזה קונה תוכל לשרת הכי טוב ראשון?', options: [
      { label: 'א', text: 'אדם מבולבל שצריך שמישהו יעשה לו סדר בראש.', type: 'sage' },
      { label: 'ב', text: 'אדם מוצף שצריך כלי ברור כדי לפעול.', type: 'builder' },
      { label: 'ג', text: 'אדם שמחפש השראה, קול או זהות שהוא מתחבר אליהם.', type: 'creator' },
      { label: 'ד', text: 'אדם שצריך אמון, ליווי ומרחב לא להישאר לבד.', type: 'connector' },
      { label: 'ה', text: 'אדם שרוצה לזהות הזדמנות ולזוז מהר יותר.', type: 'hunter' },
    ]},
    en: { text: 'Who is the first buyer you could serve best?', options: [
      { label: 'A', text: 'Someone confused who needs clarity — a map to get unstuck.', type: 'sage' },
      { label: 'B', text: 'Someone overwhelmed who needs one clear tool to start moving.', type: 'builder' },
      { label: 'C', text: 'Someone looking for inspiration, voice, or identity they can connect with.', type: 'creator' },
      { label: 'D', text: 'Someone who needs trust, guidance, and the feeling of not being alone.', type: 'connector' },
      { label: 'E', text: 'Someone who wants to spot an opportunity and move faster.', type: 'hunter' },
    ]},
  },

  { id: 36, stage: 5,
    he: { text: 'איזה נכס תוכל לתחזק שנים?', options: [
      { label: 'א', text: 'גוף ידע: מאמרים, מפות, מדריכים, מחקר או ניוזלטר.', type: 'sage' },
      { label: 'ב', text: 'ספריית טמפלטים, כלים, תהליכים או אוטומציות.', type: 'builder' },
      { label: 'ג', text: 'קהל סביב נושא רגשי, סגנון אישי או סיפור מתמשך.', type: 'creator' },
      { label: 'ד', text: 'קהילה, מעגל, קבוצת עומק או תהליך חוזר.', type: 'connector' },
      { label: 'ה', text: 'מנוע לידים, הפצה, דילים, מחקר קריפטו או פערי שוק.', type: 'hunter' },
    ]},
    en: { text: 'What kind of asset could you genuinely maintain for years?', options: [
      { label: 'A', text: 'A knowledge body: articles, maps, guides, research, or a newsletter.', type: 'sage' },
      { label: 'B', text: 'A library of templates, tools, processes, or automations.', type: 'builder' },
      { label: 'C', text: 'An audience built around an emotional theme, personal style, or ongoing story.', type: 'creator' },
      { label: 'D', text: 'A community, circle, or recurring guided process.', type: 'connector' },
      { label: 'E', text: 'A lead engine, distribution system, deals flow, or opportunity research.', type: 'hunter' },
    ]},
  },

  { id: 37, stage: 5,
    he: { text: 'מאיזה מסלול עדיף שלא תתחיל?', options: [
      { label: 'א', text: 'מסלול שדורש ממני ודאות אינסופית לפני כל פעולה.', type: 'sage' },
      { label: 'ב', text: 'מסלול שבו אבנה חודשים לפני שמישהו ישלם או ישתמש.', type: 'builder' },
      { label: 'ג', text: 'מסלול שמכריח אותי להיחשף כל יום בלי התאוששות.', type: 'creator' },
      { label: 'ד', text: 'מסלול שבו כולם מקבלים ממני אנרגיה רגשית בחינם.', type: 'connector' },
      { label: 'ה', text: 'מסלול שהופך כל רעיון נוצץ להתחלה חדשה.', type: 'hunter' },
    ]},
    en: { text: 'What path is better not to start from?', options: [
      { label: 'A', text: 'One that demands infinite certainty before every move.', type: 'sage' },
      { label: 'B', text: 'One where I\'ll build for months before anyone pays or uses anything.', type: 'builder' },
      { label: 'C', text: 'One that forces me to perform publicly every single day without recovery.', type: 'creator' },
      { label: 'D', text: 'One where everyone receives my emotional energy at no cost or boundary.', type: 'connector' },
      { label: 'E', text: 'One that turns every new idea into a fresh start.', type: 'hunter' },
    ]},
  },

  { id: 38, stage: 5,
    he: { text: 'אם כסף יגיע דרך תוכן, איזה תוכן לא ירוקן אותך?', options: [
      { label: 'א', text: 'תוכן שמסביר לעומק ומזקק בלבול אמיתי.', type: 'sage' },
      { label: 'ב', text: 'תוכן שמראה תהליך, כלי, לפני־אחרי או שיטה.', type: 'builder' },
      { label: 'ג', text: 'תוכן אישי, חי, עם קול ברור ורגש אמיתי.', type: 'creator' },
      { label: 'ד', text: 'תוכן שמייצר שיחה, אמון ותחושת יחד.', type: 'connector' },
      { label: 'ה', text: 'תוכן שמזהה טרנד, הזדמנות או מהלך בזמן אמת.', type: 'hunter' },
    ]},
    en: { text: 'If money came through content, what kind wouldn\'t drain you?', options: [
      { label: 'A', text: 'Content that explains in depth and distills real confusion.', type: 'sage' },
      { label: 'B', text: 'Content that shows a process, tool, before-and-after, or method.', type: 'builder' },
      { label: 'C', text: 'Personal, alive content with a clear voice and authentic emotion.', type: 'creator' },
      { label: 'D', text: 'Content that creates dialogue, trust, and a sense of being together.', type: 'connector' },
      { label: 'E', text: 'Content that identifies trends, opportunities, or moves in real time.', type: 'hunter' },
    ]},
  },

  { id: 39, stage: 5,
    he: { text: 'אם כסף יגיע דרך השקעות, איזה תפקיד מתאים לך?', options: [
      { label: 'א', text: 'חוקר שמזקק רעיונות מורכבים לתזה ברורה.', type: 'sage' },
      { label: 'ב', text: 'בונה תהליך השקעה עקבי עם כללים ומעקב.', type: 'builder' },
      { label: 'ג', text: 'מסביר ציבורי שהופך למידה לתוכן נגיש.', type: 'creator' },
      { label: 'ד', text: 'מחנך שעוזר לאחרים להישאר רגועים ולא לפעול מפחד.', type: 'connector' },
      { label: 'ה', text: 'מחפש סיגנלים שפועל רק עם חוקים קשיחים וניהול סיכון.', type: 'hunter' },
    ]},
    en: { text: 'If money came through investing, which role would fit you?', options: [
      { label: 'A', text: 'Researcher who distills complex ideas into a clear thesis.', type: 'sage' },
      { label: 'B', text: 'Process builder who creates consistent rules, tracking, and discipline.', type: 'builder' },
      { label: 'C', text: 'Public educator who turns learning into accessible, engaging content.', type: 'creator' },
      { label: 'D', text: 'Coach who helps others stay calm and not act from fear.', type: 'connector' },
      { label: 'E', text: 'Signal reader who moves only with strict rules and risk management.', type: 'hunter' },
    ]},
  },

  { id: 40, stage: 5,
    he: { text: 'מה מהלך הכסף הראשון שלך ל־30 יום?', options: [
      { label: 'א', text: 'להפוך בלבול אחד לנכס ידע קטן בתשלום.', type: 'sage' },
      { label: 'ב', text: 'לבנות כלי שימושי קטן ולבדוק אם אנשים משלמים עליו.', type: 'builder' },
      { label: 'ג', text: 'לפרסם נושא אחד בעקביות ולחבר אליו הצעה פשוטה.', type: 'creator' },
      { label: 'ד', text: 'להזמין 10 אנשים לפיילוט קטן בתשלום.', type: 'connector' },
      { label: 'ה', text: 'לבדוק הזדמנות צרה אחת עם יעד, חוקים ומדידה.', type: 'hunter' },
    ]},
    en: { text: 'What is your first real money move for the next 30 days?', options: [
      { label: 'A', text: 'Turn one real confusion into a small paid knowledge asset.', type: 'sage' },
      { label: 'B', text: 'Build one useful tool or template — then sell it before improving it.', type: 'builder' },
      { label: 'C', text: 'Publish one topic consistently and attach a simple offer to it.', type: 'creator' },
      { label: 'D', text: 'Invite 10 people into a small paid pilot.', type: 'connector' },
      { label: 'E', text: 'Test one narrow opportunity with a target, rules, and measurement.', type: 'hunter' },
    ]},
  },

  { id: 41, stage: 5,
    he: { text: 'איזה סימן יראה לך שאתה במסלול הנכון?', options: [
      { label: 'א', text: 'אנשים אומרים שהם מבינים את עצמם או את הבעיה טוב יותר.', type: 'sage' },
      { label: 'ב', text: 'אנשים משתמשים במה שבנית וחוזרים אליו שוב.', type: 'builder' },
      { label: 'ג', text: 'אנשים מגיבים לקול שלך כאילו הוא אומר משהו שהם הרגישו.', type: 'creator' },
      { label: 'ד', text: 'אנשים נשארים בקשר כי נוצר אמון אמיתי.', type: 'connector' },
      { label: 'ה', text: 'אנשים מקבלים ממך סיגנל או פתח פעולה שהם לא ראו לבד.', type: 'hunter' },
    ]},
    en: { text: 'What sign would show you that you\'re on the right path?', options: [
      { label: 'A', text: 'People say they understand themselves or the problem better.', type: 'sage' },
      { label: 'B', text: 'People use what I built and come back to it.', type: 'builder' },
      { label: 'C', text: 'People respond to my voice as if it says something they\'d been feeling.', type: 'creator' },
      { label: 'D', text: 'People stay in touch because real trust was built.', type: 'connector' },
      { label: 'E', text: 'People get a signal or opening from me that they couldn\'t have seen alone.', type: 'hunter' },
    ]},
  },

  { id: 42, stage: 5,
    he: { text: 'מה יהיה סימן אזהרה שאתה במסלול לא נכון?', options: [
      { label: 'א', text: 'אני ממשיך ללמוד אבל לא מוציא שום דבר החוצה.', type: 'sage' },
      { label: 'ב', text: 'אני בונה ובונה בלי שאף אדם אמיתי משתמש בזה.', type: 'builder' },
      { label: 'ג', text: 'אני חייב לייצר נראות כל הזמן ומרגיש שאני מתרוקן.', type: 'creator' },
      { label: 'ד', text: 'אני הופך למיכל רגשי של אחרים בלי גבולות או מחיר.', type: 'connector' },
      { label: 'ה', text: 'אני קופץ בין הזדמנויות ולא נותן לדבר אחד להצטבר.', type: 'hunter' },
    ]},
    en: { text: 'What would be a warning sign you\'re on the wrong path?', options: [
      { label: 'A', text: 'I keep learning but nothing ever goes out.', type: 'sage' },
      { label: 'B', text: 'I keep building but no real person is actually using any of it.', type: 'builder' },
      { label: 'C', text: 'I have to perform publicly every day and I\'m running on empty.', type: 'creator' },
      { label: 'D', text: 'I\'m an emotional container for others with no boundaries and no price.', type: 'connector' },
      { label: 'E', text: 'I keep jumping between opportunities and nothing compounds.', type: 'hunter' },
    ]},
  },

  { id: 43, stage: 5,
    he: { text: 'איזה סוג הכנסה פסיבית הכי הגיוני להתחיל לבנות?', options: [
      { label: 'א', text: 'נכס ידע שאפשר למכור שוב ושוב.', type: 'sage' },
      { label: 'ב', text: 'כלי, טמפלט או מערכת שאנשים משתמשים בהם לבד.', type: 'builder' },
      { label: 'ג', text: 'תוכן או מוצר סביב קהל שכבר מתחבר לקול שלי.', type: 'creator' },
      { label: 'ד', text: 'קהילה או מנוי שיש בהם ערך מתמשך.', type: 'connector' },
      { label: 'ה', text: 'מנוע לידים, הפצה, אפיליאייט או מחקר הזדמנויות.', type: 'hunter' },
    ]},
    en: { text: 'What type of passive income makes the most sense to start building?', options: [
      { label: 'A', text: 'A knowledge asset that can be sold again and again.', type: 'sage' },
      { label: 'B', text: 'A tool, template, or system people use independently.', type: 'builder' },
      { label: 'C', text: 'A content product or audience built around a recognized voice.', type: 'creator' },
      { label: 'D', text: 'A community or subscription with ongoing value.', type: 'connector' },
      { label: 'E', text: 'A lead engine, distribution, affiliate, or opportunity research system.', type: 'hunter' },
    ]},
  },

  { id: 44, stage: 5,
    he: { text: 'איזה שוק יהיה לך הכי טבעי להבין?', options: [
      { label: 'א', text: 'שוק שבו אנשים מבולבלים וצריכים הסבר טוב.', type: 'sage' },
      { label: 'ב', text: 'שוק שבו אנשים מוצפים וצריכים פתרון מעשי.', type: 'builder' },
      { label: 'ג', text: 'שוק שבו אנשים מחפשים קול, השראה או זהות.', type: 'creator' },
      { label: 'ד', text: 'שוק שבו אנשים צריכים אמון, שייכות וליווי.', type: 'connector' },
      { label: 'ה', text: 'שוק שבו יש פער, טרנד או הזדמנות שאפשר לבדוק מהר.', type: 'hunter' },
    ]},
    en: { text: 'What market would be most natural for you to understand?', options: [
      { label: 'A', text: 'One where people are confused and need good explanations.', type: 'sage' },
      { label: 'B', text: 'One where people are overwhelmed and need practical solutions.', type: 'builder' },
      { label: 'C', text: 'One where people seek a voice, inspiration, or identity.', type: 'creator' },
      { label: 'D', text: 'One where people need trust, belonging, and guidance.', type: 'connector' },
      { label: 'E', text: 'One with a gap, trend, or opportunity that can be tested quickly.', type: 'hunter' },
    ]},
  },

  { id: 45, stage: 5,
    he: { text: 'אם היית צריך לבחור רק ערוץ אחד לחודש הקרוב, מה היית בוחר?', options: [
      { label: 'א', text: 'כתיבה עומקית: פוסט, ניוזלטר, מדריך או מאמר.', type: 'sage' },
      { label: 'ב', text: 'בניית כלי קטן והצגתו לאנשים רלוונטיים.', type: 'builder' },
      { label: 'ג', text: 'תוכן וידאו/סטורי/פוסט עם קול אישי ברור.', type: 'creator' },
      { label: 'ד', text: 'שיחות עם אנשים והזמנה לקבוצה או תהליך קטן.', type: 'connector' },
      { label: 'ה', text: 'בדיקת שוק מהירה: הודעות, הצעות, לידים או מחקר הזדמנות.', type: 'hunter' },
    ]},
    en: { text: 'If you had to choose only one channel for the next month, what would you choose?', options: [
      { label: 'A', text: 'Deep writing: a post, newsletter, guide, or article.', type: 'sage' },
      { label: 'B', text: 'Building one useful thing and presenting it to relevant people.', type: 'builder' },
      { label: 'C', text: 'Video, story, or personal-voice content with a clear theme.', type: 'creator' },
      { label: 'D', text: 'Conversations with people and an invitation into a small group or process.', type: 'connector' },
      { label: 'E', text: 'Fast market test: messages, offers, leads, or opportunity research.', type: 'hunter' },
    ]},
  },

  { id: 46, stage: 5,
    he: { text: 'מה המוצר הראשון הכי נכון לבדוק?', options: [
      { label: 'א', text: 'מפת בהירות או אבחון קצר בתשלום.', type: 'sage' },
      { label: 'ב', text: 'טמפלט או כלי שימושי עם תוצאה ברורה.', type: 'builder' },
      { label: 'ג', text: 'סדנה או מוצר תוכן סביב נושא שמרגיש חי.', type: 'creator' },
      { label: 'ד', text: 'מעגל קטן או תהליך קבוצתי בתשלום.', type: 'connector' },
      { label: 'ה', text: 'רשימת הזדמנויות, לידים, מחקר קריפטו או בדיקת פער שוק.', type: 'hunter' },
    ]},
    en: { text: 'What\'s the most honest first product to test?', options: [
      { label: 'A', text: 'A clarity map or short paid diagnostic.', type: 'sage' },
      { label: 'B', text: 'A template or tool with a clear, tangible result.', type: 'builder' },
      { label: 'C', text: 'A workshop or content product built around something that feels alive.', type: 'creator' },
      { label: 'D', text: 'A small paid circle or guided group process.', type: 'connector' },
      { label: 'E', text: 'An opportunity list, lead research, or market gap test.', type: 'hunter' },
    ]},
  },

  { id: 47, stage: 5,
    he: { text: 'איזה תפקיד עדיף לך לקחת בתחילת הדרך?', options: [
      { label: 'א', text: 'המפשט: זה שמסביר ומזקק.', type: 'sage' },
      { label: 'ב', text: 'הבונה: זה שהופך רעיון למערכת.', type: 'builder' },
      { label: 'ג', text: 'הקול: זה שמושך תשומת לב דרך ביטוי.', type: 'creator' },
      { label: 'ד', text: 'המחבר: זה שמחזיק אמון ואנשים.', type: 'connector' },
      { label: 'ה', text: 'הצייד: זה שמוצא פתחים ומניע בדיקות.', type: 'hunter' },
    ]},
    en: { text: 'What role is best for you to take at the start?', options: [
      { label: 'A', text: 'The Clarifier — the one who explains and distills.', type: 'sage' },
      { label: 'B', text: 'The Builder — the one who turns ideas into working systems.', type: 'builder' },
      { label: 'C', text: 'The Voice — the one who attracts through authentic expression.', type: 'creator' },
      { label: 'D', text: 'The Connector — the one who holds trust and people.', type: 'connector' },
      { label: 'E', text: 'The Scout — the one who finds openings and runs the tests.', type: 'hunter' },
    ]},
  },

  { id: 48, stage: 5,
    he: { text: 'מה המשפט הכי נכון להתחיל ממנו?', options: [
      { label: 'א', text: 'אני לא צריך לדעת הכול; אני צריך להסביר דבר אחד טוב.', type: 'sage' },
      { label: 'ב', text: 'אני לא צריך לבנות אימפריה; אני צריך לבנות כלי אחד מועיל.', type: 'builder' },
      { label: 'ג', text: 'אני לא צריך להיות מושלם; אני צריך להיות חי ועקבי.', type: 'creator' },
      { label: 'ד', text: 'אני לא צריך להציל את כולם; אני צריך להציע מרחב עם גבול.', type: 'connector' },
      { label: 'ה', text: 'אני לא צריך לרדוף אחרי הכול; אני צריך לבדוק הזדמנות אחת כמו שצריך.', type: 'hunter' },
    ]},
    en: { text: 'What\'s the most honest sentence to start from?', options: [
      { label: 'A', text: 'I don\'t need to know everything — I need to explain one thing well.', type: 'sage' },
      { label: 'B', text: 'I don\'t need to build an empire — I need to build one useful thing.', type: 'builder' },
      { label: 'C', text: 'I don\'t need to be perfect — I need to be alive and consistent.', type: 'creator' },
      { label: 'D', text: 'I don\'t need to save everyone — I need to offer a real space with a real boundary.', type: 'connector' },
      { label: 'E', text: 'I don\'t need to chase everything — I need to test one opportunity properly.', type: 'hunter' },
    ]},
  },


  // ── Stage 6 — עומק הדפוס (Pattern Depth) ──────────────
  // 12 questions designed to surface combo archetype traits.
  // Questions 49–52 probe Visionary (sage+hunter) patterns.
  // Questions 53–56 probe Alchemist (sage+creator) patterns.
  // Questions 57–60 probe Sovereign (builder+connector) patterns.

  { id: 49, stage: 6,
    he: { text: 'אתה רואה הזדמנות שעוד לא נסתמה. מה קורה אצלך ראשון?', options: [
      { label: 'א', text: 'אני מנתח לעומק — מה מניע אותה, מה הסיכון האמיתי, מה ההשלכות.', type: 'sage' },
      { label: 'ב', text: 'אני מתכנן — בונה תהליך ברור להיכנס בצורה מסודרת.', type: 'builder' },
      { label: 'ג', text: 'אני מספר את הסיפור שלה — כדי לגרום לאחרים לראות מה אני רואה.', type: 'creator' },
      { label: 'ד', text: 'אני מוצא מי עוד רואה אותה ובונה שיתוף פעולה מוקדם.', type: 'connector' },
      { label: 'ה', text: 'אני בודק — שולח הצעה, מקבל תגובה, לומד תוך כדי תנועה.', type: 'hunter' },
    ]},
    en: { text: 'You see an opportunity that hasn\'t closed yet. What happens first?', options: [
      { label: 'A', text: 'I analyze deeply — what\'s driving it, what the real risk is, what the implications are.', type: 'sage' },
      { label: 'B', text: 'I plan — build a clear process to enter in an organized way.', type: 'builder' },
      { label: 'C', text: 'I tell its story — to make others see what I already see.', type: 'creator' },
      { label: 'D', text: 'I find others who see it too and build early collaboration.', type: 'connector' },
      { label: 'E', text: 'I test — send an offer, get a response, learn while moving.', type: 'hunter' },
    ]},
  },

  { id: 50, stage: 6,
    he: { text: 'מה גורם לך לדעת שהגיע הזמן לנוע?', options: [
      { label: 'א', text: 'הבנתי מספיק כדי לזוז בצורה מושכלת — התמונה ברורה לי.', type: 'sage' },
      { label: 'ב', text: 'יש לי תוכנית ותהליך מוגדר — ידעתי מה הצעד הראשון.', type: 'builder' },
      { label: 'ג', text: 'משהו מרגיש חי ואמיתי ולא עוד גרסה שלישית של אותו רעיון.', type: 'creator' },
      { label: 'ד', text: 'האנשים הנכונים מתייצבים ויש ביניהם אמון אמיתי.', type: 'connector' },
      { label: 'ה', text: 'חשתי שהחלון עומד להיסגר ולא הייתי מוכן לפספס.', type: 'hunter' },
    ]},
    en: { text: 'What tells you it\'s time to move?', options: [
      { label: 'A', text: 'I\'ve understood enough to move intelligently — the picture is clear to me.', type: 'sage' },
      { label: 'B', text: 'I have a defined plan and process — I know what the first step is.', type: 'builder' },
      { label: 'C', text: 'Something feels alive and real — not another third version of the same idea.', type: 'creator' },
      { label: 'D', text: 'The right people are showing up and there\'s genuine trust between them.', type: 'connector' },
      { label: 'E', text: 'I sensed the window was about to close and wasn\'t willing to miss it.', type: 'hunter' },
    ]},
  },

  { id: 51, stage: 6,
    he: { text: 'מה הכישרון הנסתר שהכי קשה לך לתמחר?', options: [
      { label: 'א', text: 'היכולת לראות מה מאחורי מה — לזהות את הדפוס בתוך הרעש.', type: 'sage' },
      { label: 'ב', text: 'היכולת לקחת רעיון עמום ולתרגמו למשהו שעובד ואפשר לשחזר.', type: 'builder' },
      { label: 'ג', text: 'היכולת ליצור חיבור רגשי ובהירות באותו ביטוי — שניהם יחד.', type: 'creator' },
      { label: 'ד', text: 'היכולת לגרום לאנשים שונים להרגיש שהם שייכים לאותו מקום.', type: 'connector' },
      { label: 'ה', text: 'היכולת לחוש מתי להיכנס ומתי להישאר בצד — תזמון.', type: 'hunter' },
    ]},
    en: { text: 'What hidden talent is hardest for you to put a price on?', options: [
      { label: 'A', text: 'The ability to see what\'s behind what — to find the pattern inside the noise.', type: 'sage' },
      { label: 'B', text: 'The ability to take a vague idea and translate it into something that works and repeats.', type: 'builder' },
      { label: 'C', text: 'The ability to create emotional connection and clarity in the same expression — both at once.', type: 'creator' },
      { label: 'D', text: 'The ability to make different people feel they belong to the same place.', type: 'connector' },
      { label: 'E', text: 'The ability to sense when to enter and when to stay back — timing.', type: 'hunter' },
    ]},
  },

  { id: 52, stage: 6,
    he: { text: 'כשאתה בעיצומו של פרויקט, מה מרגש אותך יותר מכל?', options: [
      { label: 'א', text: 'הרגע שהכל מתחבר לתמונה שלמה — ה"אה!" שמרגיש בלתי ניתן לתכנון.', type: 'sage' },
      { label: 'ב', text: 'הרגע שהמערכת עובדת לבד בלי שאני צריך לדחוף כל שלב.', type: 'builder' },
      { label: 'ג', text: 'הרגע שהקהל מגיב — כשמרגיש שמה שיצרתי פגע בדיוק.', type: 'creator' },
      { label: 'ד', text: 'הרגע שהאנשים בתוך הפרויקט מתחילים לבנות ביניהם בלעדי.', type: 'connector' },
      { label: 'ה', text: 'הרגע שמישהו אומר "כן" — כשאני יודע שתפסתי את הפתח.', type: 'hunter' },
    ]},
    en: { text: 'In the middle of a project, what excites you most?', options: [
      { label: 'A', text: 'The moment everything connects into a complete picture — the "aha" that can\'t be planned.', type: 'sage' },
      { label: 'B', text: 'The moment the system runs on its own without me pushing every step.', type: 'builder' },
      { label: 'C', text: 'The moment the audience responds — when what I made lands exactly right.', type: 'creator' },
      { label: 'D', text: 'The moment people inside the project start building between themselves, without me.', type: 'connector' },
      { label: 'E', text: 'The moment someone says "yes" — when I know I caught the opening.', type: 'hunter' },
    ]},
  },

  { id: 53, stage: 6,
    he: { text: 'כשאתה עיבד רעיון לאורך שבועות, מה קורה לו?', options: [
      { label: 'א', text: 'הוא מתעמק — מוסיפים שכבות, קשרים והבנות שלא היו בהתחלה.', type: 'sage' },
      { label: 'ב', text: 'הוא מתורגם לתהליך — הופך ממחשבה לדבר שניתן לבנות ולחזור עליו.', type: 'builder' },
      { label: 'ג', text: 'הוא מקבל קול — צורה, שפה ואופן הצגה שהם שלי לחלוטין.', type: 'creator' },
      { label: 'ד', text: 'הוא מתחבר לאנשים — אני מבין מי צריך אותו ואיך להגיש אותו.', type: 'connector' },
      { label: 'ה', text: 'הוא מתחיל להרגיש כבד — אני מעדיף ליישם ולמדוד מאשר להמשיך לעבד.', type: 'hunter' },
    ]},
    en: { text: 'When you\'ve been processing an idea for weeks, what happens to it?', options: [
      { label: 'A', text: 'It deepens — layers, connections, and understandings that weren\'t there at the start.', type: 'sage' },
      { label: 'B', text: 'It translates — moves from thought to something buildable and repeatable.', type: 'builder' },
      { label: 'C', text: 'It finds a voice — a form, language, and way of presenting that is entirely mine.', type: 'creator' },
      { label: 'D', text: 'It connects to people — I understand who needs it and how to present it to them.', type: 'connector' },
      { label: 'E', text: 'It starts to feel heavy — I\'d rather implement and measure than keep processing.', type: 'hunter' },
    ]},
  },

  { id: 54, stage: 6,
    he: { text: 'מה אתה מייצר שאין לו תחליף אמיתי?', options: [
      { label: 'א', text: 'מסגרת חשיבה שמארגנת עולם שלם סביב רעיון מרכזי אחד.', type: 'sage' },
      { label: 'ב', text: 'מערכת שפותרת בעיה אמיתית בצורה שאנשים אחרים לא הצליחו לבנות.', type: 'builder' },
      { label: 'ג', text: 'ביטוי שנוגע — שאנשים שמרים אותו, חוזרים אליו ומשתפים אותו.', type: 'creator' },
      { label: 'ד', text: 'מרחב שבו אנשים שלא הכירו מוצאים אמון ושייכות.', type: 'connector' },
      { label: 'ה', text: 'תנועה מדויקת בזמן הנכון — תוצאה שאחרים לא ציפו לה.', type: 'hunter' },
    ]},
    en: { text: 'What do you produce that has no real substitute?', options: [
      { label: 'A', text: 'A thinking framework that organizes an entire world around one central idea.', type: 'sage' },
      { label: 'B', text: 'A system that solves a real problem in a way others haven\'t been able to build.', type: 'builder' },
      { label: 'C', text: 'An expression that touches — that people save, return to, and share.', type: 'creator' },
      { label: 'D', text: 'A space where people who didn\'t know each other find trust and belonging.', type: 'connector' },
      { label: 'E', text: 'A precise move at the right time — a result others didn\'t expect.', type: 'hunter' },
    ]},
  },

  { id: 55, stage: 6,
    he: { text: 'מה גורם לך לדעת שעשית עבודה טובה?', options: [
      { label: 'א', text: 'כשמישהו אמר "לא ידעתי לנסח את זה — ועכשיו יש לי שפה".', type: 'sage' },
      { label: 'ב', text: 'כשהדבר עובד בלי שאני מדחוף — לבד, שוב ושוב.', type: 'builder' },
      { label: 'ג', text: 'כשמשהו שיצרתי הגיע לאנשים שלא הכרתי ועשה אותם להרגיש.', type: 'creator' },
      { label: 'ד', text: 'כשהקשר שבניתי הפך לשיתוף פעולה שחי לעצמו.', type: 'connector' },
      { label: 'ה', text: 'כשהמספרים מדברים — תפסתי הזדמנות ותרגמתי אותה לתוצאה.', type: 'hunter' },
    ]},
    en: { text: 'What makes you know you\'ve done good work?', options: [
      { label: 'A', text: 'When someone said "I couldn\'t articulate it before — now I have language for it."', type: 'sage' },
      { label: 'B', text: 'When the thing runs without me pushing — on its own, again and again.', type: 'builder' },
      { label: 'C', text: 'When something I created reached people I\'d never met and made them feel.', type: 'creator' },
      { label: 'D', text: 'When the connection I built became a collaboration that lives on its own.', type: 'connector' },
      { label: 'E', text: 'When the numbers speak — I caught the opportunity and turned it into results.', type: 'hunter' },
    ]},
  },

  { id: 56, stage: 6,
    he: { text: 'מה הנכס הכי חשוב שאתה יכול לבנות?', options: [
      { label: 'א', text: 'שיטה, מתודולוגיה, או מסגרת שאחרים ירצו לאמץ ולשלם עליה.', type: 'sage' },
      { label: 'ב', text: 'מוצר, כלי, או תהליך שחוסך זמן ומחיר לאנשים שמשתמשים בו.', type: 'builder' },
      { label: 'ג', text: 'קטלוג יצירות ובסיס עוקבים שמייצגים את הקול הייחודי שלי.', type: 'creator' },
      { label: 'ד', text: 'רשת אמון — אנשים שמוציאים זה את זה קדימה ויודעים שהם שייכים.', type: 'connector' },
      { label: 'ה', text: 'היסטוריית תוצאות שמוכיחה שאני רואה ופועל לפני השוק.', type: 'hunter' },
    ]},
    en: { text: 'What\'s the most important asset you could build?', options: [
      { label: 'A', text: 'A method, methodology, or framework that others will want to adopt and pay for.', type: 'sage' },
      { label: 'B', text: 'A product, tool, or process that saves time and money for the people who use it.', type: 'builder' },
      { label: 'C', text: 'A catalog of work and a following that represents my unique voice.', type: 'creator' },
      { label: 'D', text: 'A trust network — people who move each other forward and know they belong.', type: 'connector' },
      { label: 'E', text: 'A track record that proves I see and act before the market does.', type: 'hunter' },
    ]},
  },

  { id: 57, stage: 6,
    he: { text: 'מה מרגיש כמו הנחיל האמיתי שלך — הדבר שבאמת שייך לך?', options: [
      { label: 'א', text: 'ספרייה של ידע ורעיונות שמכווינת אנשים ומפשטת עבורם עולם.', type: 'sage' },
      { label: 'ב', text: 'מנגנון שמתפקד גם כשאני לא שם — מערכת שמחזיקה את עצמה.', type: 'builder' },
      { label: 'ג', text: 'קהל שמחפש אותי ספציפית — לא רק את התוכן, אלא אותי.', type: 'creator' },
      { label: 'ד', text: 'קהילה שסומכת עלי לחבר, לנהל ולהחזיק יחד.', type: 'connector' },
      { label: 'ה', text: 'ספר כתובות שלא מזדקן — הזדמנויות פתוחות ומגעים חשובים.', type: 'hunter' },
    ]},
    en: { text: 'What feels like your real inheritance — the thing that truly belongs to you?', options: [
      { label: 'A', text: 'A library of knowledge and ideas that guides people and simplifies the world for them.', type: 'sage' },
      { label: 'B', text: 'A mechanism that functions even when I\'m not there — a system that holds itself.', type: 'builder' },
      { label: 'C', text: 'An audience that looks for me specifically — not just the content, but me.', type: 'creator' },
      { label: 'D', text: 'A community that trusts me to connect, manage, and hold together.', type: 'connector' },
      { label: 'E', text: 'An address book that never ages — open opportunities and important contacts.', type: 'hunter' },
    ]},
  },

  { id: 58, stage: 6,
    he: { text: 'כשאתה בונה משהו, מה השם האמיתי שלו?', options: [
      { label: 'א', text: 'פלטפורמת ידע שמסדרת את מה שקיים ומציגה אותו בחדות.', type: 'sage' },
      { label: 'ב', text: 'מנוע — תהליך, מוצר, או מערכת שעושים עבודה לבד.', type: 'builder' },
      { label: 'ג', text: 'קהל שנבנה סביב הקול שלי — ולא ניתן לשכפל.', type: 'creator' },
      { label: 'ד', text: 'ארגון חי — מרחב, קהילה, שיתוף פעולה שמתרחש בתוכו.', type: 'connector' },
      { label: 'ה', text: 'פוזיציה שתפסתי לפני שאחרים ראו אותה.', type: 'hunter' },
    ]},
    en: { text: 'When you\'re building something, what\'s its real name?', options: [
      { label: 'A', text: 'A knowledge platform that organizes what exists and presents it with clarity.', type: 'sage' },
      { label: 'B', text: 'An engine — a process, product, or system that does the work on its own.', type: 'builder' },
      { label: 'C', text: 'An audience built around my voice — that can\'t be replicated.', type: 'creator' },
      { label: 'D', text: 'A living organization — a space, community, collaboration happening inside it.', type: 'connector' },
      { label: 'E', text: 'A position I captured before others saw it.', type: 'hunter' },
    ]},
  },

  { id: 59, stage: 6,
    he: { text: 'מה תרגיש כשמשהו שבנית ממשיך לגדול בלעדיך?', options: [
      { label: 'א', text: 'גאווה — הבנה שגיבשתי הפכה לכלי שאחרים מחזיקים.', type: 'sage' },
      { label: 'ב', text: 'סיפוק — המנוע שבניתי עושה את עבודתו בלי שאצטרך לדחוף.', type: 'builder' },
      { label: 'ג', text: 'עונג — הקול שלי ממשיך לנגוע בלי שאני נוכח.', type: 'creator' },
      { label: 'ד', text: 'ריגוש — האנשים שחיברתי ממשיכים לבנות יחד בלעדי.', type: 'connector' },
      { label: 'ה', text: 'ביטחון — יצאתי בזמן וכבר בדקתי הזדמנות חדשה.', type: 'hunter' },
    ]},
    en: { text: 'What will you feel when something you built keeps growing without you?', options: [
      { label: 'A', text: 'Pride — an understanding I crystallized became a tool others now hold.', type: 'sage' },
      { label: 'B', text: 'Satisfaction — the engine I built does its work without me needing to push.', type: 'builder' },
      { label: 'C', text: 'Pleasure — my voice keeps touching people without me being present.', type: 'creator' },
      { label: 'D', text: 'Excitement — the people I connected keep building together without me.', type: 'connector' },
      { label: 'E', text: 'Confidence — I exited at the right time and have already tested a new opportunity.', type: 'hunter' },
    ]},
  },

  { id: 60, stage: 6,
    he: { text: 'מה אתה מציע שאחרים לא יכולים לתת?', options: [
      { label: 'א', text: 'בהירות שמגיעה מהבנה — לא מסיסמאות ולא מניסיון שטחי.', type: 'sage' },
      { label: 'ב', text: 'מבנה שעובד — לא רק רעיון יפה, אלא מערכת שניתן להפעיל.', type: 'builder' },
      { label: 'ג', text: 'קול שהוא שלי בלבד — שאי אפשר להעתיק ולא ניתן להחליף.', type: 'creator' },
      { label: 'ד', text: 'שייכות ואמון — לגרום לאנשים להרגיש בבית בתוך מה שבניתי.', type: 'connector' },
      { label: 'ה', text: 'עיניים שרואות — הזדמנויות שאחרים עוד לא מזהים.', type: 'hunter' },
    ]},
    en: { text: 'What do you offer that others cannot give?', options: [
      { label: 'A', text: 'Clarity born from understanding — not slogans, not surface-level experience.', type: 'sage' },
      { label: 'B', text: 'Structure that works — not just a good idea, but a system that can be run.', type: 'creator' },
      { label: 'C', text: 'A voice that is solely mine — impossible to copy, impossible to replace.', type: 'creator' },
      { label: 'D', text: 'Belonging and trust — making people feel at home inside what I\'ve built.', type: 'connector' },
      { label: 'E', text: 'Eyes that see — opportunities others haven\'t identified yet.', type: 'hunter' },
    ]},
  },

];
export function classifyArchetype(scores) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (!sorted.length) return 'sage';
  const [first, second] = sorted;
  const gap = first[1] - (second?.[1] ?? 0);

  if (gap <= 4 && second?.[0]) {
    const pair = [first[0], second[0]].sort().join('+');
    const combos = {
      'hunter+sage':       'visionary',
      'creator+sage':      'alchemist',
      'connector+sage':    'alchemist',
      'builder+connector': 'sovereign',
      'builder+hunter':    'visionary',
      'connector+creator': 'sovereign',
    };
    if (combos[pair]) return combos[pair];
  }
  return first[0];
}

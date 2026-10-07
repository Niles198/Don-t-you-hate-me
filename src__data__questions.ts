export interface Option { label: string; value: 0 | 1 | 2 | 3 } // higher = likes you more
export interface Question { id: number; text: string; options: Option[] }

const o = (a: string, b: string, c: string, d: string): Option[] => [
  { label: a, value: 0 }, { label: b, value: 1 }, { label: c, value: 2 }, { label: d, value: 3 },
]

export const questions: Question[] = [
  { id: 1, text: 'How annoying am I on a scale of 1–10?', options: o('A solid 10', 'Around 7', 'Maybe a 4', 'Not annoying at all') },
  { id: 2, text: 'Would you still reply if I texted you at 3 AM?', options: o('Seen. Zero reply.', 'In the morning', 'Yes, grumpily', 'Yes, instantly') },
  { id: 3, text: 'How likely are you to roast me in public?', options: o('Already planning it', 'Probably', 'Only lovingly', 'Never. I protect you') },
  { id: 4, text: 'Would you share your food with me?', options: o('Absolutely not', 'One fry. Maybe.', 'Half of it', 'Take everything') },
  { id: 5, text: 'If we were stuck somewhere for 24 hours, would you survive?', options: o('I would not', 'Barely', 'Yes, with snacks', 'Best 24 hours ever') },
  { id: 6, text: 'Would you defend me if someone talked trash?', options: o('I would join in', 'I would stay quiet', 'I would say something', 'I would fight them') },
  { id: 7, text: 'How much do you actually enjoy talking to me?', options: o('Not much', 'Sometimes', 'Quite a lot', 'It is my favorite thing') },
  { id: 8, text: 'Would you choose me for your team?', options: o('Last pick', 'If nobody else is left', 'Top five', 'First pick, always') },
  { id: 9, text: 'Would you notice if I disappeared for a week?', options: o('What week?', 'By day five', 'By day two', 'Within the hour') },
  { id: 10, text: 'Be honest… do you actually like me?', options: o('No comment', 'Fine, a little', 'Yes, obviously', 'You are my favorite person') },
]
